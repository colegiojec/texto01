import { WorksheetData, StudentAnswers } from '../types/worksheet';
import { calculateWorksheetScore } from '../components/GradingScorecard';

export interface ExportHtmlOptions {
  includeAnswers?: boolean;
  includeTeacherSolutions?: boolean;
  title?: string;
  fileName?: string;
  interactive?: boolean; // true for full interactive offline app, false for static print sheet
}

/**
 * Returns the raw inline SVG markup for each theme's didactic illustration.
 */
function getIllustrationSvg(type: 'technology' | 'self_esteem' | 'delinquency' | 'drugs'): string {
  if (type === 'technology') {
    return `
      <div class="illustration-box">
        <svg viewBox="0 0 600 220" class="svg-art" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skyGrad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#bae6fd" />
              <stop offset="100%" stop-color="#f0f9ff" />
            </linearGradient>
            <linearGradient id="mtnGrad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#94a3b8" />
              <stop offset="100%" stop-color="#475569" />
            </linearGradient>
          </defs>
          <rect width="600" height="220" fill="url(#skyGrad1)" />
          <polygon points="0,160 80,80 190,170" fill="url(#mtnGrad1)" opacity="0.6" />
          <polygon points="120,170 230,60 340,180" fill="url(#mtnGrad1)" opacity="0.7" />
          <polygon points="280,180 400,50 520,190" fill="url(#mtnGrad1)" opacity="0.5" />
          <polygon points="440,190 530,90 600,160" fill="url(#mtnGrad1)" opacity="0.6" />
          <ellipse cx="300" cy="230" rx="350" ry="70" fill="#84cc16" opacity="0.85" />
          <!-- Tambo Rural -->
          <g transform="translate(60, 85)">
            <rect x="0" y="40" width="110" height="60" fill="#f8fafc" stroke="#334155" stroke-width="2" rx="3" />
            <polygon points="-5,40 55,10 115,40" fill="#b91c1c" stroke="#991b1b" stroke-width="2" />
            <rect x="15" y="55" width="22" height="25" fill="#38bdf8" stroke="#1e293b" stroke-width="1.5" />
            <line x1="26" y1="55" x2="26" y2="80" stroke="#1e293b" stroke-width="1.5" />
            <rect x="65" y="55" width="25" height="45" fill="#78350f" stroke="#1e293b" stroke-width="1.5" />
            <rect x="20" y="24" width="70" height="13" fill="#ffffff" stroke="#b91c1c" stroke-width="1.5" rx="2" />
            <text x="55" y="34" font-size="7" font-weight="bold" text-anchor="middle" fill="#b91c1c">TAMBO RURAL</text>
            <line x1="95" y1="12" x2="95" y2="35" stroke="#475569" stroke-width="3" />
            <path d="M 80,15 A 18 18 0 0 1 110,15" fill="none" stroke="#0284c7" stroke-width="4" />
            <circle cx="95" cy="5" r="3" fill="#0284c7" />
          </g>
          <!-- Center Smartphone & Students -->
          <g transform="translate(260, 50)">
            <rect x="40" y="10" width="90" height="140" rx="12" fill="#0f172a" stroke="#cbd5e1" stroke-width="3" />
            <rect x="46" y="20" width="78" height="118" rx="8" fill="#0284c7" />
            <path d="M 85,55 L 105,65 C 105,90 85,100 85,100 C 85,100 65,90 65,65 Z" fill="#22c55e" stroke="#ffffff" stroke-width="2" />
            <path d="M 78,76 L 83,81 L 93,69" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" />
            <text x="85" y="118" font-size="7" font-weight="bold" text-anchor="middle" fill="#ffffff">NAVEGACIÓN SEGURA</text>
            <!-- Mateo -->
            <g transform="translate(-50, 25)">
              <polygon points="35,30 20,48 50,48" fill="#e11d48" />
              <ellipse cx="35" cy="58" rx="14" ry="14" fill="#e0a96d" />
              <circle cx="30" cy="56" r="2" fill="#334155" />
              <circle cx="40" cy="56" r="2" fill="#334155" />
              <path d="M 12,74 Q 35,70 58,74 L 62,130 L 8,130 Z" fill="#1e40af" />
            </g>
            <!-- Yanira -->
            <g transform="translate(130, 25)">
              <path d="M 15,48 Q 35,30 55,48 L 58,110 L 12,110 Z" fill="#1e293b" />
              <ellipse cx="35" cy="58" rx="14" ry="14" fill="#deb887" />
              <circle cx="30" cy="56" r="2" fill="#334155" />
              <circle cx="40" cy="56" r="2" fill="#334155" />
              <path d="M 16,74 Q 35,72 54,74 L 56,130 L 14,130 Z" fill="#059669" />
            </g>
          </g>
        </svg>
        <p class="illustration-caption">Ilustración: Conectados con sabiduría en el centro Tambo de la comunidad andina.</p>
      </div>
    `;
  }

  if (type === 'self_esteem') {
    return `
      <div class="illustration-box">
        <svg viewBox="0 0 600 220" class="svg-art" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skyGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef08a" />
              <stop offset="100%" stop-color="#d9f99d" />
            </linearGradient>
          </defs>
          <rect width="600" height="220" fill="url(#skyGrad2)" />
          <circle cx="300" cy="60" r="40" fill="#facc15" opacity="0.8" />
          <polygon points="20,170 180,50 320,170" fill="#64748b" opacity="0.6" />
          <polygon points="260,170 420,40 580,170" fill="#475569" opacity="0.65" />
          <polygon points="180,50 155,75 180,68 205,75" fill="#ffffff" />
          <polygon points="420,40 395,65 420,58 445,65" fill="#ffffff" />
          <ellipse cx="300" cy="235" rx="380" ry="70" fill="#15803d" />
          <!-- Loom -->
          <g transform="translate(60, 70)">
            <rect x="20" y="20" width="8" height="100" fill="#78350f" rx="2" />
            <rect x="85" y="20" width="8" height="100" fill="#78350f" rx="2" />
            <line x1="30" y1="35" x2="30" y2="110" stroke="#ef4444" stroke-width="4" />
            <line x1="42" y1="35" x2="42" y2="110" stroke="#f97316" stroke-width="4" />
            <line x1="54" y1="35" x2="54" y2="110" stroke="#eab308" stroke-width="4" />
            <line x1="66" y1="35" x2="66" y2="110" stroke="#10b981" stroke-width="4" />
            <line x1="78" y1="35" x2="78" y2="110" stroke="#06b6d4" stroke-width="4" />
            <rect x="25" y="60" width="60" height="30" fill="#b91c1c" rx="2" />
            <text x="55" y="78" font-size="7" font-weight="bold" text-anchor="middle" fill="#fef08a">IDENTIDAD</text>
          </g>
          <!-- Killa & Sayri -->
          <g transform="translate(240, 40)">
            <!-- Killa -->
            <g transform="translate(10, 20)">
              <ellipse cx="40" cy="30" rx="22" ry="6" fill="#f8fafc" stroke="#334155" />
              <ellipse cx="40" cy="44" rx="13" ry="13" fill="#e2a166" />
              <circle cx="35" cy="42" r="2" fill="#1e293b" />
              <circle cx="45" cy="42" r="2" fill="#1e293b" />
              <polygon points="12,125 68,125 54,88 26,88" fill="#e11d48" />
              <polygon points="8,145 72,145 66,120 14,120" fill="#f59e0b" />
            </g>
            <!-- Sayri -->
            <g transform="translate(105, 20)">
              <ellipse cx="40" cy="44" rx="13" ry="13" fill="#cf8f56" />
              <circle cx="35" cy="42" r="2" fill="#1e293b" />
              <circle cx="45" cy="42" r="2" fill="#1e293b" />
              <rect x="24" y="58" width="32" height="45" fill="#047857" rx="3" />
              <rect x="60" y="80" width="28" height="20" fill="#38bdf8" rx="2" />
              <text x="74" y="93" font-size="6" font-weight="bold" text-anchor="middle" fill="#0f172a">RIEGO</text>
            </g>
          </g>
        </svg>
        <p class="illustration-caption">Ilustración: Raíces profundas en el saber andino y orgullo por nuestros propios talentos.</p>
      </div>
    `;
  }

  if (type === 'delinquency') {
    return `
      <div class="illustration-box">
        <svg viewBox="0 0 600 220" class="svg-art" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skyGrad3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fed7aa" />
              <stop offset="100%" stop-color="#ffedd5" />
            </linearGradient>
          </defs>
          <rect width="600" height="220" fill="url(#skyGrad3)" />
          <polygon points="0,220 180,150 260,150 220,220" fill="#475569" />
          <line x1="220" y1="150" x2="110" y2="220" stroke="#facc15" stroke-width="3" stroke-dasharray="8,6" />
          <!-- Rondero Campesino -->
          <g transform="translate(60, 45)">
            <ellipse cx="45" cy="30" rx="24" ry="6" fill="#78350f" />
            <ellipse cx="45" cy="44" rx="14" ry="14" fill="#a16207" />
            <polygon points="10,135 80,135 55,60 35,60" fill="#991b1b" />
            <line x1="85" y1="20" x2="85" y2="150" stroke="#451a03" stroke-width="6" stroke-linecap="round" />
            <text x="45" y="152" font-size="7" font-weight="bold" text-anchor="middle" fill="#78350f">RONDA CAMPESINA</text>
          </g>
          <!-- Renzo & Joel -->
          <g transform="translate(240, 50)">
            <g transform="translate(0, 15)">
              <ellipse cx="35" cy="35" rx="12" ry="12" fill="#d97706" />
              <rect x="20" y="48" width="30" height="42" fill="#0284c7" rx="3" />
              <rect x="52" y="55" width="22" height="12" fill="#d97706" rx="3" />
              <text x="63" y="50" font-size="9" font-weight="900" fill="#dc2626">¡NO!</text>
            </g>
            <g transform="translate(85, 20)">
              <ellipse cx="35" cy="35" rx="12" ry="12" fill="#f59e0b" />
              <rect x="20" y="48" width="30" height="40" fill="#64748b" rx="3" />
            </g>
          </g>
          <!-- Crossed out easy money -->
          <g transform="translate(440, 60)">
            <rect x="25" y="90" width="50" height="35" fill="#ef4444" rx="6" />
            <text x="50" y="112" font-size="8" font-weight="bold" text-anchor="middle" fill="#ffffff">DINERO FÁCIL</text>
            <line x1="15" y1="15" x2="85" y2="135" stroke="#b91c1c" stroke-width="5" />
            <line x1="85" y1="15" x2="15" y2="135" stroke="#b91c1c" stroke-width="5" />
          </g>
        </svg>
        <p class="illustration-caption">Ilustración: La justicia comunitaria y la firmeza moral para rechazar caminos delictivos.</p>
      </div>
    `;
  }

  // drugs / alcohol
  return `
    <div class="illustration-box">
      <svg viewBox="0 0 600 220" class="svg-art" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skyGrad4" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#fed7aa" />
            <stop offset="100%" stop-color="#a7f3d0" />
          </linearGradient>
        </defs>
        <rect width="600" height="220" fill="url(#skyGrad4)" />
        <ellipse cx="300" cy="235" rx="380" ry="70" fill="#059669" />
        <!-- Coffee plant -->
        <g transform="translate(60, 80)">
          <path d="M 25,110 Q 25,50 40,20" stroke="#78350f" stroke-width="5" fill="none" />
          <ellipse cx="25" cy="50" rx="14" ry="6" fill="#15803d" />
          <ellipse cx="45" cy="40" rx="14" ry="6" fill="#15803d" />
          <circle cx="35" cy="55" r="4" fill="#dc2626" />
          <text x="35" y="125" font-size="7" font-weight="bold" text-anchor="middle" fill="#065f46">CAFETAL SANO</text>
        </g>
        <!-- Edwin & Nayeli -->
        <g transform="translate(230, 50)">
          <g transform="translate(10, 15)">
            <ellipse cx="35" cy="35" rx="12" ry="12" fill="#d97706" />
            <rect x="20" y="48" width="30" height="44" fill="#f8fafc" stroke="#0284c7" stroke-width="1.5" rx="3" />
            <line x1="35" y1="56" x2="35" y2="70" stroke="#ef4444" stroke-width="3" />
            <line x1="28" y1="63" x2="42" y2="63" stroke="#ef4444" stroke-width="3" />
          </g>
          <g transform="translate(90, 15)">
            <ellipse cx="35" cy="35" rx="12" ry="12" fill="#b45309" />
            <rect x="20" y="48" width="30" height="44" fill="#059669" rx="3" />
          </g>
        </g>
        <!-- Prohibition Symbol -->
        <g transform="translate(460, 70)">
          <rect x="30" y="35" width="20" height="50" fill="#b45309" rx="3" />
          <polygon points="58,50 74,50 68,80 62,80" fill="#fbbf24" opacity="0.8" />
          <circle cx="52" cy="55" r="35" fill="none" stroke="#dc2626" stroke-width="5" />
          <line x1="28" y1="30" x2="76" y2="80" stroke="#dc2626" stroke-width="5" />
          <text x="52" y="105" font-size="8" font-weight="bold" text-anchor="middle" fill="#dc2626">CUIDA TU FUTURO</text>
        </g>
      </svg>
      <p class="illustration-caption">Ilustración: Mente despejada y asertividad para defender nuestros sueños y la salud.</p>
    </div>
  `;
}

function escapeHtml(str: string): string {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Builds the complete STANDALONE INTERACTIVE HTML application.
 * Contains the entire interactive engine in vanilla JS with zero external dependencies.
 */
export function generateInteractiveHtmlString(
  worksheets: WorksheetData[],
  initialAnswers?: StudentAnswers,
  options?: ExportHtmlOptions
): string {
  const letters = ['A', 'B', 'C', 'D'];
  const docTitle =
    options?.title ||
    (worksheets.length === 1
      ? `Ficha Interactiva N.° ${worksheets[0].themeNumber}: ${worksheets[0].title}`
      : 'Cuaderno Pedagógico Interactivo de Comprensión Lectora • 2.° Secundaria Rural (Perú)');

  // Pre-generate illustrations mapping so they don't have to be reconstructed
  const illustrationsMap: Record<number, string> = {};
  worksheets.forEach((w) => {
    illustrationsMap[w.id] = getIllustrationSvg(w.reading.illustrationType);
  });

  const serializedWorksheets = JSON.stringify(worksheets);
  const serializedInitialAnswers = JSON.stringify(initialAnswers || null);
  const serializedIllustrations = JSON.stringify(illustrationsMap);

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(docTitle)}</title>
  <style>
    /* Reset & Theme Styles */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Helvetica, Arial, sans-serif;
      background-color: #f1f5f9;
      color: #0f172a;
      line-height: 1.5;
      padding-bottom: 60px;
    }

    /* Fixed Application Header */
    .app-header {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: #0f172a;
      color: #ffffff;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      border-bottom: 2px solid #b91c1c;
    }

    .header-content {
      max-width: 1000px;
      margin: 0 auto;
      padding: 10px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
    }

    .brand-wrap {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .flag-badge {
      background: #dc2626;
      color: #ffffff;
      font-weight: 900;
      font-size: 13px;
      padding: 6px 10px;
      border-radius: 8px;
      letter-spacing: 1px;
    }

    .brand-title {
      font-size: 14px;
      font-weight: 900;
      line-height: 1.2;
    }
    .brand-sub {
      font-size: 11px;
      color: #94a3b8;
    }

    .top-actions {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    .btn-action {
      background: #dc2626;
      color: #ffffff;
      border: none;
      padding: 7px 12px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: bold;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.15s;
    }
    .btn-action:hover { background: #b91c1c; transform: translateY(-1px); }
    .btn-action:active { transform: translateY(0); }

    .btn-secondary { background: #334155; }
    .btn-secondary:hover { background: #475569; }

    .btn-emerald { background: #059669; }
    .btn-emerald:hover { background: #047857; }

    .btn-indigo { background: #4f46e5; }
    .btn-indigo:hover { background: #4338ca; }

    /* Theme Tabs Navigation */
    .theme-nav {
      background: #020617;
      border-top: 1px solid #1e293b;
    }
    .theme-nav-inner {
      max-width: 1000px;
      margin: 0 auto;
      display: flex;
      gap: 6px;
      padding: 6px 16px;
      overflow-x: auto;
    }
    .nav-tab {
      background: transparent;
      color: #94a3b8;
      border: 1px solid transparent;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: bold;
      cursor: pointer;
      white-space: nowrap;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.15s;
    }
    .nav-tab:hover {
      background: #1e293b;
      color: #ffffff;
    }
    .nav-tab.active {
      background: #b91c1c;
      color: #ffffff;
      border-color: #ef4444;
      box-shadow: 0 2px 8px rgba(185,28,28,0.4);
    }
    .tab-num {
      background: rgba(0,0,0,0.3);
      padding: 2px 6px;
      border-radius: 10px;
      font-size: 10px;
    }

    /* Main Container */
    .main-wrap {
      max-width: 960px;
      margin: 20px auto;
      padding: 0 12px;
    }

    /* Progress Banner */
    .progress-bar-card {
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 12px;
      padding: 12px 18px;
      margin-bottom: 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      flex-wrap: wrap;
    }
    .progress-label {
      font-size: 12px;
      font-weight: bold;
      color: #334155;
    }
    .progress-track {
      flex: 1;
      min-width: 180px;
      height: 10px;
      background: #e2e8f0;
      border-radius: 10px;
      overflow: hidden;
    }
    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #f59e0b, #10b981);
      width: 0%;
      transition: width 0.3s ease;
    }

    /* Ficha Paper Card Container */
    .ficha-paper {
      background: #ffffff;
      border: 2px solid #334155;
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      margin-bottom: 24px;
    }

    /* 1. Header Box */
    .cuaderno-header {
      border: 2px solid #0f172a;
      border-radius: 6px;
      padding: 14px;
      margin-bottom: 20px;
    }
    .header-row-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #0f172a;
      padding-bottom: 8px;
      margin-bottom: 12px;
      flex-wrap: wrap;
      gap: 8px;
    }
    .minedu-label {
      font-size: 10px;
      font-weight: 800;
      color: #64748b;
      letter-spacing: 0.5px;
    }
    .ficha-head-title {
      font-size: 15px;
      font-weight: 900;
      color: #0f172a;
    }
    .tag-accent {
      font-size: 12px;
      font-weight: bold;
      color: #b91c1c;
    }

    .theme-hero-box {
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      padding: 10px 14px;
      text-align: center;
      margin-bottom: 12px;
    }
    .theme-hero-box h2 {
      font-size: 16px;
      font-weight: 900;
      color: #1e293b;
      text-transform: uppercase;
    }
    .theme-hero-box p {
      font-size: 12px;
      color: #475569;
      font-style: italic;
    }

    /* Student Form Fields Table */
    .student-data-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 12px;
      margin-bottom: 10px;
    }
    .student-data-table td {
      border: 1px solid #475569;
      padding: 6px 10px;
    }
    .student-data-table td.lbl {
      background: #f1f5f9;
      font-weight: bold;
      width: 20%;
    }
    .field-input {
      width: 100%;
      border: none;
      background: transparent;
      font-size: 12px;
      font-family: inherit;
      color: #0f172a;
      font-weight: 600;
      outline: none;
    }
    .field-input:focus {
      background: #fef9c3;
    }
    .score-indicator-cell {
      background: #fffbeb;
      font-weight: 900;
      text-align: center;
      color: #b45309;
    }

    .cneb-info-box {
      background: #fffbeb;
      border: 1px solid #fde68a;
      border-radius: 4px;
      padding: 8px 12px;
      font-size: 11px;
      color: #78350f;
    }

    /* Section Component */
    .activity-section {
      border: 1.5px solid #334155;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 20px;
      background: #ffffff;
    }
    .section-header-bar {
      display: flex;
      align-items: center;
      gap: 10px;
      border-bottom: 2px solid #0f172a;
      padding-bottom: 8px;
      margin-bottom: 12px;
    }
    .sec-num-badge {
      background: #dc2626;
      color: #ffffff;
      font-weight: 900;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
    }
    .sec-title-txt {
      font-size: 14px;
      font-weight: 900;
      color: #0f172a;
      text-transform: uppercase;
    }
    .sec-help-txt {
      font-size: 11.5px;
      color: #475569;
      margin-bottom: 12px;
      font-weight: 500;
    }

    /* Reading Box */
    .reading-meta-bar {
      background: #fffbeb;
      border: 1px solid #fef08a;
      border-radius: 6px;
      padding: 8px 12px;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      gap: 10px;
      flex-wrap: wrap;
    }
    .audio-btn {
      background: #0284c7;
      color: #ffffff;
      border: none;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: bold;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
    .audio-btn:hover { background: #0369a1; }
    .audio-btn.active { background: #dc2626; }

    .story-body {
      font-size: 13.5px;
      line-height: 1.7;
      color: #1e293b;
      text-align: justify;
      margin-bottom: 14px;
    }
    .story-h3 {
      font-size: 17px;
      font-weight: 900;
      text-align: center;
      margin-bottom: 12px;
      color: #0f172a;
    }
    .story-p {
      text-indent: 24px;
      margin-bottom: 10px;
    }

    .quote-callout {
      border-left: 4px solid #dc2626;
      background: #fef2f2;
      padding: 10px 14px;
      font-size: 12px;
      font-style: italic;
      color: #7f1d1d;
      margin: 14px 0;
      border-radius: 0 6px 6px 0;
    }

    .glossary-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 10px;
      margin-top: 12px;
    }
    .glossary-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 8px 10px;
      font-size: 11px;
    }
    .glossary-card strong {
      color: #b91c1c;
      display: block;
      margin-bottom: 2px;
    }

    /* Subsections & Interactive Multiple-Choice Questions */
    .level-ribbon {
      padding: 5px 10px;
      font-size: 11.5px;
      font-weight: 900;
      text-transform: uppercase;
      border-radius: 6px;
      margin-bottom: 12px;
    }
    .ribbon-a { background: #dcfce7; color: #166534; border: 1px solid #bbf7d0; }
    .ribbon-b { background: #e0f2fe; color: #075985; border: 1px solid #bae6fd; }
    .ribbon-c { background: #fef3c7; color: #92400e; border: 1px solid #fde68a; }

    .q-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 12px 14px;
      margin-bottom: 14px;
      transition: border-color 0.2s;
    }
    .q-card:hover {
      border-color: #94a3b8;
    }
    .q-title {
      font-size: 12.5px;
      font-weight: bold;
      color: #0f172a;
      margin-bottom: 10px;
    }

    .options-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 8px;
    }
    @media (min-width: 600px) {
      .options-container {
        grid-template-columns: 1fr 1fr;
      }
    }

    .opt-interactive {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border-radius: 6px;
      border: 1.5px solid #cbd5e1;
      background: #f8fafc;
      cursor: pointer;
      font-size: 12px;
      user-select: none;
      transition: all 0.15s;
    }
    .opt-interactive:hover {
      background: #f1f5f9;
      border-color: #94a3b8;
    }
    .opt-interactive.selected {
      background: #eff6ff;
      border-color: #2563eb;
      color: #1e3a8a;
      font-weight: bold;
      box-shadow: 0 0 0 1px #2563eb;
    }
    .opt-badge {
      font-weight: 900;
      color: #475569;
      flex-shrink: 0;
    }
    .opt-interactive.selected .opt-badge {
      color: #2563eb;
    }

    /* Critical Textarea */
    .crit-input {
      width: 100%;
      min-height: 80px;
      border: 1.5px solid #cbd5e1;
      border-radius: 6px;
      padding: 10px;
      font-size: 12.5px;
      font-family: inherit;
      color: #0f172a;
      resize: vertical;
      line-height: 1.4;
      margin-top: 6px;
    }
    .crit-input:focus {
      outline: none;
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37,99,235,0.15);
    }
    .char-count {
      font-size: 10.5px;
      color: #64748b;
      text-align: right;
      margin-top: 3px;
    }

    /* Solucionario Hints */
    .solution-box {
      margin-top: 10px;
      padding: 8px 12px;
      background: #eef2ff;
      border-left: 4px solid #6366f1;
      border-radius: 0 6px 6px 0;
      font-size: 11px;
      color: #3730a3;
      display: none;
    }
    .show-solutions .solution-box {
      display: block !important;
    }

    /* Sentence Ordering Interactive */
    .order-item-card {
      display: flex;
      align-items: center;
      gap: 12px;
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      padding: 8px 12px;
      margin-bottom: 8px;
    }
    .order-rank {
      font-size: 12px;
      font-weight: 900;
      color: #b45309;
      background: #fef3c7;
      padding: 3px 8px;
      border-radius: 4px;
      border: 1px solid #fde68a;
    }
    .order-btns {
      display: flex;
      flex-direction: column;
      gap: 2px;
      margin-left: auto;
    }
    .btn-updown {
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 3px;
      font-size: 10px;
      padding: 2px 6px;
      cursor: pointer;
      font-weight: bold;
    }
    .btn-updown:hover { background: #e2e8f0; }

    /* Column Matching Interactive */
    .match-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 12px;
    }
    .match-table td {
      padding: 8px 10px;
      border-bottom: 1px solid #e2e8f0;
      vertical-align: middle;
    }
    .match-select {
      padding: 4px 8px;
      border-radius: 4px;
      border: 1.5px solid #94a3b8;
      font-size: 12px;
      font-weight: bold;
      background: #ffffff;
      cursor: pointer;
    }

    /* Word Search Interactive */
    .ws-interactive-wrap {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
    .ws-table-int {
      border-collapse: collapse;
      margin: 0 auto;
      user-select: none;
    }
    .ws-cell-int {
      width: 28px;
      height: 28px;
      border: 1px solid #94a3b8;
      text-align: center;
      font-weight: 900;
      font-size: 12px;
      cursor: pointer;
      background: #ffffff;
      transition: background 0.15s;
    }
    .ws-cell-int:hover {
      background: #e2e8f0;
    }
    .ws-cell-int.highlighted {
      background: #fef08a !important;
      color: #854d0e;
    }
    .ws-clues-box {
      flex: 1;
      min-width: 240px;
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      padding: 10px 14px;
    }
    .clue-clickable {
      padding: 4px 8px;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 11.5px;
      margin-bottom: 4px;
      transition: background 0.15s;
    }
    .clue-clickable:hover {
      background: #f1f5f9;
    }
    .clue-clickable.found {
      background: #dcfce7;
      color: #166534;
      font-weight: 600;
    }

    /* Fill blanks */
    .bank-tags-box {
      background: #fffbeb;
      border: 1px solid #fde68a;
      border-radius: 6px;
      padding: 10px 14px;
      margin-bottom: 12px;
    }
    .bank-chip-btn {
      background: #ffffff;
      border: 1px solid #f59e0b;
      padding: 3px 8px;
      border-radius: 4px;
      font-weight: bold;
      color: #78350f;
      display: inline-block;
      margin: 3px;
      font-size: 11.5px;
    }
    .blank-row-interactive {
      margin-bottom: 10px;
      font-size: 12.5px;
      line-height: 1.8;
    }
    .blank-dropdown {
      padding: 3px 8px;
      border-radius: 4px;
      border: 1.5px solid #2563eb;
      font-weight: bold;
      color: #1e40af;
      background: #eff6ff;
      font-size: 12px;
      cursor: pointer;
    }

    /* Scorecard Banner */
    .eval-modal-backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(15,23,42,0.7);
      backdrop-filter: blur(2px);
      z-index: 9999;
      align-items: center;
      justify-content: center;
      padding: 16px;
    }
    .eval-modal-box {
      background: #ffffff;
      border-radius: 16px;
      max-width: 580px;
      width: 100%;
      border: 2px solid #16a34a;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      overflow: hidden;
      animation: popIn 0.25s ease-out;
    }
    @keyframes popIn {
      from { transform: scale(0.92); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    .eval-modal-head {
      background: linear-gradient(135deg, #15803d, #059669);
      color: #ffffff;
      padding: 16px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .eval-modal-body {
      padding: 20px;
      font-size: 13px;
    }

    /* PRINT SPECIFIC STYLES FOR CLEAN A4 FORMAT */
    @media print {
      body {
        background: #ffffff !important;
        padding: 0 !important;
      }
      .app-header, .theme-nav, .progress-bar-card, .btn-action, .btn-updown, .eval-modal-backdrop {
        display: none !important;
      }
      .ficha-paper {
        border: none !important;
        box-shadow: none !important;
        margin: 0 !important;
        padding: 0 !important;
        max-width: none !important;
      }
      .page-break {
        page-break-after: always !important;
        break-after: page !important;
      }
      @page {
        size: A4 portrait;
        margin: 10mm;
      }
    }
  </style>
</head>
<body>

  <!-- Floating Fixed Top Application Header -->
  <header class="app-header">
    <div class="header-content">
      <div class="brand-wrap">
        <span class="flag-badge">PERÚ</span>
        <div>
          <h1 class="brand-title">Cuaderno de Comprensión Lectora • Secundaria Rural</h1>
          <p class="brand-sub">2.° Grado de Secundaria • Área: Comunicación (CNEB)</p>
        </div>
      </div>
      <div class="top-actions">
        <button class="btn-action btn-emerald" onclick="evaluateWorksheet()">
          🏆 Calificar Mi Ficha
        </button>
        <button class="btn-action btn-indigo" id="btnToggleSol" onclick="toggleSolutions()">
          👁️ Solucionario Docente
        </button>
        <button class="btn-action btn-secondary" onclick="window.print()">
          🖨️ Imprimir / Guardar en PDF
        </button>
        <button class="btn-action btn-secondary" onclick="resetWorksheet()">
          🔄 Reiniciar
        </button>
      </div>
    </div>

    <!-- Theme Tabs -->
    <nav class="theme-nav">
      <div class="theme-nav-inner" id="themeNavContainer"></div>
    </nav>
  </header>

  <!-- Main Container -->
  <main class="main-wrap">
    <!-- Progress Indicator Card -->
    <div class="progress-bar-card">
      <div class="progress-label" id="progressText">Progreso: 0% completado</div>
      <div class="progress-track">
        <div class="progress-fill" id="progressBar"></div>
      </div>
      <div class="progress-label" id="answersCountText">0 / 0 actividades respondidas</div>
    </div>

    <!-- Current Worksheet Paper Target -->
    <div id="worksheetContainer"></div>
  </main>

  <!-- Evaluation Modal Backdrop -->
  <div class="eval-modal-backdrop" id="evalModal" onclick="closeEvalModal(event)">
    <div class="eval-modal-box" onclick="event.stopPropagation()">
      <div class="eval-modal-head">
        <div>
          <h3 style="font-size: 16px; font-weight: 900;">BOLETA DE EVALUACIÓN PEDAGÓGICA (CNEB)</h3>
          <p style="font-size: 11px; opacity: 0.9;">Currículo Nacional de la Educación Básica • MINEDU</p>
        </div>
        <button onclick="closeEvalModal()" style="background:none; border:none; color:white; font-size:20px; cursor:pointer;">&times;</button>
      </div>
      <div class="eval-modal-body" id="evalModalBody">
        <!-- Injected via JavaScript -->
      </div>
    </div>
  </div>

  <script>
    // Embedded Data
    const WORKSHEETS = ${serializedWorksheets};
    const INITIAL_ANSWERS = ${serializedInitialAnswers};
    const ILLUSTRATIONS = ${serializedIllustrations};
    const LETTERS = ['A', 'B', 'C', 'D'];

    // State
    let activeThemeIndex = 0;
    let solutionsVisible = ${options?.includeTeacherSolutions ? 'true' : 'false'};
    let studentState = {};

    // LocalStorage helper key
    const STORAGE_KEY = 'cuaderno_rural_offline_state';

    // Load initial state or localStorage
    function loadSavedState() {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          studentState = JSON.parse(saved);
        } else if (INITIAL_ANSWERS) {
          studentState = { [WORKSHEETS[0].id]: INITIAL_ANSWERS };
        }
      } catch (e) {
        studentState = {};
      }
    }

    function saveState() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(studentState));
      } catch (e) {}
      updateProgress();
    }

    function getCurrentAnswers(wId) {
      if (!studentState[wId]) {
        const w = WORKSHEETS.find(x => x.id === wId) || WORKSHEETS[0];
        studentState[wId] = {
          studentName: '',
          schoolName: '',
          community: '',
          date: new Date().toISOString().split('T')[0],
          section: 'A',
          teacherName: '',
          literal: {},
          inferential: {},
          textIdent: {},
          critical: {},
          sentenceOrder: w.sentenceOrdering.map(s => s.id),
          columnMatches: {},
          foundWords: [],
          fillBlanks: {}
        };
      }
      return studentState[wId];
    }

    // Render Navigation Tabs
    function renderNav() {
      const nav = document.getElementById('themeNavContainer');
      nav.innerHTML = '';
      WORKSHEETS.forEach((w, idx) => {
        const btn = document.createElement('button');
        btn.className = 'nav-tab' + (idx === activeThemeIndex ? ' active' : '');
        btn.innerHTML = '<span class="tab-num">' + w.themeNumber + '</span> <span>' + escapeXml(w.shortTag) + '</span>';
        btn.onclick = () => {
          activeThemeIndex = idx;
          renderNav();
          renderWorksheet();
        };
        nav.appendChild(btn);
      });
    }

    // Render Active Worksheet
    function renderWorksheet() {
      const w = WORKSHEETS[activeThemeIndex];
      const answers = getCurrentAnswers(w.id);
      const container = document.getElementById('worksheetContainer');

      const illustrationSvg = ILLUSTRATIONS[w.id] || '';

      container.innerHTML = \`
        <article class="ficha-paper" id="paper-\${w.id}">
          <!-- 1. ENCABEZADO -->
          <header class="cuaderno-header">
            <div class="header-row-top">
              <div>
                <p class="minedu-label">MINISTERIO DE EDUCACIÓN • DIRECCIÓN DE EDUCACIÓN RURAL</p>
                <h2 class="ficha-head-title">CUADERNO DE TRABAJO PEDAGÓGICO DE COMUNICACIÓN</h2>
                <p class="tag-accent">Ficha N.° \${w.themeNumber}: \${escapeXml(w.shortTag)}</p>
              </div>
              <div style="text-align: right;">
                <span style="background:#fef3c7; color:#92400e; padding:3px 8px; border-radius:4px; font-weight:bold; font-size:11px;">2.° Grado de Secundaria</span>
                <p style="font-size:11px; margin-top:2px;">Área: <strong>Comunicación</strong></p>
              </div>
            </div>

            <div class="theme-hero-box">
              <h2>\${escapeXml(w.title)}</h2>
              <p>\${escapeXml(w.subtitle)}</p>
            </div>

            <table class="student-data-table">
              <tr>
                <td class="lbl">Institución Educativa:</td>
                <td><input type="text" class="field-input" placeholder="Nombre de tu colegio..." value="\${escapeXml(answers.schoolName)}" onchange="updateHeaderField('schoolName', this.value)" /></td>
                <td class="lbl">Comunidad / Caserío:</td>
                <td><input type="text" class="field-input" placeholder="Nombre de tu comunidad..." value="\${escapeXml(answers.community)}" onchange="updateHeaderField('community', this.value)" /></td>
              </tr>
              <tr>
                <td class="lbl">Estudiante:</td>
                <td><input type="text" class="field-input" placeholder="Tus nombres y apellidos..." value="\${escapeXml(answers.studentName)}" onchange="updateHeaderField('studentName', this.value)" style="font-weight:900;" /></td>
                <td class="lbl">Fecha y Sección:</td>
                <td>
                  <input type="text" class="field-input" style="width:65%;" value="\${escapeXml(answers.date)}" onchange="updateHeaderField('date', this.value)" />
                  • Secc: <input type="text" class="field-input" style="width:20%; font-weight:bold;" value="\${escapeXml(answers.section)}" onchange="updateHeaderField('section', this.value)" />
                </td>
              </tr>
              <tr>
                <td class="lbl">Docente:</td>
                <td><input type="text" class="field-input" placeholder="Prof. de Comunicación..." value="\${escapeXml(answers.teacherName)}" onchange="updateHeaderField('teacherName', this.value)" /></td>
                <td class="lbl">Calificación:</td>
                <td class="score-indicator-cell" id="headScoreDisplay">[ Pendiente de evaluar ]</td>
              </tr>
            </table>

            <div class="cneb-info-box">
              <strong>Competencia MINEDU:</strong> \${escapeXml(w.cnebCompetency)}.<br/>
              <small><strong>Capacidades:</strong> \${escapeXml(w.cnebCapacities.join(' | '))}.</small>
            </div>
          </header>

          <!-- 2. TEXTO DE LECTURA -->
          <section class="activity-section">
            <div class="section-header-bar">
              <span class="sec-num-badge">2</span>
              <h3 class="sec-title-txt">TEXTO DE LECTURA</h3>
            </div>

            <div class="reading-meta-bar">
              <div><strong>Antes de leer:</strong> \${escapeXml(w.reading.synopsis)}</div>
              <div style="display:flex; align-items:center; gap:8px;">
                <span style="font-size:11px; font-weight:bold;">⏱ \${escapeXml(w.reading.readingTime)}</span>
                <button class="audio-btn" id="btnAudioText" onclick="toggleReadStory()">
                  🔊 Escuchar Lectura
                </button>
              </div>
            </div>

            \${illustrationSvg}

            <div class="story-body">
              <h3 class="story-h3">\${escapeXml(w.reading.title)}</h3>
              \${w.reading.paragraphs.map(p => '<p class="story-p">' + escapeXml(p) + '</p>').join('')}
            </div>

            <div class="quote-callout">
              <p>\${escapeXml(w.reading.quoteText)}</p>
              <p style="text-align:right; font-weight:bold; margin-top:4px;">— \${escapeXml(w.reading.quoteAuthor)}</p>
            </div>

            <div style="margin-top:14px; background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; padding:10px;">
              <h4 style="font-size:11px; font-weight:900; color:#334155; margin-bottom:6px;">GLOSARIO DE PALABRAS CLAVE</h4>
              <div class="glossary-grid">
                \${w.reading.vocabulary.map(v => \`
                  <div class="glossary-card">
                    <strong>\${escapeXml(v.word.toUpperCase())}</strong>
                    <p>\${escapeXml(v.definition)}</p>
                  </div>
                \`).join('')}
              </div>
            </div>
          </section>

          <!-- 3. COMPRENSIÓN LECTORA -->
          <section class="activity-section">
            <div class="section-header-bar">
              <span class="sec-num-badge">3</span>
              <h3 class="sec-title-txt">ACTIVIDADES DE COMPRENSIÓN LECTORA</h3>
            </div>

            <!-- A. PREGUNTAS LITERALES -->
            <div class="level-ribbon ribbon-a">NIVEL A: PREGUNTAS LITERALES (Información explícita)</div>
            \${w.literalQuestions.map((q, qIdx) => renderMcq(q, 'literal', answers.literal[q.id], qIdx + 1)).join('')}

            <!-- B. PREGUNTAS INFERENCIALES -->
            <div class="level-ribbon ribbon-b" style="margin-top:20px;">NIVEL B: PREGUNTAS INFERENCIALES (Deducción implícita)</div>
            \${w.inferentialQuestions.map((q, qIdx) => renderMcq(q, 'inferential', answers.inferential[q.id], qIdx + 1)).join('')}

            <!-- C. PREGUNTAS CRÍTICAS -->
            <div class="level-ribbon ribbon-c" style="margin-top:20px;">NIVEL C: PREGUNTAS CRÍTICAS (Opinión y Comunidad)</div>
            \${w.criticalQuestions.map((q, qIdx) => renderCritical(q, answers.critical[q.id] || '', qIdx + 1)).join('')}
          </section>

          <!-- 4. IDENTIFICACIÓN DEL TEXTO -->
          <section class="activity-section">
            <div class="section-header-bar">
              <span class="sec-num-badge">4</span>
              <h3 class="sec-title-txt">IDENTIFICACIÓN Y ESTRUCTURA DEL TEXTO</h3>
            </div>
            \${w.textIdentification.map((q, qIdx) => renderMcq(q, 'textIdent', answers.textIdent[q.id], qIdx + 1)).join('')}
          </section>

          <!-- 5. ORDENAMIENTO DE ORACIONES -->
          <section class="activity-section">
            <div class="section-header-bar">
              <span class="sec-num-badge">5</span>
              <h3 class="sec-title-txt">ORDENAMIENTO SECUENCIAL DE HECHOS</h3>
            </div>
            <p class="sec-help-txt">Usa los botones [ ▲ Subir ] y [ ▼ Bajar ] para ordenar los sucesos según ocurrieron en la lectura:</p>
            <div id="sentenceOrderContainer">
              \${renderSentenceOrdering(w, answers)}
            </div>
          </section>

          <!-- 6. RELACIONAR COLUMNAS -->
          <section class="activity-section">
            <div class="section-header-bar">
              <span class="sec-num-badge">6</span>
              <h3 class="sec-title-txt">RELACIÓN DE COLUMNAS (CONCEPTOS Y SIGNIFICADOS)</h3>
            </div>
            <p class="sec-help-txt">Selecciona en el menú desplegable de la Columna B la letra que corresponde a la Columna A:</p>
            \${renderColumnMatching(w, answers)}
          </section>

          <!-- 7. SOPA DE LETRAS -->
          <section class="activity-section">
            <div class="section-header-bar">
              <span class="sec-num-badge">7</span>
              <h3 class="sec-title-txt">SOPA DE LETRAS EDUCATIVA (10 PALABRAS CLAVE)</h3>
            </div>
            <p class="sec-help-txt">Haz clic sobre las letras en la cuadrícula o presiona sobre las pistas para marcar las palabras que vayas encontrando:</p>
            \${renderWordSearch(w, answers)}
          </section>

          <!-- 8. COMPLETAR ESPACIOS Y CONECTORES -->
          <section class="activity-section">
            <div class="section-header-bar">
              <span class="sec-num-badge">8</span>
              <h3 class="sec-title-txt">COMPLETAR ESPACIOS Y CONECTORES LÓGICOS</h3>
            </div>
            <div class="bank-tags-box">
              <strong style="font-size:11px; color:#78350f;">BANCO DE PALABRAS:</strong>
              <div>
                \${w.fillInTheBlanks.wordBank.map(wb => '<span class="bank-chip-btn">« ' + escapeXml(wb) + ' »</span>').join('')}
              </div>
            </div>
            \${renderFillBlanks(w, answers)}
          </section>

          <!-- Big Bottom Button to Grade -->
          <div style="text-align:center; padding:20px; background:#f0fdf4; border:2px solid #86efac; border-radius:12px; margin-top:20px;">
            <h3 style="font-size:16px; font-weight:900; color:#14532d;">¿Terminaste tu ficha de trabajo?</h3>
            <p style="font-size:12px; color:#166534; margin:4px 0 14px 0;">Presiona el botón para calcular tu nota vigesimal (0-20), ver tu nivel de logro CNEB y recibir tus felicitaciones.</p>
            <button class="btn-action btn-emerald" onclick="evaluateWorksheet()" style="font-size:14px; padding:10px 24px; border-radius:10px;">
              🏆 CALIFICAR Y EVALUAR MI FICHA
            </button>
          </div>
        </article>
      \`;

      // Apply initial solutions state
      toggleSolutions(false);
      updateProgress();
    }

    // Multiple Choice Item Renderer
    function renderMcq(q, type, selectedIdx, num) {
      return \`
        <div class="q-card" id="qcard-\${q.id}">
          <div class="q-title">\${num}. \${escapeXml(q.question)}</div>
          <div class="options-container">
            \${q.options.map((opt, optIdx) => {
              const isSelected = selectedIdx === optIdx;
              return \`
                <div class="opt-interactive \${isSelected ? 'selected' : ''}" onclick="selectChoice('\${type}', '\${q.id}', \${optIdx})">
                  <span class="opt-badge">(\${LETTERS[optIdx]})</span>
                  <span>\${escapeXml(opt)}</span>
                </div>
              \`;
            }).join('')}
          </div>
          <div class="solution-box" data-correct="\${q.correctIndex}">
            <strong>Clave Docente:</strong> (\${LETTERS[q.correctIndex]}) — \${escapeXml(q.explanation)}
          </div>
        </div>
      \`;
    }

    // Critical Question Renderer
    function renderCritical(q, writtenText, num) {
      return \`
        <div class="q-card">
          <div class="q-title">\${num}. \${escapeXml(q.question)}</div>
          <p style="font-size:11px; color:#92400e; margin-bottom:4px;">💡 <em>Pista:</em> \${escapeXml(q.promptHint)}</p>
          <textarea class="crit-input" placeholder="Escribe aquí tu opinión razonada..." oninput="updateCritical('\${q.id}', this.value)">\${escapeXml(writtenText)}</textarea>
          <div class="char-count" id="count-\${q.id}">\${writtenText.length} caracteres redactados</div>
          <p style="font-size:10px; color:#64748b; margin-top:4px;">Criterio CNEB: \${escapeXml(q.rubricCriteria)}</p>
          <div class="solution-box">
            <strong>Orientación Sugerida para el Docente:</strong> \${escapeXml(q.suggestedAnswer)}
          </div>
        </div>
      \`;
    }

    // Sentence Ordering Renderer
    function renderSentenceOrdering(w, answers) {
      const orderIds = answers.sentenceOrder || w.sentenceOrdering.map(s => s.id);
      return orderIds.map((id, idx) => {
        const item = w.sentenceOrdering.find(s => s.id === id);
        if (!item) return '';
        return \`
          <div class="order-item-card" id="orderitem-\${id}">
            <span class="order-rank">#\${idx + 1}</span>
            <span style="font-size:12px; font-weight:600;">\${escapeXml(item.text)}</span>
            <div class="order-btns">
              <button class="btn-updown" onclick="moveSentence('\${id}', -1)" title="Subir">▲</button>
              <button class="btn-updown" onclick="moveSentence('\${id}', 1)" title="Bajar">▼</button>
            </div>
            <div class="solution-box" style="margin:0 0 0 10px; padding:3px 6px;">
              Posición correcta: <strong>#\${item.correctOrder}</strong>
            </div>
          </div>
        \`;
      }).join('');
    }

    // Column Matching Renderer
    function renderColumnMatching(w, answers) {
      return \`
        <table class="match-table">
          <thead>
            <tr style="background:#f1f5f9; font-size:11px; font-weight:bold;">
              <th style="padding:6px; text-align:left; width:35%;">COLUMNA A: CONCEPTOS</th>
              <th style="padding:6px; text-align:center; width:20%;">RELACIÓN</th>
              <th style="padding:6px; text-align:left;">COLUMNA B: SIGNIFICADOS</th>
            </tr>
          </thead>
          <tbody>
            \${w.columnMatching.map((item, idx) => {
              const matchedConceptId = Object.keys(answers.columnMatches || {}).find(k => answers.columnMatches[k] === item.id) || '';
              return \`
                <tr>
                  <td>
                    <span style="font-weight:900; color:#dc2626;">(\${LETTERS[idx]})</span>
                    <strong>\${escapeXml(item.concept)}</strong>
                  </td>
                  <td style="text-align:center;">
                    <select class="match-select" onchange="matchColumns('\${item.id}', this.value)">
                      <option value="">( - )</option>
                      \${w.columnMatching.map((c, cIdx) => \`
                        <option value="\${c.id}" \${matchedConceptId === c.id ? 'selected' : ''}>
                          (\${LETTERS[cIdx]}) \${escapeXml(c.concept)}
                        </option>
                      \`).join('')}
                    </select>
                  </td>
                  <td>
                    <span>\${escapeXml(item.match)}</span>
                    <span class="solution-box" style="display:inline-block; margin-left:6px; padding:2px 6px;">
                      Clave: (\${LETTERS[idx]})
                    </span>
                  </td>
                </tr>
              \`;
            }).join('')}
          </tbody>
        </table>
      \`;
    }

    // Word Search Renderer
    function renderWordSearch(w, answers) {
      const foundWords = answers.foundWords || [];
      return \`
        <div class="ws-interactive-wrap">
          <div style="flex:1; display:flex; justify-content:center;">
            <table class="ws-table-int">
              \${w.wordSearch.grid.map((row, rIdx) => \`
                <tr>
                  \${row.map((cell, cIdx) => \`
                    <td class="ws-cell-int" id="wscell-\${rIdx}-\${cIdx}" onclick="this.classList.toggle('highlighted')">
                      \${cell}
                    </td>
                  \`).join('')}
                </tr>
              \`).join('')}
            </table>
          </div>
          <div class="ws-clues-box">
            <h4 style="font-size:12px; font-weight:900; margin-bottom:8px; border-bottom:1px solid #cbd5e1; padding-bottom:4px;">
              PISTAS (\${foundWords.length} / \${w.wordSearch.words.length} ENCONTRADAS)
            </h4>
            \${w.wordSearch.words.map(item => {
              const isFound = foundWords.includes(item.word);
              return \`
                <div class="clue-clickable \${isFound ? 'found' : ''}" onclick="toggleWordFound('\${item.word}')">
                  <span>\${isFound ? '☑' : '☐'}</span>
                  <span><strong>\${escapeXml(item.word)}:</strong> \${escapeXml(item.clue)}</span>
                </div>
              \`;
            }).join('')}
          </div>
        </div>
      \`;
    }

    // Fill Blanks Renderer
    function renderFillBlanks(w, answers) {
      return w.fillInTheBlanks.items.map((item, idx) => {
        const studentAns = answers.fillBlanks[item.id] || '';
        return \`
          <div class="blank-row-interactive">
            <span style="font-weight:900; color:#334155;">\${idx + 1}.</span>
            \${escapeXml(item.sentenceBefore)}
            <select class="blank-dropdown" onchange="selectBlankWord('\${item.id}', this.value)">
              <option value="">[ Selecciona una palabra... ]</option>
              \${w.fillInTheBlanks.wordBank.map(wb => \`
                <option value="\${escapeXml(wb)}" \${studentAns.toLowerCase() === wb.toLowerCase() ? 'selected' : ''}>
                  « \${escapeXml(wb)} »
                </option>
              \`).join('')}
            </select>
            \${escapeXml(item.sentenceAfter)}
            <span class="solution-box" style="display:inline-block; margin-left:8px; padding:2px 6px;">
              Respuesta: <strong>« \${escapeXml(item.correctWord)} »</strong>
            </span>
          </div>
        \`;
      }).join('');
    }

    // State Mutation Handlers
    function updateHeaderField(field, value) {
      const w = WORKSHEETS[activeThemeIndex];
      const answers = getCurrentAnswers(w.id);
      answers[field] = value;
      saveState();
    }

    function selectChoice(type, qId, optIdx) {
      const w = WORKSHEETS[activeThemeIndex];
      const answers = getCurrentAnswers(w.id);
      answers[type][qId] = optIdx;
      saveState();

      // UI update without full redraw
      const card = document.getElementById('qcard-' + qId);
      if (card) {
        card.querySelectorAll('.opt-interactive').forEach((el, idx) => {
          if (idx === optIdx) {
            el.classList.add('selected');
          } else {
            el.classList.remove('selected');
          }
        });
      }
    }

    function updateCritical(qId, text) {
      const w = WORKSHEETS[activeThemeIndex];
      const answers = getCurrentAnswers(w.id);
      answers.critical[qId] = text;
      saveState();
      const countEl = document.getElementById('count-' + qId);
      if (countEl) countEl.textContent = text.length + ' caracteres redactados';
    }

    function moveSentence(sId, direction) {
      const w = WORKSHEETS[activeThemeIndex];
      const answers = getCurrentAnswers(w.id);
      const arr = answers.sentenceOrder;
      const idx = arr.indexOf(sId);
      if (idx < 0) return;
      const targetIdx = idx + direction;
      if (targetIdx < 0 || targetIdx >= arr.length) return;
      const temp = arr[idx];
      arr[idx] = arr[targetIdx];
      arr[targetIdx] = temp;
      saveState();
      document.getElementById('sentenceOrderContainer').innerHTML = renderSentenceOrdering(w, answers);
      toggleSolutions(false);
    }

    function matchColumns(meaningId, conceptId) {
      const w = WORKSHEETS[activeThemeIndex];
      const answers = getCurrentAnswers(w.id);
      if (!conceptId) {
        // Find if this meaning had a concept and delete it
        for (const k in answers.columnMatches) {
          if (answers.columnMatches[k] === meaningId) delete answers.columnMatches[k];
        }
      } else {
        answers.columnMatches[conceptId] = meaningId;
      }
      saveState();
    }

    function toggleWordFound(word) {
      const w = WORKSHEETS[activeThemeIndex];
      const answers = getCurrentAnswers(w.id);
      const idx = answers.foundWords.indexOf(word);
      if (idx >= 0) {
        answers.foundWords.splice(idx, 1);
      } else {
        answers.foundWords.push(word);
      }
      saveState();
      renderWorksheet();
    }

    function selectBlankWord(itemId, word) {
      const w = WORKSHEETS[activeThemeIndex];
      const answers = getCurrentAnswers(w.id);
      answers.fillBlanks[itemId] = word;
      saveState();
    }

    function resetWorksheet() {
      if (confirm('¿Deseas reiniciar tus respuestas de esta ficha?')) {
        const w = WORKSHEETS[activeThemeIndex];
        studentState[w.id] = null;
        getCurrentAnswers(w.id);
        saveState();
        renderWorksheet();
      }
    }

    // Audio text to speech
    let isReadingAudio = false;
    function toggleReadStory() {
      if (!('speechSynthesis' in window)) {
        alert('Tu navegador no cuenta con síntesis de voz.');
        return;
      }
      if (isReadingAudio) {
        window.speechSynthesis.cancel();
        isReadingAudio = false;
        const btn = document.getElementById('btnAudioText');
        if (btn) {
          btn.textContent = '🔊 Escuchar Lectura';
          btn.classList.remove('active');
        }
        return;
      }
      const w = WORKSHEETS[activeThemeIndex];
      const textToRead = w.reading.title + '. ' + w.reading.paragraphs.join(' ');
      const utt = new SpeechSynthesisUtterance(textToRead);
      utt.lang = 'es-PE';
      utt.rate = 0.95;
      utt.onend = () => {
        isReadingAudio = false;
        const btn = document.getElementById('btnAudioText');
        if (btn) {
          btn.textContent = '🔊 Escuchar Lectura';
          btn.classList.remove('active');
        }
      };
      window.speechSynthesis.speak(utt);
      isReadingAudio = true;
      const btn = document.getElementById('btnAudioText');
      if (btn) {
        btn.textContent = '⏹ Detener Audio';
        btn.classList.add('active');
      }
    }

    // Toggle solutions
    function toggleSolutions(toggle = true) {
      if (toggle) {
        solutionsVisible = !solutionsVisible;
      }
      const paper = document.getElementById('paper-' + WORKSHEETS[activeThemeIndex].id);
      if (paper) {
        if (solutionsVisible) {
          paper.classList.add('show-solutions');
        } else {
          paper.classList.remove('show-solutions');
        }
      }
      const btn = document.getElementById('btnToggleSol');
      if (btn) {
        btn.textContent = solutionsVisible ? '🔒 Ocultar Solucionario' : '👁️ Solucionario Docente';
      }
    }

    // Progress Calculation
    function updateProgress() {
      const w = WORKSHEETS[activeThemeIndex];
      const answers = getCurrentAnswers(w.id);

      const totalItems =
        w.literalQuestions.length +
        w.inferentialQuestions.length +
        w.textIdentification.length +
        w.fillInTheBlanks.items.length +
        w.wordSearch.words.length;

      const answeredItems =
        Object.keys(answers.literal).length +
        Object.keys(answers.inferential).length +
        Object.keys(answers.textIdent).length +
        Object.keys(answers.fillBlanks).length +
        answers.foundWords.length;

      const pct = Math.min(100, Math.round((answeredItems / totalItems) * 100));
      const bar = document.getElementById('progressBar');
      const txt = document.getElementById('progressText');
      const count = document.getElementById('answersCountText');
      if (bar) bar.style.width = pct + '%';
      if (txt) txt.textContent = 'Progreso: ' + pct + '% completado';
      if (count) count.textContent = answeredItems + ' / ' + totalItems + ' actividades respondidas';
    }

    // Evaluation & Score Calculation (0-20 scale & CNEB)
    function evaluateWorksheet() {
      const w = WORKSHEETS[activeThemeIndex];
      const answers = getCurrentAnswers(w.id);

      let earned = 0;
      let totalMax = 0;

      // 1. Literal
      w.literalQuestions.forEach(q => {
        totalMax += 1;
        if (answers.literal[q.id] === q.correctIndex) earned += 1;
      });

      // 2. Inferential
      w.inferentialQuestions.forEach(q => {
        totalMax += 1;
        if (answers.inferential[q.id] === q.correctIndex) earned += 1;
      });

      // 3. Text Ident
      w.textIdentification.forEach(q => {
        totalMax += 1;
        if (answers.textIdent[q.id] === q.correctIndex) earned += 1;
      });

      // 4. Sentence Order
      totalMax += 5;
      let orderCorrect = 0;
      (answers.sentenceOrder || []).forEach((id, idx) => {
        const item = w.sentenceOrdering.find(s => s.id === id);
        if (item && item.correctOrder === idx + 1) orderCorrect++;
      });
      earned += orderCorrect;

      // 5. Column matching
      totalMax += w.columnMatching.length;
      w.columnMatching.forEach(c => {
        if (answers.columnMatches[c.id] === c.id) earned++;
      });

      // 6. Wordsearch (5 pts)
      totalMax += 5;
      earned += ((answers.foundWords.length / w.wordSearch.words.length) * 5);

      // 7. Fill blanks
      totalMax += w.fillInTheBlanks.items.length;
      w.fillInTheBlanks.items.forEach(item => {
        const ans = (answers.fillBlanks[item.id] || '').trim().toLowerCase();
        if (ans === item.correctWord.trim().toLowerCase()) earned++;
      });

      const score20 = Math.round((earned / totalMax) * 20 * 10) / 10;
      let scale = 'C';
      let scaleName = 'En Inicio';
      let badgeColor = '#dc2626';

      if (score20 >= 18) {
        scale = 'AD';
        scaleName = 'Logro Destacado';
        badgeColor = '#059669';
      } else if (score20 >= 14) {
        scale = 'A';
        scaleName = 'Logro Esperado';
        badgeColor = '#2563eb';
      } else if (score20 >= 11) {
        scale = 'B';
        scaleName = 'En Proceso';
        badgeColor = '#d97706';
      }

      // Update header score display
      const headScore = document.getElementById('headScoreDisplay');
      if (headScore) {
        headScore.innerHTML = '[ ' + score20 + ' / 20 ] Escala: ' + scale + ' (' + scaleName + ')';
        headScore.style.background = '#dcfce7';
        headScore.style.color = '#166534';
      }

      // Modal content
      const modalBody = document.getElementById('evalModalBody');
      modalBody.innerHTML = \`
        <div style="text-align:center; padding:10px 0;">
          <div style="font-size:36px; font-weight:900; color:\${badgeColor}; line-height:1;">
            \${score20} <span style="font-size:18px; color:#64748b;">/ 20</span>
          </div>
          <div style="display:inline-block; background:\${badgeColor}; color:white; padding:4px 14px; border-radius:20px; font-weight:900; font-size:13px; margin:8px 0;">
            ESCALA CNEB: [\${scale}] — \${scaleName}
          </div>
          <p style="font-size:12px; color:#475569;">
            Estudiante: <strong>\${escapeXml(answers.studentName || 'Estudiante')}</strong> • I.E.: \${escapeXml(answers.schoolName || 'I.E. Rural')}
          </p>
        </div>

        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:12px; margin:12px 0;">
          <h4 style="font-size:11.5px; font-weight:900; color:#334155; margin-bottom:6px;">DESGLOSE POR CAPACIDADES CNEB:</h4>
          <ul style="font-size:11.5px; line-height:1.6; padding-left:18px; color:#475569;">
            <li><strong>Obtiene información explícita (Literal):</strong> \${Object.keys(answers.literal).length} / \${w.literalQuestions.length} respondidas.</li>
            <li><strong>Infiere e interpreta (Inferencial y Texto):</strong> \${Object.keys(answers.inferential).length + Object.keys(answers.textIdent).length} respondidas.</li>
            <li><strong>Organiza y jerarquiza ideas:</strong> Orden cronológico y conectores completados.</li>
            <li><strong>Reflexiona críticamente:</strong> \${Object.keys(answers.critical).length} reflexiones redactadas.</li>
          </ul>
        </div>

        <div style="display:flex; justify-content:center; gap:10px; margin-top:16px;">
          <button class="btn-action btn-emerald" onclick="closeEvalModal()">
            Aceptar y Continuar
          </button>
          <button class="btn-action btn-indigo" onclick="closeEvalModal(); toggleSolutions(true);">
            Revisar Claves y Explicaciones
          </button>
        </div>
      \`;

      document.getElementById('evalModal').style.display = 'flex';
      triggerConfetti();
    }

    function closeEvalModal() {
      document.getElementById('evalModal').style.display = 'none';
    }

    // Lightweight Standalone Canvas Confetti
    function triggerConfetti() {
      const canvas = document.createElement('canvas');
      canvas.style.position = 'fixed';
      canvas.style.inset = '0';
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '999999';
      document.body.appendChild(canvas);
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles = [];
      const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
      for (let i = 0; i < 90; i++) {
        particles.push({
          x: canvas.width * 0.5,
          y: canvas.height * 0.5,
          vx: (Math.random() - 0.5) * 16,
          vy: (Math.random() - 1.2) * 16,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          tilt: Math.random() * 10,
          tiltSpeed: Math.random() * 0.1 + 0.05,
          gravity: 0.35,
          alpha: 1
        });
      }

      let frame = 0;
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;
        particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += p.gravity;
          p.tilt += p.tiltSpeed;
          p.alpha -= 0.009;
          if (p.alpha > 0) {
            alive = true;
            ctx.fillStyle = p.color;
            ctx.globalAlpha = Math.max(0, p.alpha);
            ctx.fillRect(p.x, p.y, p.size, p.size * Math.sin(p.tilt));
          }
        });
        ctx.globalAlpha = 1;
        if (alive && frame < 160) {
          frame++;
          requestAnimationFrame(animate);
        } else {
          canvas.remove();
        }
      }
      requestAnimationFrame(animate);
    }

    function escapeXml(unsafe) {
      if (!unsafe) return '';
      return String(unsafe)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    // Initialize application on load
    window.addEventListener('DOMContentLoaded', () => {
      loadSavedState();
      renderNav();
      renderWorksheet();
    });
  </script>
</body>
</html>`;
}

/**
 * Downloads a complete, standalone, interactive offline HTML file.
 */
export function exportWorksheetsToInteractiveHtml(
  worksheets: WorksheetData[],
  answers?: StudentAnswers,
  optionsOrTitle?: ExportHtmlOptions | string
) {
  const options: ExportHtmlOptions =
    typeof optionsOrTitle === 'string'
      ? { title: optionsOrTitle, interactive: true }
      : { ...optionsOrTitle, interactive: true };

  const isSingle = worksheets.length === 1;
  const defaultBase = isSingle
    ? `Ficha_Interactiva_${worksheets[0].themeNumber}_${worksheets[0].shortTag.replace(/\s+/g, '_')}`
    : 'Cuaderno_Interactivo_Comprension_Lectora_2do_Secundaria_Rural';

  const fileName = options.fileName || `${defaultBase}.html`;
  const fullHtml = generateInteractiveHtmlString(worksheets, answers, options);

  const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Main export function: defaults to interactive HTML or printable sheet depending on options.
 */
export function exportWorksheetsToStandaloneHtml(
  worksheets: WorksheetData[],
  answers?: StudentAnswers,
  optionsOrTitle?: ExportHtmlOptions | string
) {
  const options: ExportHtmlOptions =
    typeof optionsOrTitle === 'string'
      ? { title: optionsOrTitle }
      : optionsOrTitle || {};

  // If interactive is explicitly false, use printable generator, otherwise default to interactive!
  if (options.interactive === false) {
    const isSingle = worksheets.length === 1;
    const defaultBase = isSingle
      ? `Ficha_${worksheets[0].themeNumber}_${worksheets[0].shortTag.replace(/\s+/g, '_')}`
      : 'Cuaderno_Comprension_Lectora_2do_Secundaria_Rural_Peru';

    const fileName = options.fileName || `${defaultBase}.html`;
    const fullHtml = generateInteractiveHtmlString(worksheets, answers, options);

    const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } else {
    exportWorksheetsToInteractiveHtml(worksheets, answers, options);
  }
}

/**
 * Opens the interactive HTML file in a new browser tab for immediate preview.
 */
export function openWorksheetsInNewTab(
  worksheets: WorksheetData[],
  answers?: StudentAnswers,
  options?: ExportHtmlOptions
) {
  const fullHtml = generateInteractiveHtmlString(worksheets, answers, options);
  const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
}

/**
 * Copies the standalone interactive HTML string directly to the clipboard.
 */
export async function copyWorksheetsHtmlToClipboard(
  worksheets: WorksheetData[],
  answers?: StudentAnswers,
  options?: ExportHtmlOptions
): Promise<boolean> {
  try {
    const fullHtml = generateInteractiveHtmlString(worksheets, answers, options);
    await navigator.clipboard.writeText(fullHtml);
    return true;
  } catch (e) {
    console.error('Failed to copy HTML to clipboard', e);
    return false;
  }
}
