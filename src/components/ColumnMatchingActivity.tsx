import React, { useState } from 'react';
import { MatchingPair } from '../types/worksheet';
import { Link2, RotateCcw, Check, Sparkles } from 'lucide-react';

interface Props {
  pairs: MatchingPair[];
  matches: Record<string, string>; // conceptId -> matchId
  onMatch: (conceptId: string, matchId: string) => void;
  onClearMatches: () => void;
  showSolutions?: boolean;
  isPrintView?: boolean;
}

export const ColumnMatchingActivity: React.FC<Props> = ({
  pairs,
  matches,
  onMatch,
  onClearMatches,
  showSolutions = false,
  isPrintView = false,
}) => {
  const [selectedConceptId, setSelectedConceptId] = useState<string | null>(null);

  // Shuffle right side deterministically based on pairs
  const rightColumnItems = React.useMemo(() => {
    return [...pairs].sort((a, b) => b.id.localeCompare(a.id));
  }, [pairs]);

  const pairColors = [
    'border-blue-500 bg-blue-50 text-blue-900',
    'border-emerald-500 bg-emerald-50 text-emerald-900',
    'border-amber-500 bg-amber-50 text-amber-900',
    'border-purple-500 bg-purple-50 text-purple-900',
    'border-rose-500 bg-rose-50 text-rose-900',
  ];

  const letters = ['A', 'B', 'C', 'D', 'E'];
  const romanNumbers = ['I', 'II', 'III', 'IV', 'V'];

  const handleConceptClick = (id: string) => {
    if (isPrintView) return;
    if (selectedConceptId === id) {
      setSelectedConceptId(null);
    } else {
      setSelectedConceptId(id);
    }
  };

  const handleMatchClick = (matchId: string) => {
    if (isPrintView) return;
    if (selectedConceptId) {
      onMatch(selectedConceptId, matchId);
      setSelectedConceptId(null);
    }
  };

  return (
    <section className="mb-8 rounded-xl border-2 border-slate-700 bg-white p-5 sm:p-6 shadow-sm print:p-2 print:border-black print:mb-4">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between border-b-2 border-slate-800 pb-3 mb-5 print:pb-1 print:mb-2">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-white font-black text-sm print:border print:border-black print:text-black print:bg-white">
            6
          </span>
          <div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight uppercase print:text-sm">
              RELACIÓN DE COLUMNAS (CONCEPTOS Y SIGNIFICADOS)
            </h2>
            <p className="text-xs text-slate-500 font-medium print:text-black">
              {isPrintView
                ? 'Une con una línea o escribe en el paréntesis de la Columna B la letra que corresponda a la Columna A.'
                : 'Haz clic en un concepto de la Columna A y luego en su definición correspondiente de la Columna B para conectarlos.'}
            </p>
          </div>
        </div>

        {!isPrintView && (
          <button
            type="button"
            onClick={onClearMatches}
            className="cursor-pointer inline-flex items-center gap-1 rounded bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700 border border-slate-300 hover:bg-slate-200 mt-2 sm:mt-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reiniciar enlaces
          </button>
        )}
      </div>

      {/* Two columns layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 print:gap-2">
        {/* Column A (Left: Concepts / Characters) */}
        <div className="space-y-3 print:space-y-1.5">
          <div className="rounded-lg bg-slate-100 border border-slate-300 p-2 text-center text-xs font-black text-slate-800 uppercase print:bg-slate-200 print:border-black">
            Columna A: Conceptos / Personajes
          </div>

          {pairs.map((item, index) => {
            const isSelected = selectedConceptId === item.id;
            const matchedRightId = matches[item.id];
            const pairColorIndex = index % pairColors.length;

            return (
              <div
                key={item.id}
                onClick={() => handleConceptClick(item.id)}
                className={`flex items-center justify-between rounded-xl border-2 p-3 transition-all cursor-pointer ${
                  isSelected
                    ? 'ring-2 ring-red-500 border-red-500 bg-red-50'
                    : matchedRightId
                    ? pairColors[pairColorIndex]
                    : 'border-slate-300 bg-white hover:border-slate-400'
                } print:border-slate-400 print:bg-white print:p-1.5`}
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-white font-black text-xs shrink-0 print:border print:border-black print:bg-white print:text-black">
                    {letters[index]}
                  </span>
                  <span className="font-bold text-xs sm:text-sm text-slate-900 print:text-xs">
                    {item.concept}
                  </span>
                </div>

                {!isPrintView && matchedRightId && (
                  <span className="text-[10px] font-extrabold uppercase rounded px-2 py-0.5 bg-white/80 border shadow-2xs">
                    Enlazado ✓
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Column B (Right: Meanings / Actions) */}
        <div className="space-y-3 print:space-y-1.5">
          <div className="rounded-lg bg-slate-100 border border-slate-300 p-2 text-center text-xs font-black text-slate-800 uppercase print:bg-slate-200 print:border-black">
            Columna B: Significados / Hechos
          </div>

          {rightColumnItems.map((item, index) => {
            // Find if any left item has linked to this right item
            const leftMatchedKey = Object.keys(matches).find(k => matches[k] === item.id);
            const leftMatchedItem = leftMatchedKey ? pairs.find(p => p.id === leftMatchedKey) : null;
            const leftIndex = leftMatchedItem ? pairs.findIndex(p => p.id === leftMatchedItem.id) : -1;
            const pairColor = leftIndex >= 0 ? pairColors[leftIndex % pairColors.length] : 'border-slate-300 bg-white';

            return (
              <div
                key={item.id}
                onClick={() => handleMatchClick(item.id)}
                className={`flex items-start gap-2.5 rounded-xl border-2 p-3 transition-all cursor-pointer ${
                  selectedConceptId ? 'hover:border-red-400 hover:bg-amber-50/50' : ''
                } ${pairColor} print:border-slate-400 print:bg-white print:p-1.5`}
              >
                {/* Print view parentheses for writing letter */}
                <span className="flex h-6 w-6 items-center justify-center rounded font-bold text-xs shrink-0 text-slate-700 bg-slate-100 border border-slate-300 print:border-black print:bg-white print:text-black">
                  {isPrintView ? '(   )' : romanNumbers[index]}
                </span>

                <div className="flex-1">
                  <p className="font-medium text-xs sm:text-sm leading-snug text-slate-800 print:text-xs print:text-black">
                    {item.match}
                  </p>
                  {leftMatchedItem && !isPrintView && (
                    <span className="inline-block mt-1 text-[10px] font-bold text-slate-600 bg-white/90 px-1.5 py-0.5 rounded border border-slate-200">
                      ← {leftMatchedItem.concept}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {showSolutions && (
        <div className="mt-4 rounded-lg bg-slate-100 p-3 text-xs text-slate-700 border border-slate-300 print:hidden">
          <strong className="text-slate-900">Relación correcta de columnas:</strong>
          <ul className="mt-1 space-y-1 list-disc pl-5 text-[11px]">
            {pairs.map((p, i) => (
              <li key={p.id}>
                <strong>({letters[i]}) {p.concept}</strong> se relaciona con: <em>{p.match}</em>.
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
