import React from 'react';
import { SentenceOrderItem } from '../types/worksheet';
import { ArrowUp, ArrowDown, RotateCcw, CheckCircle2, ListOrdered, Sparkles } from 'lucide-react';

interface Props {
  sentences: SentenceOrderItem[];
  orderedIds: string[];
  onReorder: (newOrderedIds: string[]) => void;
  showSolutions?: boolean;
  isPrintView?: boolean;
}

export const SentenceOrderingActivity: React.FC<Props> = ({
  sentences,
  orderedIds,
  onReorder,
  showSolutions = false,
  isPrintView = false,
}) => {
  // If orderedIds is empty or doesn't match sentences length, initialize with original order
  const currentList = orderedIds.length === sentences.length
    ? orderedIds.map(id => sentences.find(s => s.id === id)!)
    : [...sentences].sort((a, b) => (a.id > b.id ? 1 : -1));

  const handleMove = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= currentList.length) return;

    const newList = [...currentList];
    const temp = newList[index];
    newList[index] = newList[targetIndex];
    newList[targetIndex] = temp;

    onReorder(newList.map(s => s.id));
  };

  const handleReset = () => {
    // Scramble order
    const shuffled = [...sentences].sort(() => Math.random() - 0.5);
    onReorder(shuffled.map(s => s.id));
  };

  return (
    <section className="mb-8 rounded-xl border-2 border-slate-700 bg-white p-5 sm:p-6 shadow-sm print:p-2 print:border-black print:mb-4">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between border-b-2 border-slate-800 pb-3 mb-5 print:pb-1 print:mb-2">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-white font-black text-sm print:border print:border-black print:text-black print:bg-white">
            5
          </span>
          <div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight uppercase print:text-sm">
              ORDENAMIENTO SECUENCIAL DE HECHOS
            </h2>
            <p className="text-xs text-slate-500 font-medium print:text-black">
              Organiza la secuencia cronológica de los acontecimientos según el desarrollo de la lectura (del 1 al 5).
            </p>
          </div>
        </div>

        {!isPrintView && (
          <button
            type="button"
            onClick={handleReset}
            className="cursor-pointer inline-flex items-center gap-1 rounded bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700 border border-slate-300 hover:bg-slate-200 mt-2 sm:mt-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Desordenar
          </button>
        )}
      </div>

      {/* Sentences List */}
      <div className="space-y-3 print:space-y-2">
        {currentList.map((item, index) => {
          const isCorrectPosition = item.correctOrder === index + 1;

          return (
            <div
              key={item.id}
              className={`flex items-center gap-3 rounded-xl border p-3 transition-all ${
                showSolutions
                  ? isCorrectPosition
                    ? 'bg-emerald-50 border-emerald-400'
                    : 'bg-rose-50 border-rose-400'
                  : 'bg-slate-50/70 border-slate-300 hover:border-slate-400'
              } print:bg-white print:border-slate-400 print:p-1.5`}
            >
              {/* Order number badge */}
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-600 text-white font-black text-sm shrink-0 shadow-xs print:bg-white print:border print:border-black print:text-black">
                {isPrintView ? `[   ]` : `${index + 1}.°`}
              </div>

              {/* Text */}
              <p className="flex-1 font-semibold text-xs sm:text-sm text-slate-800 leading-snug print:text-xs print:text-black">
                {item.text}
              </p>

              {/* In digital mode: Move up / down buttons */}
              {!isPrintView && (
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    disabled={index === 0}
                    onClick={() => handleMove(index, 'up')}
                    className="cursor-pointer p-1 rounded bg-white border border-slate-300 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed text-slate-700"
                    title="Subir posición"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    disabled={index === currentList.length - 1}
                    onClick={() => handleMove(index, 'down')}
                    className="cursor-pointer p-1 rounded bg-white border border-slate-300 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed text-slate-700"
                    title="Bajar posición"
                  >
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Print view prompt hint */}
              {isPrintView && (
                <div className="text-[10px] text-slate-400 italic shrink-0 print:text-black">
                  (Escribe 1, 2, 3, 4 o 5)
                </div>
              )}
            </div>
          );
        })}
      </div>

      {showSolutions && (
        <div className="mt-4 rounded-lg bg-slate-100 p-2.5 text-xs text-slate-700 border border-slate-300 print:hidden">
          <strong className="text-slate-900">Orden correcto de la historia:</strong>
          <ol className="list-decimal pl-5 mt-1 space-y-0.5 text-[11px]">
            {[...sentences]
              .sort((a, b) => a.correctOrder - b.correctOrder)
              .map((s) => (
                <li key={s.id}>{s.text}</li>
              ))}
          </ol>
        </div>
      )}
    </section>
  );
};
