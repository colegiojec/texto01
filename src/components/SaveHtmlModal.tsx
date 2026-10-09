import React, { useState } from 'react';
import { WorksheetData, StudentAnswers } from '../types/worksheet';
import {
  exportWorksheetsToStandaloneHtml,
  openWorksheetsInNewTab,
  copyWorksheetsHtmlToClipboard,
  ExportHtmlOptions
} from '../utils/exportHtml';
import {
  Download,
  FileCode,
  CheckCircle2,
  ExternalLink,
  Copy,
  X,
  BookOpen,
  Sparkles,
  Printer,
  FileCheck,
  Info,
  Smartphone,
  Check,
  Zap
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currentWorksheet: WorksheetData;
  allWorksheets: WorksheetData[];
  studentAnswers: StudentAnswers;
}

export const SaveHtmlModal: React.FC<Props> = ({
  isOpen,
  onClose,
  currentWorksheet,
  allWorksheets,
  studentAnswers,
}) => {
  const [formatMode, setFormatMode] = useState<'interactive' | 'printable'>('interactive');
  const [scope, setScope] = useState<'current' | 'all'>('current');
  const [includeAnswers, setIncludeAnswers] = useState<boolean>(true);
  const [includeSolutions, setIncludeSolutions] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  // Selected worksheets
  const targetWorksheets = scope === 'current' ? [currentWorksheet] : allWorksheets;

  // Calculate default filename
  const isInteractive = formatMode === 'interactive';
  const typeTag = isInteractive ? 'Interactiva' : 'A4';
  const baseName =
    scope === 'current'
      ? `Ficha_${currentWorksheet.themeNumber}_${typeTag}_${currentWorksheet.shortTag.replace(/\s+/g, '_')}`
      : `Cuaderno_${typeTag}_Comprension_Lectora_2do_Secundaria_Rural`;

  const suffix = includeAnswers ? '_Con_Respuestas' : '_En_Blanco';
  const solSuffix = includeSolutions ? '_Con_Solucionario' : '';
  const finalFileName = `${baseName}${suffix}${solSuffix}.html`;

  const exportOptions: ExportHtmlOptions = {
    interactive: isInteractive,
    includeAnswers,
    includeTeacherSolutions: includeSolutions,
    fileName: finalFileName,
    title:
      scope === 'current'
        ? `Ficha ${isInteractive ? 'Interactiva' : 'Didáctica'} N.° ${currentWorksheet.themeNumber}: ${currentWorksheet.title}`
        : `Cuaderno Pedagógico ${isInteractive ? 'Interactivo' : 'A4'} de Comprensión Lectora • 2.° Secundaria Rural`,
  };

  const handleDownload = () => {
    exportWorksheetsToStandaloneHtml(targetWorksheets, studentAnswers, exportOptions);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  const handleOpenNewTab = () => {
    openWorksheetsInNewTab(targetWorksheets, studentAnswers, exportOptions);
  };

  const handleCopyClipboard = async () => {
    const success = await copyWorksheetsHtmlToClipboard(targetWorksheets, studentAnswers, exportOptions);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  // Count answered items
  const answeredCount =
    Object.keys(studentAnswers.literal).length +
    Object.keys(studentAnswers.inferential).length +
    Object.keys(studentAnswers.textIdent).length +
    Object.keys(studentAnswers.fillBlanks).length +
    studentAnswers.foundWords.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 sm:p-4 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-700 via-red-800 to-amber-700 px-5 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-xs text-white">
              <Zap className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="text-base font-black tracking-tight flex items-center gap-2">
                Guardar en HTML Interactivo
                <span className="rounded bg-amber-400 px-1.5 py-0.5 text-[10px] font-black text-slate-950">
                  OFFLINE 100%
                </span>
              </h3>
              <p className="text-xs text-red-100">
                Archivo autónomo para responder, autocalificar y usar sin conexión a internet.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-lg p-1.5 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body scrollable */}
        <div className="p-5 space-y-4 overflow-y-auto">
          {/* Notification banner if recently downloaded */}
          {downloadSuccess && (
            <div className="rounded-xl bg-emerald-50 border border-emerald-300 p-3 flex items-center gap-3 text-emerald-900 text-xs font-semibold animate-in slide-in-from-top-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <p className="font-bold">¡Archivo HTML interactivo descargado con éxito!</p>
                <p className="text-[11px] text-emerald-700">
                  Se ha guardado <span className="font-mono font-bold text-emerald-900">{finalFileName}</span> en tu carpeta de descargas. Puedes abrirlo con doble clic.
                </p>
              </div>
            </div>
          )}

          {/* 1. Format Mode Selection */}
          <div>
            <label className="block text-xs font-black uppercase text-slate-700 mb-2">
              1. Tipo de archivo HTML
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setFormatMode('interactive')}
                className={`cursor-pointer p-3.5 rounded-xl border-2 text-left transition-all flex flex-col justify-between ${
                  formatMode === 'interactive'
                    ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-500/20 shadow-xs'
                    : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-900">
                    <Zap className="w-4 h-4 text-emerald-600" />
                    HTML Interactivo
                  </span>
                  <span className="rounded bg-emerald-600 px-1.5 py-0.5 text-[9px] font-black text-white uppercase">
                    Recomendado
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-normal">
                  Permite marcar respuestas en pantalla, calificar con nota vigesimal (0-20), audio de lectura, sopa de letras y autoguardado en el navegador.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setFormatMode('printable')}
                className={`cursor-pointer p-3.5 rounded-xl border-2 text-left transition-all flex flex-col justify-between ${
                  formatMode === 'printable'
                    ? 'border-red-600 bg-red-50/70 ring-2 ring-red-500/20 shadow-xs'
                    : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="inline-flex items-center gap-1.5 text-xs font-black text-slate-900">
                    <Printer className="w-4 h-4 text-red-600" />
                    HTML Imprimible A4
                  </span>
                  <span className="rounded bg-slate-200 px-1.5 py-0.5 text-[9px] font-bold text-slate-700 uppercase">
                    Papel
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-normal">
                  Formato A4 plano y estructurado, listo para enviar directamente a la impresora física o para fotocopiado escolar.
                </p>
              </button>
            </div>
          </div>

          {/* 2. Scope Selection */}
          <div>
            <label className="block text-xs font-black uppercase text-slate-700 mb-2">
              2. Alcance del Cuaderno
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setScope('current')}
                className={`cursor-pointer p-3 rounded-xl border-2 text-left transition-all flex items-start gap-2.5 ${
                  scope === 'current'
                    ? 'border-red-600 bg-red-50/60 ring-2 ring-red-500/20'
                    : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div
                  className={`mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg text-xs font-black ${
                    scope === 'current' ? 'bg-red-600 text-white' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {currentWorksheet.themeNumber}
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900 leading-tight">
                    Ficha Actual (Tema {currentWorksheet.themeNumber})
                  </p>
                  <p className="text-[11px] text-slate-600 line-clamp-1 mt-0.5">
                    {currentWorksheet.title}
                  </p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setScope('all')}
                className={`cursor-pointer p-3 rounded-xl border-2 text-left transition-all flex items-start gap-2.5 ${
                  scope === 'all'
                    ? 'border-red-600 bg-red-50/60 ring-2 ring-red-500/20'
                    : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div
                  className={`mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg text-xs font-black ${
                    scope === 'all' ? 'bg-red-600 text-white' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900 leading-tight">
                    Cuaderno Completo (4 Temas)
                  </p>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Todas las lecturas con pestañas interactivas
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* 3. Options Selection */}
          <div>
            <label className="block text-xs font-black uppercase text-slate-700 mb-2">
              3. Modalidad y Solucionario
            </label>
            <div className="space-y-2">
              {/* Option A: Include answers */}
              <label
                className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                  includeAnswers
                    ? 'border-amber-400 bg-amber-50/50'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <input
                  type="checkbox"
                  checked={includeAnswers}
                  onChange={(e) => setIncludeAnswers(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded text-red-600 focus:ring-red-500 border-slate-300"
                />
                <div className="text-xs">
                  <span className="font-black text-slate-900 flex items-center gap-1.5">
                    <FileCheck className="w-3.5 h-3.5 text-amber-600" />
                    Cargar mis respuestas actuales ({answeredCount} actividades respondidas)
                  </span>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Inicializa el documento con las alternativas seleccionadas y opiniones redactadas por el estudiante.
                  </p>
                </div>
              </label>

              {/* Option B: Teacher Solutions */}
              <label
                className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                  includeSolutions
                    ? 'border-indigo-400 bg-indigo-50/50'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <input
                  type="checkbox"
                  checked={includeSolutions}
                  onChange={(e) => setIncludeSolutions(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                />
                <div className="text-xs">
                  <span className="font-black text-slate-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    Mostrar Solucionario Docente visible desde el inicio
                  </span>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Muestra las claves justificadas y rúbricas CNEB. (El alumno o docente también puede activarlo o desactivarlo con un clic en la barra del archivo).
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* 4. File Summary Box */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-xs text-slate-600 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-700">Nombre del archivo:</span>
              <span className="font-mono font-bold text-red-700 text-[11px] truncate max-w-[260px]">
                {finalFileName}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-700">Modo de funcionamiento:</span>
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {isInteractive ? 'Interactivo Autónomo (JS + Audio + Calificación)' : 'A4 Imprimible'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-700">Sin conexión:</span>
              <span className="text-slate-700">Funciona al 100% sin internet en Chrome, Edge, celulares o tablets</span>
            </div>
          </div>

          {/* Information Notice */}
          <div className="flex items-start gap-2 text-[11px] text-slate-500 bg-sky-50 border border-sky-200 rounded-lg p-2.5">
            <Info className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            <p>
              <strong>Ventaja pedagógica rural:</strong> El archivo HTML interactivo guarda automáticamente el progreso en el navegador (localStorage). El alumno puede cerrarlo y continuar al día siguiente sin perder ninguna respuesta ni requerir cuentas.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-slate-200 bg-slate-100 px-5 py-3.5 flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleOpenNewTab}
              className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-xs"
              title="Abrir vista previa del HTML en una pestaña nueva"
            >
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              Probar en Pestaña
            </button>

            <button
              type="button"
              onClick={handleCopyClipboard}
              className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-xs"
              title="Copiar código HTML completo al portapapeles"
            >
              <Copy className="w-3.5 h-3.5 text-slate-500" />
              {copied ? '¡Copiado!' : 'Copiar HTML'}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer rounded-lg px-3 py-2 text-xs font-bold text-slate-600 hover:bg-slate-200"
            >
              Cerrar
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 via-amber-600 to-red-600 px-5 py-2.5 text-xs font-black text-white hover:brightness-110 shadow-md transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              {isInteractive ? 'Guardar en HTML Interactivo' : 'Descargar HTML A4'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
