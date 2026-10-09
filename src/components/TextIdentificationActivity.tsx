import React from 'react';
import { MultipleChoiceQuestion } from '../types/worksheet';
import { Target, CheckCircle2, Lightbulb } from 'lucide-react';

interface Props {
  questions: MultipleChoiceQuestion[];
  answers: Record<string, number>;
  onSelectAnswer: (questionId: string, optionIndex: number) => void;
  showSolutions?: boolean;
  isPrintView?: boolean;
}

export const TextIdentificationActivity: React.FC<Props> = ({
  questions,
  answers,
  onSelectAnswer,
  showSolutions = false,
  isPrintView = false,
}) => {
  const letters = ['a', 'b', 'c', 'd'];

  return (
    <section className="mb-8 rounded-xl border-2 border-slate-700 bg-white p-5 sm:p-6 shadow-sm print:p-2 print:border-black print:mb-4">
      {/* Section Header */}
      <div className="flex items-center gap-2 border-b-2 border-slate-800 pb-3 mb-5 print:pb-1 print:mb-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-white font-black text-sm print:border print:border-black print:text-black print:bg-white">
          4
        </span>
        <div>
          <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight uppercase print:text-sm">
            IDENTIFICACIÓN Y ESTRUCTURA DEL TEXTO
          </h2>
          <p className="text-xs text-slate-500 font-medium print:text-black">
            Reconoce los elementos estructurales de la lectura: Título, Tema, Idea Principal, Ideas Secundarias y Propósito del autor.
          </p>
        </div>
      </div>

      <div className="space-y-5 print:space-y-3">
        {questions.map((q, idx) => {
          const selectedOpt = answers[q.id];
          const isAnswered = selectedOpt !== undefined;
          const isCorrect = isAnswered && selectedOpt === q.correctIndex;

          const tags = [
            '1. Título del texto',
            '2. Tema principal',
            '3. Idea principal',
            '4. Ideas secundarias',
            '5. Propósito del autor',
          ];

          return (
            <div
              key={q.id}
              className={`rounded-xl border p-4 transition-all ${
                showSolutions && isAnswered
                  ? isCorrect
                    ? 'bg-emerald-50/50 border-emerald-400'
                    : 'bg-rose-50/50 border-rose-400'
                  : 'bg-white border-slate-300 hover:border-slate-400'
              } print:border-slate-400 print:p-1.5`}
            >
              <div className="flex items-start gap-2 mb-2.5 print:mb-1">
                <span className="rounded bg-indigo-100 text-indigo-900 border border-indigo-300 px-2 py-0.5 text-xs font-black shrink-0 print:border print:border-black print:bg-white print:text-black">
                  {tags[idx] || `Pregunta ${idx + 1}`}
                </span>
                <p className="font-bold text-sm text-slate-900 leading-snug print:text-xs">
                  {q.question}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4 print:pl-2 print:gap-1">
                {q.options.map((opt, optIndex) => {
                  const isCurrentSelected = selectedOpt === optIndex;

                  return (
                    <label
                      key={optIndex}
                      onClick={() => !isPrintView && onSelectAnswer(q.id, optIndex)}
                      className={`flex items-start gap-2.5 p-2 rounded-lg text-xs cursor-pointer border transition-all ${
                        isPrintView
                          ? 'border-transparent'
                          : isCurrentSelected
                          ? 'bg-indigo-100/70 border-indigo-500 font-semibold text-indigo-950 ring-1 ring-indigo-400'
                          : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-black shrink-0 border ${
                          isCurrentSelected
                            ? 'bg-indigo-700 text-white border-indigo-700'
                            : 'bg-white text-slate-700 border-slate-400'
                        } print:border-black print:text-black`}
                      >
                        {letters[optIndex].toUpperCase()}
                      </span>
                      <span className="leading-snug pt-0.5 print:text-xs">
                        {isPrintView ? `(  ) ${opt}` : opt}
                      </span>
                    </label>
                  );
                })}
              </div>

              {/* Teacher Solution */}
              {showSolutions && (
                <div className="mt-2.5 pl-4 text-xs rounded bg-slate-50 p-2 border border-slate-200 text-slate-700 flex items-start gap-1.5 print:hidden">
                  <Lightbulb className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-indigo-800">Clave correcta: ({letters[q.correctIndex].toUpperCase()})</strong> — {q.explanation}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
