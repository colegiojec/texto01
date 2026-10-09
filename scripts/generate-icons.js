import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function createPNG(width, height, drawPixel) {
  // RGBA buffer with filter byte per row
  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(rowSize * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // Filter type 0 (None)
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = drawPixel(x, y, width, height);
      const pixelOffset = rowOffset + 1 + x * 4;
      rawData[pixelOffset] = r;
      rawData[pixelOffset + 1] = g;
      rawData[pixelOffset + 2] = b;
      rawData[pixelOffset + 3] = a;
    }
  }

  const deflated = zlib.deflateSync(rawData);

  function crc32(buf) {
    let table = crc32.table;
    if (!table) {
      table = crc32.table = new Uint32Array(256);
      for (let i = 0; i < 256; i++) {
        let c = i;
        for (let k = 0; k < 8; k++) {
          c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
        }
        table[i] = c;
      }
    }
    let crc = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function makeChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeAndData = Buffer.concat([Buffer.from(type), data]);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(typeAndData), 0);
    return Buffer.concat([len, typeAndData, crc]);
  }

  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // 8-bit depth
  ihdrData[9] = 6; // RGBA
  ihdrData[10] = 0; // Deflate
  ihdrData[11] = 0; // Filter
  ihdrData[12] = 0; // Non-interlaced
  const ihdrChunk = makeChunk('IHDR', ihdrData);

  const idatChunk = makeChunk('IDAT', deflated);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Icon generator with educational badge (Peruvian flag red + open book icon)
function drawAppIcon(isMaskable) {
  return function (x, y, w, h) {
    const cx = w / 2;
    const cy = h / 2;
    const dx = x - cx;
    const dy = y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxRadius = w / 2;

    // Corner rounding for standard icons
    if (!isMaskable) {
      const cornerR = w * 0.22;
      const insideBox =
        (Math.abs(dx) <= cx - cornerR) ||
        (Math.abs(dy) <= cy - cornerR) ||
        Math.hypot(Math.abs(dx) - (cx - cornerR), Math.abs(dy) - (cy - cornerR)) <= cornerR;
      if (!insideBox) return [0, 0, 0, 0];
    }

    // Gradient background: Peruvian deep red to crimson
    const t = (y / h) * 0.7 + (x / w) * 0.3;
    const bgR = Math.round(185 * (1 - t * 0.2)); // #b91c1c to #991b1b
    const bgG = Math.round(28 * (1 - t * 0.3));
    const bgB = Math.round(28 * (1 - t * 0.3));

    // Inner circle emblem (safe zone for maskable)
    const scaleFactor = isMaskable ? 0.38 : 0.44;
    const emblemRadius = w * scaleFactor;

    // Check if inside central emblem
    if (dist < emblemRadius) {
      // White inner badge
      if (dist > emblemRadius - (w * 0.02)) {
        return [254, 240, 138, 255]; // Yellow gold rim #fef08a
      }
      
      // Book / Ribbon icon center
      const nx = (x - cx) / (emblemRadius * 0.9);
      const ny = (y - cy) / (emblemRadius * 0.9);

      // Open book shape
      const inLeftPage = nx < -0.05 && nx > -0.75 && ny > -0.55 && ny < 0.45;
      const inRightPage = nx > 0.05 && nx < 0.75 && ny > -0.55 && ny < 0.45;

      if (inLeftPage || inRightPage) {
        // Book page lines
        const isSpine = Math.abs(nx) < 0.12;
        if (isSpine) return [220, 38, 38, 255];

        // Page text stripes simulation
        const lineY = (ny + 0.55) % 0.18;
        if (lineY > 0.11 && lineY < 0.16 && Math.abs(nx) > 0.18 && Math.abs(nx) < 0.65) {
          return [185, 28, 28, 220]; // Red text lines
        }

        return [255, 255, 255, 255]; // Crisp white page
      }

      // Golden star / 2.° grade badge at top
      if (ny < -0.6 && ny > -0.85 && Math.abs(nx) < 0.35) {
        return [250, 204, 21, 255]; // Gold #facc15
      }

      return [15, 23, 42, 255]; // Dark slate emblem background
    }

    return [bgR, bgG, bgB, 255];
  };
}

const publicDir = path.resolve(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate PNG icons
fs.writeFileSync(path.join(publicDir, 'pwa-192x192.png'), createPNG(192, 192, drawAppIcon(false)));
fs.writeFileSync(path.join(publicDir, 'pwa-512x512.png'), createPNG(512, 512, drawAppIcon(false)));
fs.writeFileSync(path.join(publicDir, 'pwa-maskable-512x512.png'), createPNG(512, 512, drawAppIcon(true)));
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), createPNG(180, 180, drawAppIcon(false)));
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), createPNG(64, 64, drawAppIcon(false)));

// Also create public/icon.svg
const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="redGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#dc2626"/>
      <stop offset="100%" stop-color="#991b1b"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fde047"/>
      <stop offset="100%" stop-color="#ca8a04"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="url(#redGrad)"/>
  <circle cx="256" cy="256" r="190" fill="#0f172a" stroke="url(#goldGrad)" stroke-width="12"/>
  <!-- Open Book -->
  <path d="M 256,360 C 220,335 150,335 110,345 L 110,200 C 150,190 220,190 256,215 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="4"/>
  <path d="M 256,360 C 292,335 362,335 402,345 L 402,200 C 362,190 292,190 256,215 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="4"/>
  <!-- Book Spine -->
  <path d="M 256,215 L 256,360" stroke="#b91c1c" stroke-width="6"/>
  <!-- Lines in pages -->
  <line x1="140" y1="240" x2="225" y2="240" stroke="#b91c1c" stroke-width="5" stroke-linecap="round"/>
  <line x1="140" y1="265" x2="225" y2="265" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
  <line x1="140" y1="290" x2="225" y2="290" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
  <line x1="140" y1="315" x2="200" y2="315" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
  <line x1="287" y1="240" x2="372" y2="240" stroke="#b91c1c" stroke-width="5" stroke-linecap="round"/>
  <line x1="287" y1="265" x2="372" y2="265" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
  <line x1="287" y1="290" x2="372" y2="290" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
  <line x1="287" y1="315" x2="345" y2="315" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
  <!-- Top Badge -->
  <rect x="180" y="115" width="152" height="42" rx="10" fill="url(#goldGrad)"/>
  <text x="256" y="144" font-family="system-ui, sans-serif" font-weight="900" font-size="22" fill="#78350f" text-anchor="middle">2.° SECUNDARIA</text>
  <!-- Flag ribbon tag -->
  <rect x="236" y="380" width="40" height="24" rx="4" fill="#dc2626"/>
  <text x="256" y="397" font-family="system-ui, sans-serif" font-weight="900" font-size="12" fill="#ffffff" text-anchor="middle">PERÚ</text>
</svg>`;
fs.writeFileSync(path.join(publicDir, 'icon.svg'), svgIcon);

console.log('Successfully generated all PWA icons in /public:');
console.log('- icon.svg');
console.log('- pwa-192x192.png');
console.log('- pwa-512x512.png');
console.log('- pwa-maskable-512x512.png');
console.log('- apple-touch-icon.png');
console.log('- favicon.ico');
