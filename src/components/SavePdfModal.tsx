import React, { useState } from 'react';
import { WorksheetData, StudentAnswers } from '../types/worksheet';
import {
  FileText,
  Printer,
  Download,
  CheckCircle2,
  X,
  BookOpen,
  Sparkles,
  Info,
  Layers,
  FileCheck,
  Check
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currentWorksheet: WorksheetData;
  allWorksheets: WorksheetData[];
  studentAnswers: StudentAnswers;
  onExecutePdfPrint: (options: {
    scope: 'current' | 'all';
    includeAnswers: boolean;
    includeSolutions: boolean;
  }) => void;
}

export const SavePdfModal: React.FC<Props> = ({
  isOpen,
  onClose,
  currentWorksheet,
  allWorksheets,
  studentAnswers,
  onExecutePdfPrint,
}) => {
  const [scope, setScope] = useState<'current' | 'all'>('current');
  const [contentMode, setContentMode] = useState<'with_answers' | 'blank' | 'with_solutions'>('with_answers');

  if (!isOpen) return null;

  // Filename preview
  const isSingle = scope === 'current';
  const themeTag = isSingle
    ? `Ficha_${currentWorksheet.themeNumber}_${currentWorksheet.shortTag.replace(/\s+/g, '_')}`
    : 'Cuaderno_Comprension_Lectora_4_Temas_2do_Secundaria_Rural';

  const modeSuffix =
    contentMode === 'blank'
      ? '_En_Blanco_Fotocopias'
      : contentMode === 'with_solutions'
      ? '_Con_Solucionario_Docente'
      : '_Resuelto';

  const previewFileName = `${themeTag}${modeSuffix}.pdf`;

  const handlePrint = () => {
    onExecutePdfPrint({
      scope,
      includeAnswers: contentMode !== 'blank',
      includeSolutions: contentMode === 'with_solutions',
    });
    onClose();
  };

  // Count answered items
  const answeredCount =
    Object.keys(studentAnswers.literal).length +
    Object.keys(studentAnswers.inferential).length +
    Object.keys(studentAnswers.textIdent).length +
    Object.keys(studentAnswers.fillBlanks).length +
    studentAnswers.foundWords.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-3 sm:p-4 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-red-600 via-rose-700 to-slate-900 px-5 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-xs text-white shadow-xs">
              <FileText className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-black tracking-tight">
                  Guardar en Formato PDF (.pdf)
                </h3>
                <span className="rounded bg-amber-400 px-2 py-0.5 text-[10px] font-black text-slate-950 uppercase">
                  Formato A4
                </span>
              </div>
              <p className="text-xs text-red-100">
                Documento de alta resolución para imprimir en papel o guardar como archivo PDF.
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

        {/* Modal Body */}
        <div className="p-5 space-y-4 overflow-y-auto">
          {/* 1. Scope Selection */}
          <div>
            <label className="block text-xs font-black uppercase text-slate-700 mb-2">
              1. ¿Qué deseas guardar en el PDF?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setScope('current')}
                className={`cursor-pointer p-3.5 rounded-xl border-2 text-left transition-all flex items-start gap-2.5 ${
                  scope === 'current'
                    ? 'border-red-600 bg-red-50/70 ring-2 ring-red-500/20 shadow-xs'
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
                  <span className="text-[10px] font-bold text-red-700 mt-1 inline-block">
                    ~3 a 4 páginas A4
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setScope('all')}
                className={`cursor-pointer p-3.5 rounded-xl border-2 text-left transition-all flex items-start gap-2.5 ${
                  scope === 'all'
                    ? 'border-red-600 bg-red-50/70 ring-2 ring-red-500/20 shadow-xs'
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
                    Las 4 lecturas y actividades completas
                  </p>
                  <span className="text-[10px] font-bold text-red-700 mt-1 inline-block">
                    ~12 a 16 páginas A4 continuas
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* 2. Content Mode Selection */}
          <div>
            <label className="block text-xs font-black uppercase text-slate-700 mb-2">
              2. Modalidad del documento
            </label>
            <div className="space-y-2">
              {/* Option A: With student answers */}
              <button
                type="button"
                onClick={() => setContentMode('with_answers')}
                className={`w-full cursor-pointer p-3 rounded-xl border text-left transition-colors flex items-start gap-3 ${
                  contentMode === 'with_answers'
                    ? 'border-amber-500 bg-amber-50/70 ring-1 ring-amber-400'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className={`mt-0.5 h-4 w-4 rounded-full border-2 flex items-center justify-center ${
                  contentMode === 'with_answers' ? 'border-amber-600 bg-amber-600' : 'border-slate-400'
                }`}>
                  {contentMode === 'with_answers' && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                </div>
                <div className="text-xs">
                  <span className="font-black text-slate-900 flex items-center gap-1.5">
                    <FileCheck className="w-3.5 h-3.5 text-amber-600" />
                    Con mis respuestas resueltas ({answeredCount} actividades realizadas)
                  </span>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Muestra las opciones marcadas, textos de opinión redactados y calificación. Ideal para portafolio de evidencias, archivar en PDF o enviar al docente.
                  </p>
                </div>
              </button>

              {/* Option B: Clean for photocopies */}
              <button
                type="button"
                onClick={() => setContentMode('blank')}
                className={`w-full cursor-pointer p-3 rounded-xl border text-left transition-colors flex items-start gap-3 ${
                  contentMode === 'blank'
                    ? 'border-blue-500 bg-blue-50/70 ring-1 ring-blue-400'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className={`mt-0.5 h-4 w-4 rounded-full border-2 flex items-center justify-center ${
                  contentMode === 'blank' ? 'border-blue-600 bg-blue-600' : 'border-slate-400'
                }`}>
                  {contentMode === 'blank' && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                </div>
                <div className="text-xs">
                  <span className="font-black text-slate-900 flex items-center gap-1.5">
                    <Printer className="w-3.5 h-3.5 text-blue-600" />
                    En blanco / Para fotocopiar e imprimir en la escuela
                  </span>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Sin respuestas marcadas, con líneas limpias para escribir a mano. Ideal para que los docentes fotocopien y distribuyan a los alumnos en el aula.
                  </p>
                </div>
              </button>

              {/* Option C: With Teacher Solutions */}
              <button
                type="button"
                onClick={() => setContentMode('with_solutions')}
                className={`w-full cursor-pointer p-3 rounded-xl border text-left transition-colors flex items-start gap-3 ${
                  contentMode === 'with_solutions'
                    ? 'border-indigo-500 bg-indigo-50/70 ring-1 ring-indigo-400'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className={`mt-0.5 h-4 w-4 rounded-full border-2 flex items-center justify-center ${
                  contentMode === 'with_solutions' ? 'border-indigo-600 bg-indigo-600' : 'border-slate-400'
                }`}>
                  {contentMode === 'with_solutions' && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                </div>
                <div className="text-xs">
                  <span className="font-black text-slate-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    Con Solucionario Docente y Rúbricas CNEB incluidas
                  </span>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Incluye las claves pedagógicas, justificaciones curriculares y criterios de evaluación del MINEDU.
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* 3. Filename & Print Instructions */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-xs text-slate-600 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-700">Nombre sugerido para el PDF:</span>
              <span className="font-mono font-bold text-red-700 text-[11px] truncate max-w-[280px]">
                {previewFileName}
              </span>
            </div>
            <div className="pt-2 border-t border-slate-200">
              <p className="font-bold text-slate-800 text-[11.5px] mb-1">
                💡 Consejo al abrir el cuadro de impresión:
              </p>
              <ul className="list-disc list-inside space-y-0.5 text-[11px] text-slate-600">
                <li>En <strong>Destino</strong>: selecciona <em>«Guardar como PDF»</em>.</li>
                <li>En <strong>Tamaño de papel</strong>: selecciona <em>«A4»</em>.</li>
                <li>En <strong>Opciones</strong>: marca la casilla <em>«Gráficos de fondo»</em> para conservar ilustraciones y colores.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-slate-200 bg-slate-100 px-5 py-3.5 flex items-center justify-between gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-xl px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-200"
          >
            Cancelar
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 px-6 py-2.5 text-xs font-black text-white hover:brightness-110 shadow-md transition-all active:scale-95"
          >
            <Printer className="w-4 h-4" />
            Guardar como PDF / Imprimir Ahora
          </button>
        </div>
      </div>
    </div>
  );
};
