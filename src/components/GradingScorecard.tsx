import React from 'react';
import { WorksheetData, StudentAnswers } from '../types/worksheet';
import { Award, CheckCircle, AlertTriangle, BookCheck, RefreshCw, Printer, Download, Smartphone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { exportWorksheetsToStandaloneHtml } from '../utils/exportHtml';

interface Props {
  worksheet: WorksheetData;
  studentData: StudentAnswers;
  onResetAll: () => void;
  onPrintA4: () => void;
  onToggleSolutions: () => void;
  showSolutions: boolean;
  onOpenSaveHtmlModal?: () => void;
  onOpenApkModal?: () => void;
  onOpenSavePdfModal?: () => void;
}

export function calculateWorksheetScore(worksheet: WorksheetData, answers: StudentAnswers) {
  let earned = 0;
  let totalMax = 0;

  // 1. Literal Questions (5 items = 5 pts)
  worksheet.literalQuestions.forEach(q => {
    totalMax += 1;
    if (answers.literal[q.id] === q.correctIndex) earned += 1;
  });

  // 2. Inferential Questions (5 items = 5 pts)
  worksheet.inferentialQuestions.forEach(q => {
    totalMax += 1;
    if (answers.inferential[q.id] === q.correctIndex) earned += 1;
  });

  // 3. Text Identification (5 items = 5 pts)
  worksheet.textIdentification.forEach(q => {
    totalMax += 1;
    if (answers.textIdent[q.id] === q.correctIndex) earned += 1;
  });

  // 4. Sentence Ordering (5 items = 5 pts)
  if (answers.sentenceOrder.length === worksheet.sentenceOrdering.length) {
    totalMax += 5;
    let correctCount = 0;
    answers.sentenceOrder.forEach((id, idx) => {
      const item = worksheet.sentenceOrdering.find(s => s.id === id);
      if (item && item.correctOrder === idx + 1) {
        correctCount += 1;
      }
    });
    earned += correctCount;
  } else {
    totalMax += 5;
  }

  // 5. Column Matching (5 items = 5 pts)
  totalMax += worksheet.columnMatching.length;
  worksheet.columnMatching.forEach(pair => {
    if (answers.columnMatches[pair.id] === pair.id) {
      earned += 1;
    }
  });

  // 6. Word Search (10 items = 5 pts, 0.5 per word)
  totalMax += 5;
  const wordSearchPoints = (answers.foundWords.length / worksheet.wordSearch.words.length) * 5;
  earned += wordSearchPoints;

  // 7. Fill in the blanks (6 items = 6 pts)
  totalMax += worksheet.fillInTheBlanks.items.length;
  worksheet.fillInTheBlanks.items.forEach(item => {
    const studentAns = (answers.fillBlanks[item.id] || '').toLowerCase().trim();
    if (studentAns === item.correctWord.toLowerCase().trim()) {
      earned += 1;
    }
  });

  // Scale to Peruvian 0 - 20 grade
  const score20 = Math.round((earned / totalMax) * 20 * 10) / 10;

  let scale: 'AD' | 'A' | 'B' | 'C' = 'C';
  let scaleLabel = 'En Inicio';
  let feedbackText = '';

  if (score20 >= 18) {
    scale = 'AD';
    scaleLabel = 'Logro Destacado';
    feedbackText = '¡Felicitaciones! Has demostrado una comprensión profunda, deduciendo ideas implícitas y conectando la lectura con los valores de tu comunidad rural.';
  } else if (score20 >= 14) {
    scale = 'A';
    scaleLabel = 'Logro Esperado';
    feedbackText = '¡Muy buen trabajo! Comprendes las ideas centrales, la secuencia y el vocabulario. Sigue reflexionando con juicio crítico en tus respuestas escritas.';
  } else if (score20 >= 11) {
    scale = 'B';
    scaleLabel = 'En Proceso';
    feedbackText = 'Estás en camino. Revisa nuevamente los párrafos de la lectura para afianzar las deducciones inferenciales y el orden cronológico.';
  } else {
    scale = 'C';
    scaleLabel = 'En Inicio';
    feedbackText = 'Requiere mayor acompañamiento. Te recomendamos escuchar la narración en audio y apoyarte en el glosario de términos clave.';
  }

  return {
    totalEarned: Math.round(earned * 10) / 10,
    maxPoints: totalMax,
    score20,
    scale,
    scaleLabel,
    feedbackText,
  };
}

export const GradingScorecard: React.FC<Props> = ({
  worksheet,
  studentData,
  onResetAll,
  onPrintA4,
  onToggleSolutions,
  showSolutions,
  onOpenSaveHtmlModal,
  onOpenApkModal,
  onOpenSavePdfModal,
}) => {
  const result = calculateWorksheetScore(worksheet, studentData);

  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const scaleColors = {
    AD: 'bg-emerald-600 text-white border-emerald-700',
    A: 'bg-blue-600 text-white border-blue-700',
    B: 'bg-amber-600 text-white border-amber-700',
    C: 'bg-rose-600 text-white border-rose-700',
  }[result.scale];

  return (
    <div className="rounded-2xl border-3 border-slate-800 bg-white p-6 shadow-md print:p-2 print:border-black print:mb-4">
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between border-b-2 border-slate-700 pb-4 mb-4 gap-4">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
            Evaluación Formativa según Criterios del CNEB (MINEDU Perú)
          </span>
          <h3 className="text-xl font-black text-slate-900 leading-tight">
            Ficha de Calificación y Logro de Competencia
          </h3>
          <p className="text-xs text-slate-600 font-medium">
            Estudiante: <strong>{studentData.studentName || 'Estudiante de 2.° Grado'}</strong> • I.E.: <strong>{studentData.schoolName || 'I.E. Rural'}</strong>
          </p>
        </div>

        {/* Big Grade Badge */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-xs text-slate-500 font-bold block">Nota Vigesimal:</span>
            <span className="text-3xl font-black text-red-700">{result.score20}</span>
            <span className="text-sm font-bold text-slate-500"> / 20</span>
          </div>

          <div className={`flex flex-col items-center justify-center rounded-xl border-2 px-4 py-2 font-black shadow-xs ${scaleColors}`}>
            <span className="text-2xl font-black leading-none">{result.scale}</span>
            <span className="text-[10px] uppercase font-bold tracking-tight mt-1">{result.scaleLabel}</span>
          </div>
        </div>
      </div>

      {/* Feedback Card */}
      <div className="rounded-xl border border-slate-300 bg-slate-50 p-4 mb-5">
        <h4 className="font-extrabold text-xs text-slate-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
          <BookCheck className="w-4 h-4 text-emerald-600" />
          Conclusión Descriptiva Pedagógica:
        </h4>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
          {result.feedbackText}
        </p>
      </div>

      {/* Action Buttons Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={triggerCelebration}
            className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-emerald-700 shadow-xs"
          >
            <Award className="w-4 h-4" />
            Celebrar Logro 🎉
          </button>

          <button
            type="button"
            onClick={onToggleSolutions}
            className={`cursor-pointer inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-xs font-bold transition-all shadow-xs ${
              showSolutions
                ? 'bg-indigo-700 text-white border-indigo-800'
                : 'bg-white text-indigo-900 border-indigo-400 hover:bg-indigo-50'
            }`}
          >
            <BookCheck className="w-4 h-4" />
            {showSolutions ? 'Ocultar Solucionario' : 'Ver Solucionario Docente'}
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {onOpenApkModal && (
            <button
              type="button"
              onClick={onOpenApkModal}
              className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg bg-teal-700 px-3.5 py-2 text-xs font-black text-white hover:bg-teal-800 shadow-xs transition-transform active:scale-95"
              title="Instalar como app nativa APK en celular Android"
            >
              <Smartphone className="w-4 h-4 text-teal-200" />
              Instalar APK
            </button>
          )}

          <button
            type="button"
            onClick={() => {
              if (onOpenSaveHtmlModal) {
                onOpenSaveHtmlModal();
              } else {
                exportWorksheetsToStandaloneHtml([worksheet], studentData, {
                  includeAnswers: true,
                  title: `Ficha N.° ${worksheet.themeNumber}: ${worksheet.title}`,
                });
              }
            }}
            className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-emerald-600 via-amber-600 to-red-600 px-3.5 py-2 text-xs font-black text-white hover:brightness-110 shadow-xs"
            title="Guardar esta ficha resuelta con calificaciones en formato HTML interactivo autónomo"
          >
            <Download className="w-4 h-4" />
            Guardar en HTML Interactivo
          </button>

          <button
            type="button"
            onClick={onOpenSavePdfModal || onPrintA4}
            className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg bg-red-700 px-4 py-2 text-xs font-black text-white hover:bg-red-800 shadow-xs"
            title="Guardar como archivo PDF o imprimir en tamaño A4"
          >
            <Printer className="w-4 h-4" />
            Guardar en PDF (A4)
          </button>

          <button
            type="button"
            onClick={onResetAll}
            className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100"
          >
            <RefreshCw className="w-4 h-4 text-slate-500" />
            Reiniciar Respuestas
          </button>
        </div>
      </div>
    </div>
  );
};
