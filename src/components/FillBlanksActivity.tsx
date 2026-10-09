import React from 'react';
import { FillBlankItem } from '../types/worksheet';
import { Edit3, CheckCircle2, Lightbulb, Sparkles, RotateCcw } from 'lucide-react';

interface Props {
  wordBank: string[];
  items: FillBlankItem[];
  answers: Record<string, string>;
  onSelectWord: (itemId: string, word: string) => void;
  onClearAnswers: () => void;
  showSolutions?: boolean;
  isPrintView?: boolean;
}

export const FillBlanksActivity: React.FC<Props> = ({
  wordBank,
  items,
  answers,
  onSelectWord,
  onClearAnswers,
  showSolutions = false,
  isPrintView = false,
}) => {
  return (
    <section className="mb-8 rounded-xl border-2 border-slate-700 bg-white p-5 sm:p-6 shadow-sm print:p-2 print:border-black print:mb-4">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between border-b-2 border-slate-800 pb-3 mb-5 print:pb-1 print:mb-2">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-white font-black text-sm print:border print:border-black print:text-black print:bg-white">
            8
          </span>
          <div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight uppercase print:text-sm">
              COMPLETAR ESPACIOS Y CONECTORES LÓGICOS (6 ENUNCIADOS)
            </h2>
            <p className="text-xs text-slate-500 font-medium print:text-black">
              Selecciona o escribe el conector o término del banco de palabras que otorgue sentido y cohesión adecuada a cada oración.
            </p>
          </div>
        </div>

        {!isPrintView && (
          <button
            type="button"
            onClick={onClearAnswers}
            className="cursor-pointer inline-flex items-center gap-1 rounded bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700 border border-slate-300 hover:bg-slate-200 mt-2 sm:mt-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Limpiar espacios
          </button>
        )}
      </div>

      {/* Word Bank Box */}
      <div className="mb-6 rounded-xl border-2 border-amber-300 bg-amber-50/70 p-3.5 print:bg-white print:border-black print:p-1.5 print:mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="font-black text-xs uppercase tracking-wider text-amber-900 flex items-center gap-1.5 print:text-black">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 print:text-black" />
            Banco de Palabras y Conectores Disponibles:
          </span>
          <span className="text-[11px] text-amber-800 font-bold print:text-black">6 términos</span>
        </div>

        <div className="flex flex-wrap gap-2 print:gap-1.5">
          {wordBank.map((word, idx) => {
            const isUsed = Object.values(answers).includes(word);

            return (
              <span
                key={idx}
                className={`rounded-lg px-2.5 py-1 text-xs font-black border transition-all ${
                  isUsed
                    ? 'bg-amber-200/60 text-amber-900/60 border-amber-300 line-through'
                    : 'bg-white text-amber-950 border-amber-400 shadow-xs'
                } print:border-black print:text-black print:bg-white`}
              >
                « {word} »
              </span>
            );
          })}
        </div>
      </div>

      {/* Sentences List */}
      <div className="space-y-4 print:space-y-2">
        {items.map((item, index) => {
          const selectedVal = answers[item.id] || '';
          const isCorrect = selectedVal.toLowerCase().trim() === item.correctWord.toLowerCase().trim();

          return (
            <div
              key={item.id}
              className={`rounded-xl border p-3.5 transition-all ${
                showSolutions && selectedVal
                  ? isCorrect
                    ? 'bg-emerald-50 border-emerald-400'
                    : 'bg-rose-50 border-rose-400'
                  : 'bg-slate-50/60 border-slate-300 hover:border-slate-400'
              } print:bg-white print:border-slate-400 print:p-1.5`}
            >
              <div className="flex items-start gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-white font-black text-xs shrink-0 print:border print:border-black print:bg-white print:text-black">
                  {index + 1}
                </span>

                <div className="flex-1 font-medium text-xs sm:text-sm text-slate-800 leading-relaxed print:text-xs print:text-black">
                  <span>{item.sentenceBefore} </span>

                  {isPrintView ? (
                    <span className="inline-block border-b-2 border-slate-700 min-w-36 text-center font-bold text-slate-900 mx-1 print:border-black">
                      {selectedVal || '______________________'}
                    </span>
                  ) : (
                    <select
                      aria-label={`Completar espacio en la oración ${index + 1}`}
                      value={selectedVal}
                      onChange={(e) => onSelectWord(item.id, e.target.value)}
                      className="inline-block bg-white border-2 border-amber-400 rounded-md px-2 py-0.5 text-xs font-bold text-amber-950 mx-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="">[ Selecciona la palabra ]</option>
                      {wordBank.map((w, wIdx) => (
                        <option key={wIdx} value={w}>
                          {w}
                        </option>
                      ))}
                    </select>
                  )}

                  <span> {item.sentenceAfter}</span>
                </div>
              </div>

              {/* Grammar hint and Teacher Solution */}
              <div className="mt-2 pl-8 flex flex-wrap items-center justify-between text-[11px] text-slate-500 print:text-black">
                <span>
                  <strong>Tipo de palabra:</strong> {item.wordType === 'conector' ? 'Conector de enlace' : 'Término temático'} ({item.grammarHint})
                </span>
                {showSolutions && (
                  <span className="font-bold text-emerald-700 print:hidden">
                    Respuesta correcta: «{item.correctWord}»
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
