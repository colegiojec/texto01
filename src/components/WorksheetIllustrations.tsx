import React from 'react';

interface IllustrationProps {
  type: 'technology' | 'self_esteem' | 'delinquency' | 'drugs';
  className?: string;
}

export const WorksheetIllustration: React.FC<IllustrationProps> = ({ type, className = '' }) => {
  if (type === 'technology') {
    return (
      <div className={`relative overflow-hidden rounded-xl border-2 border-sky-300 bg-linear-to-b from-sky-50 to-amber-50/50 p-4 shadow-sm ${className}`}>
        <svg viewBox="0 0 600 240" className="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skyGrad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#bae6fd" />
              <stop offset="100%" stopColor="#f0f9ff" />
            </linearGradient>
            <linearGradient id="mtnGrad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
            <linearGradient id="phoneGlow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>

          {/* Mountains background */}
          <rect width="600" height="240" fill="url(#skyGrad1)" />
          <polygon points="0,170 80,90 190,180" fill="url(#mtnGrad1)" opacity="0.6" />
          <polygon points="120,180 230,70 340,190" fill="url(#mtnGrad1)" opacity="0.7" />
          <polygon points="280,190 400,60 520,200" fill="url(#mtnGrad1)" opacity="0.5" />
          <polygon points="440,200 530,100 600,170" fill="url(#mtnGrad1)" opacity="0.6" />

          {/* Andean field */}
          <ellipse cx="300" cy="240" rx="350" ry="80" fill="#84cc16" opacity="0.85" />
          <ellipse cx="100" cy="220" rx="180" ry="50" fill="#65a30d" />
          <ellipse cx="500" cy="225" rx="190" ry="50" fill="#4d7c0f" />

          {/* Centro Tambo Bicentenario building */}
          <g transform="translate(60, 95)">
            <rect x="0" y="40" width="110" height="60" fill="#f8fafc" stroke="#334155" strokeWidth="2" rx="3" />
            <polygon points="-5,40 55,10 115,40" fill="#b91c1c" stroke="#991b1b" strokeWidth="2" />
            {/* Windows and door */}
            <rect x="15" y="55" width="22" height="25" fill="#38bdf8" stroke="#1e293b" strokeWidth="1.5" />
            <line x1="26" y1="55" x2="26" y2="80" stroke="#1e293b" strokeWidth="1.5" />
            <rect x="65" y="55" width="25" height="45" fill="#78350f" stroke="#1e293b" strokeWidth="1.5" />
            {/* Tambo sign */}
            <rect x="20" y="24" width="70" height="13" fill="#ffffff" stroke="#b91c1c" strokeWidth="1.5" rx="2" />
            <text x="55" y="34" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#b91c1c">TAMBO RURAL</text>
            {/* Satellite dish */}
            <line x1="95" y1="12" x2="95" y2="35" stroke="#475569" strokeWidth="3" />
            <path d="M 80,15 A 18 18 0 0 1 110,15" fill="none" stroke="#0284c7" strokeWidth="4" />
            <circle cx="95" cy="5" r="3" fill="#0284c7" />
            <line x1="95" y1="5" x2="95" y2="15" stroke="#0284c7" strokeWidth="1.5" />
            {/* Wi-Fi waves */}
            <path d="M 105,2 A 14 14 0 0 1 120,18" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3,3" />
            <path d="M 112,-4 A 22 22 0 0 1 132,22" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3,3" />
          </g>

          {/* Central Scene: Students with Smartphone and Shield of Protection */}
          <g transform="translate(260, 60)">
            {/* Big smartphone device */}
            <rect x="40" y="10" width="100" height="150" rx="14" fill="#0f172a" stroke="#cbd5e1" strokeWidth="3" />
            <rect x="46" y="22" width="88" height="126" rx="8" fill="url(#phoneGlow)" />
            {/* Screen interface */}
            <rect x="52" y="30" width="76" height="22" rx="4" fill="#ffffff" opacity="0.9" />
            <text x="90" y="44" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#0369a1">AULA VIRTUAL</text>
            {/* Shield icon representing safety */}
            <path d="M 90,62 L 112,72 C 112,98 90,110 90,110 C 90,110 68,98 68,72 Z" fill="#22c55e" stroke="#ffffff" strokeWidth="2" />
            <path d="M 83,85 L 88,90 L 98,78" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <text x="90" y="125" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#ffffff">NAVEGACIÓN SEGURA</text>

            {/* Boy student (Mateo) on left */}
            <g transform="translate(-55, 30)">
              {/* Andean Chullo hat */}
              <polygon points="35,30 20,48 50,48" fill="#e11d48" />
              <path d="M 20,48 Q 35,42 50,48 L 50,55 Q 35,50 20,55 Z" fill="#f59e0b" />
              <rect x="18" y="52" width="7" height="14" fill="#e11d48" rx="2" />
              <rect x="45" y="52" width="7" height="14" fill="#e11d48" rx="2" />
              <circle cx="35" cy="27" r="4" fill="#f59e0b" />
              {/* Face */}
              <ellipse cx="35" cy="58" rx="14" ry="14" fill="#e0a96d" />
              <circle cx="30" cy="56" r="2" fill="#334155" />
              <circle cx="40" cy="56" r="2" fill="#334155" />
              <path d="M 31,65 Q 35,69 39,65" fill="none" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" />
              {/* Poncho / School jacket */}
              <path d="M 12,74 Q 35,70 58,74 L 62,130 L 8,130 Z" fill="#1e40af" />
              <polygon points="35,74 25,120 45,120" fill="#dc2626" />
              <rect x="22" y="100" width="26" height="12" fill="#f59e0b" />
            </g>

            {/* Girl student (Yanira) on right */}
            <g transform="translate(135, 30)">
              {/* Long hair and braids */}
              <path d="M 15,48 Q 35,30 55,48 L 58,110 L 12,110 Z" fill="#1e293b" />
              {/* Face */}
              <ellipse cx="35" cy="58" rx="14" ry="14" fill="#deb887" />
              <circle cx="30" cy="56" r="2" fill="#334155" />
              <circle cx="40" cy="56" r="2" fill="#334155" />
              <path d="M 31,65 Q 35,69 39,65" fill="none" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" />
              {/* Traditional hair ribbons */}
              <circle cx="20" cy="95" r="4" fill="#ec4899" />
              <circle cx="50" cy="95" r="4" fill="#ec4899" />
              {/* Blouse and rural school cardigan */}
              <path d="M 16,74 Q 35,72 54,74 L 56,130 L 14,130 Z" fill="#059669" />
              <polygon points="35,74 28,110 42,110" fill="#ffffff" />
            </g>
          </g>

          {/* Cute andean sheep / alpaca nearby */}
          <g transform="translate(490, 150)">
            <ellipse cx="40" cy="40" rx="30" ry="22" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
            <rect x="25" y="55" width="6" height="18" fill="#475569" rx="3" />
            <rect x="48" y="55" width="6" height="18" fill="#475569" rx="3" />
            <ellipse cx="18" cy="30" rx="12" ry="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            <circle cx="14" cy="28" r="2" fill="#1e293b" />
            <polygon points="22,22 28,14 30,24" fill="#cbd5e1" />
          </g>
        </svg>
        <p className="mt-2 text-center text-xs font-semibold text-sky-800">
          Ilustración: Conectados con sabiduría en el centro Tambo de la comunidad andina.
        </p>
      </div>
    );
  }

  if (type === 'self_esteem') {
    return (
      <div className={`relative overflow-hidden rounded-xl border-2 border-emerald-300 bg-linear-to-b from-emerald-50 to-amber-50/50 p-4 shadow-sm ${className}`}>
        <svg viewBox="0 0 600 240" className="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skyGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="100%" stopColor="#d9f99d" />
            </linearGradient>
            <linearGradient id="apuGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#cbd5e1" />
              <stop offset="50%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
          </defs>

          {/* Background Apu mountains and sun */}
          <rect width="600" height="240" fill="url(#skyGrad2)" />
          <circle cx="300" cy="65" r="45" fill="#facc15" opacity="0.8" />
          <polygon points="20,180 180,60 320,180" fill="url(#apuGrad)" opacity="0.6" />
          <polygon points="260,180 420,50 580,180" fill="url(#apuGrad)" opacity="0.65" />
          {/* Snow peaks */}
          <polygon points="180,60 155,85 180,78 205,85" fill="#ffffff" />
          <polygon points="420,50 395,75 420,68 445,75" fill="#ffffff" />
          {/* Green valley */}
          <ellipse cx="300" cy="245" rx="380" ry="75" fill="#15803d" />

          {/* Grandparent & Traditional Andean Loom (Mama Tomasa's telar) */}
          <g transform="translate(60, 80)">
            {/* Loom frame */}
            <rect x="20" y="20" width="8" height="110" fill="#78350f" rx="3" />
            <rect x="90" y="20" width="8" height="110" fill="#78350f" rx="3" />
            <rect x="15" y="30" width="88" height="8" fill="#92400e" rx="2" />
            <rect x="15" y="115" width="88" height="8" fill="#92400e" rx="2" />
            {/* Colorful woven threads (lliclla) */}
            <line x1="35" y1="38" x2="35" y2="115" stroke="#ef4444" strokeWidth="4" />
            <line x1="45" y1="38" x2="45" y2="115" stroke="#f97316" strokeWidth="4" />
            <line x1="55" y1="38" x2="55" y2="115" stroke="#eab308" strokeWidth="4" />
            <line x1="65" y1="38" x2="65" y2="115" stroke="#10b981" strokeWidth="4" />
            <line x1="75" y1="38" x2="75" y2="115" stroke="#06b6d4" strokeWidth="4" />
            <line x1="85" y1="38" x2="85" y2="115" stroke="#8b5cf6" strokeWidth="4" />
            <rect x="30" y="65" width="60" height="35" fill="#b91c1c" opacity="0.9" rx="2" />
            <text x="60" y="86" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#fef08a">IDENTIDAD</text>
          </g>

          {/* Central Characters: Killa (with pollera & poem) and Sayri (with irrigation innovation) */}
          <g transform="translate(230, 45)">
            {/* Killa in traditional festive pollera declaiming */}
            <g transform="translate(10, 20)">
              {/* Hat / Sombrero andino */}
              <ellipse cx="40" cy="30" rx="24" ry="6" fill="#f8fafc" stroke="#334155" strokeWidth="1.5" />
              <path d="M 22,30 Q 40,12 58,30 Z" fill="#f8fafc" stroke="#334155" strokeWidth="1.5" />
              <rect x="22" y="27" width="36" height="5" fill="#e11d48" />
              {/* Face */}
              <ellipse cx="40" cy="44" rx="13" ry="13" fill="#e2a166" />
              <circle cx="35" cy="42" r="2" fill="#1e293b" />
              <circle cx="45" cy="42" r="2" fill="#1e293b" />
              <path d="M 37,50 Q 40,54 43,50" fill="none" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
              {/* Traditional embroidered blouse */}
              <rect x="22" y="58" width="36" height="30" fill="#ffffff" rx="3" />
              <path d="M 22,62 L 58,62" stroke="#db2777" strokeWidth="3" />
              {/* Multicolored tiered pollera */}
              <polygon points="12,125 68,125 54,88 26,88" fill="#e11d48" />
              <polygon points="8,145 72,145 66,120 14,120" fill="#f59e0b" />
              <line x1="8" y1="140" x2="72" y2="140" stroke="#059669" strokeWidth="4" />
              {/* Scroll with poetry */}
              <rect x="52" y="65" width="25" height="18" fill="#fef3c7" stroke="#b45309" strokeWidth="1" rx="2" />
              <line x1="56" y1="70" x2="73" y2="70" stroke="#b45309" strokeWidth="1" />
              <line x1="56" y1="75" x2="70" y2="75" stroke="#b45309" strokeWidth="1" />
            </g>

            {/* Sayri with school project */}
            <g transform="translate(110, 20)">
              {/* Cap / hair */}
              <ellipse cx="40" cy="34" rx="14" ry="10" fill="#1e293b" />
              {/* Face */}
              <ellipse cx="40" cy="44" rx="13" ry="13" fill="#cf8f56" />
              <circle cx="35" cy="42" r="2" fill="#1e293b" />
              <circle cx="45" cy="42" r="2" fill="#1e293b" />
              <path d="M 37,50 Q 40,54 43,50" fill="none" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
              {/* School jacket */}
              <rect x="24" y="58" width="32" height="45" fill="#047857" rx="3" />
              <line x1="40" y1="58" x2="40" y2="103" stroke="#facc15" strokeWidth="2" />
              {/* Trousers */}
              <rect x="25" y="103" width="13" height="42" fill="#1e293b" />
              <rect x="42" y="103" width="13" height="42" fill="#1e293b" />
              {/* Drip irrigation project model in his hand */}
              <rect x="60" y="80" width="32" height="24" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" rx="3" />
              <line x1="68" y1="104" x2="68" y2="120" stroke="#0284c7" strokeWidth="2" />
              <circle cx="68" cy="123" r="2" fill="#38bdf8" />
              <text x="76" y="94" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#0f172a">RIEGO</text>
            </g>
          </g>

          {/* Cantuta flowers - National flower of Peru */}
          <g transform="translate(480, 110)">
            <line x1="30" y1="110" x2="30" y2="30" stroke="#15803d" strokeWidth="3" />
            {/* Cantuta bell 1 */}
            <polygon points="30,40 10,25 15,10 40,25" fill="#dc2626" />
            <polygon points="10,25 2,30 15,10" fill="#facc15" />
            {/* Cantuta bell 2 */}
            <polygon points="30,70 50,55 45,40 20,55" fill="#ea580c" />
            <polygon points="50,55 58,60 45,40" fill="#facc15" />
            {/* Leaves */}
            <ellipse cx="20" cy="85" rx="10" ry="4" fill="#16a34a" transform="rotate(-20 20 85)" />
            <ellipse cx="40" cy="65" rx="10" ry="4" fill="#16a34a" transform="rotate(25 40 65)" />
            <text x="35" y="125" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#15803d">FLOR DE CANTUTA</text>
          </g>
        </svg>
        <p className="mt-2 text-center text-xs font-semibold text-emerald-800">
          Ilustración: Raíces profundas en el saber andino y orgullo por nuestros propios talentos.
        </p>
      </div>
    );
  }

  if (type === 'delinquency') {
    return (
      <div className={`relative overflow-hidden rounded-xl border-2 border-amber-300 bg-linear-to-b from-amber-50 to-orange-50/50 p-4 shadow-sm ${className}`}>
        <svg viewBox="0 0 600 240" className="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skyGrad3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fed7aa" />
              <stop offset="100%" stopColor="#ffedd5" />
            </linearGradient>
          </defs>

          {/* Background hills and road */}
          <rect width="600" height="240" fill="url(#skyGrad3)" />
          <polygon points="0,150 140,80 300,160" fill="#a16207" opacity="0.4" />
          <polygon points="200,160 380,70 540,170" fill="#b45309" opacity="0.4" />
          {/* Rural highway */}
          <polygon points="0,240 180,160 260,160 220,240" fill="#475569" />
          <line x1="220" y1="160" x2="110" y2="240" stroke="#facc15" strokeWidth="3" strokeDasharray="8,6" />
          {/* Fields */}
          <polygon points="220,240 260,160 600,160 600,240" fill="#ca8a04" opacity="0.6" />

          {/* Rondero Campesino (Don Braulio) with poncho and traditional wooden staff */}
          <g transform="translate(60, 50)">
            {/* Andean felt hat */}
            <ellipse cx="45" cy="30" rx="26" ry="6" fill="#78350f" />
            <path d="M 28,30 Q 45,15 62,30 Z" fill="#78350f" />
            {/* Face with moustache */}
            <ellipse cx="45" cy="44" rx="14" ry="14" fill="#a16207" />
            <circle cx="40" cy="42" r="2" fill="#1e293b" />
            <circle cx="50" cy="42" r="2" fill="#1e293b" />
            <path d="M 38,49 Q 45,52 52,49" stroke="#451a03" strokeWidth="2" fill="none" />
            {/* Traditional woven poncho */}
            <polygon points="10,135 80,135 55,60 35,60" fill="#991b1b" />
            <polygon points="25,135 65,135 50,60 40,60" fill="#ffffff" />
            <line x1="10" y1="125" x2="80" y2="125" stroke="#f59e0b" strokeWidth="4" />
            {/* Vara de mando / Staff of community justice */}
            <line x1="85" y1="20" x2="85" y2="160" stroke="#451a03" strokeWidth="6" strokeLinecap="round" />
            <circle cx="85" cy="18" r="7" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
            <rect x="75" y="45" width="20" height="6" fill="#facc15" rx="2" />
            <text x="45" y="152" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#78350f">RONDA CAMPESINA</text>
          </g>

          {/* Center: Renzo stopping Joel from temptation */}
          <g transform="translate(240, 55)">
            {/* Renzo (standing strong, hand open in "Stop") */}
            <g transform="translate(0, 15)">
              <ellipse cx="35" cy="35" rx="12" ry="12" fill="#d97706" />
              <circle cx="31" cy="33" r="2" fill="#1e293b" />
              <circle cx="39" cy="33" r="2" fill="#1e293b" />
              {/* Determined mouth */}
              <line x1="32" y1="41" x2="38" y2="41" stroke="#1e293b" strokeWidth="2" />
              {/* School uniform shirt & sweater */}
              <rect x="20" y="48" width="30" height="42" fill="#0284c7" rx="3" />
              <rect x="22" y="90" width="12" height="45" fill="#1e293b" />
              <rect x="36" y="90" width="12" height="45" fill="#1e293b" />
              {/* Hand in STOP gesture */}
              <rect x="52" y="55" width="22" height="12" fill="#d97706" rx="3" transform="rotate(-15 52 55)" />
              <text x="65" y="48" fontSize="8" fontWeight="black" fill="#dc2626">¡NO!</text>
            </g>

            {/* Joel (reflecting and holding back) */}
            <g transform="translate(85, 20)">
              <ellipse cx="35" cy="35" rx="12" ry="12" fill="#f59e0b" />
              <circle cx="31" cy="33" r="2" fill="#1e293b" />
              <circle cx="39" cy="33" r="2" fill="#1e293b" />
              <path d="M 32,43 Q 35,40 38,43" stroke="#1e293b" strokeWidth="1.5" fill="none" />
              <rect x="20" y="48" width="30" height="40" fill="#64748b" rx="3" />
              <rect x="22" y="88" width="12" height="45" fill="#334155" />
              <rect x="36" y="88" width="12" height="45" fill="#334155" />
              {/* Basket of boiled corn (choclos) */}
              <rect x="5" y="60" width="18" height="16" fill="#b45309" rx="2" />
              <ellipse cx="14" cy="58" rx="8" ry="4" fill="#fef08a" />
              <text x="35" y="145" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#0f172a">HONRADEZ</text>
            </g>
          </g>

          {/* Right: Shady stranger / car fleeing / danger crossed out */}
          <g transform="translate(440, 70)">
            {/* Shady silhouette */}
            <rect x="30" y="30" width="40" height="60" fill="#334155" opacity="0.8" rx="4" />
            <circle cx="50" cy="20" r="12" fill="#334155" opacity="0.8" />
            {/* Money bag with danger symbol */}
            <rect x="25" y="100" width="50" height="35" fill="#ef4444" rx="6" />
            <text x="50" y="122" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#ffffff">DINERO FÁCIL</text>
            {/* Big red prohibition cross */}
            <line x1="15" y1="15" x2="85" y2="145" stroke="#b91c1c" strokeWidth="5" />
            <line x1="85" y1="15" x2="15" y2="145" stroke="#b91c1c" strokeWidth="5" />
          </g>
        </svg>
        <p className="mt-2 text-center text-xs font-semibold text-amber-900">
          Ilustración: La justicia comunitaria y la firmeza moral para rechazar caminos delictivos.
        </p>
      </div>
    );
  }

  // drugs / alcohol illustration
  return (
    <div className={`relative overflow-hidden rounded-xl border-2 border-rose-300 bg-linear-to-b from-rose-50 to-emerald-50/50 p-4 shadow-sm ${className}`}>
      <svg viewBox="0 0 600 240" className="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skyGrad4" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fed7aa" />
            <stop offset="100%" stopColor="#a7f3d0" />
          </linearGradient>
        </defs>

        {/* High Jungle / Ceja de Selva Hills */}
        <rect width="600" height="240" fill="url(#skyGrad4)" />
        <polygon points="0,170 120,70 250,170" fill="#047857" opacity="0.6" />
        <polygon points="180,180 340,60 500,180" fill="#065f46" opacity="0.65" />
        <polygon points="420,180 540,80 600,160" fill="#064e3b" opacity="0.6" />
        {/* Lush green valley & coffee plants */}
        <ellipse cx="300" cy="245" rx="380" ry="75" fill="#059669" />

        {/* Coffee plant with red cherries (Edwin's dream) */}
        <g transform="translate(50, 90)">
          <path d="M 25,120 Q 25,50 40,20" stroke="#78350f" strokeWidth="5" fill="none" />
          {/* Green leaves */}
          <ellipse cx="25" cy="50" rx="16" ry="7" fill="#15803d" transform="rotate(-30 25 50)" />
          <ellipse cx="45" cy="40" rx="16" ry="7" fill="#15803d" transform="rotate(30 45 40)" />
          <ellipse cx="20" cy="80" rx="18" ry="8" fill="#15803d" transform="rotate(-20 20 80)" />
          <ellipse cx="45" cy="75" rx="18" ry="8" fill="#15803d" transform="rotate(25 45 75)" />
          {/* Red coffee berries */}
          <circle cx="35" cy="55" r="4" fill="#dc2626" />
          <circle cx="41" cy="58" r="4" fill="#dc2626" />
          <circle cx="28" cy="82" r="4" fill="#dc2626" />
          <circle cx="34" cy="85" r="4" fill="#dc2626" />
          <text x="35" y="132" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#065f46">CAFETAL SANO</text>
        </g>

        {/* Traditional patron saint festival banner (Fiesta Patronal de San Juan) */}
        <g transform="translate(180, 25)">
          <line x1="20" y1="20" x2="240" y2="20" stroke="#b45309" strokeWidth="3" />
          <polygon points="30,22 55,50 80,22" fill="#ef4444" />
          <polygon points="85,22 110,50 135,22" fill="#3b82f6" />
          <polygon points="140,22 165,50 190,22" fill="#eab308" />
          <polygon points="195,22 220,50 245,22" fill="#10b981" />
        </g>

        {/* Center: Edwin and Nayeli asserting their future */}
        <g transform="translate(220, 60)">
          {/* Nayeli (with stethoscope dream & clear mind) */}
          <g transform="translate(10, 15)">
            <ellipse cx="35" cy="35" rx="12" ry="12" fill="#d97706" />
            <circle cx="31" cy="33" r="2" fill="#1e293b" />
            <circle cx="39" cy="33" r="2" fill="#1e293b" />
            <path d="M 32,42 Q 35,46 38,42" stroke="#1e293b" strokeWidth="1.5" fill="none" />
            {/* White nursing cross / clear uniform */}
            <rect x="20" y="48" width="30" height="44" fill="#f8fafc" stroke="#0284c7" strokeWidth="1.5" rx="3" />
            <line x1="35" y1="56" x2="35" y2="70" stroke="#ef4444" strokeWidth="3" />
            <line x1="28" y1="63" x2="42" y2="63" stroke="#ef4444" strokeWidth="3" />
            <rect x="22" y="92" width="12" height="42" fill="#0284c7" />
            <rect x="36" y="92" width="12" height="42" fill="#0284c7" />
          </g>

          {/* Edwin (holding agronomist notebook, palm up rejecting liquor) */}
          <g transform="translate(90, 15)">
            <ellipse cx="35" cy="35" rx="12" ry="12" fill="#b45309" />
            <circle cx="31" cy="33" r="2" fill="#1e293b" />
            <circle cx="39" cy="33" r="2" fill="#1e293b" />
            <path d="M 32,42 Q 35,46 38,42" stroke="#1e293b" strokeWidth="1.5" fill="none" />
            <rect x="20" y="48" width="30" height="44" fill="#059669" rx="3" />
            <rect x="22" y="92" width="12" height="42" fill="#1e293b" />
            <rect x="36" y="92" width="12" height="42" fill="#1e293b" />
            {/* Agronomy notebook */}
            <rect x="52" y="55" width="16" height="24" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" rx="2" />
            <text x="60" y="68" fontSize="5" fontWeight="bold" textAnchor="middle" fill="#713f12">AGRO</text>
          </g>
        </g>

        {/* Right side: Bottle & glass with PROHIBITION symbol */}
        <g transform="translate(460, 80)">
          {/* Liquor bottle */}
          <rect x="30" y="35" width="22" height="55" fill="#b45309" rx="3" />
          <rect x="37" y="20" width="8" height="15" fill="#78350f" rx="1" />
          {/* Glass */}
          <polygon points="60,50 78,50 72,85 64,85" fill="#fbbf24" opacity="0.8" />
          <line x1="68" y1="85" x2="68" y2="95" stroke="#64748b" strokeWidth="2" />
          <line x1="60" y1="95" x2="76" y2="95" stroke="#64748b" strokeWidth="2" />
          {/* Big Prohibition circle with diagonal line */}
          <circle cx="55" cy="60" r="38" fill="none" stroke="#dc2626" strokeWidth="6" />
          <line x1="28" y1="33" x2="82" y2="87" stroke="#dc2626" strokeWidth="6" />
          <text x="55" y="115" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#dc2626">CUIDA TU FUTURO</text>
        </g>
      </svg>
      <p className="mt-2 text-center text-xs font-semibold text-rose-800">
        Ilustración: Mente despejada y asertividad para defender nuestros sueños y la salud.
      </p>
    </div>
  );
};
