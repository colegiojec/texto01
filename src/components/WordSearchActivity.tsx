import React, { useState } from 'react';
import { WordSearchItem } from '../types/worksheet';
import { Search, CheckCircle, HelpCircle, Sparkles, Eye, RotateCcw } from 'lucide-react';

interface Props {
  grid: string[][];
  words: WordSearchItem[];
  foundWords: string[];
  onToggleFoundWord: (word: string) => void;
  onClearFoundWords: () => void;
  showSolutions?: boolean;
  isPrintView?: boolean;
}

export const WordSearchActivity: React.FC<Props> = ({
  grid,
  words,
  foundWords,
  onToggleFoundWord,
  onClearFoundWords,
  showSolutions = false,
  isPrintView = false,
}) => {
  const [highlightedWord, setHighlightedWord] = useState<string | null>(null);

  // Group clues by horizontal and vertical
  const horizontalWords = words.filter(w => w.direction === 'horizontal');
  const verticalWords = words.filter(w => w.direction === 'vertical');

  // Check if a cell is part of a word
  const getCellHighlights = (row: number, col: number) => {
    // Check if cell is in a found word or currently highlighted word or solutions are active
    for (const w of words) {
      const isWordActive = (showSolutions || foundWords.includes(w.word) || highlightedWord === w.word);
      if (!isWordActive) continue;

      if (w.direction === 'horizontal') {
        if (row === w.row && col >= w.col && col < w.col + w.word.length) {
          return 'bg-amber-300 text-amber-950 font-black scale-105 border-amber-500 shadow-xs ring-1 ring-amber-400';
        }
      } else if (w.direction === 'vertical') {
        if (col === w.col && row >= w.row && row < w.row + w.word.length) {
          return 'bg-emerald-300 text-emerald-950 font-black scale-105 border-emerald-500 shadow-xs ring-1 ring-emerald-400';
        }
      }
    }
    return '';
  };

  const handleCellClick = (row: number, col: number) => {
    if (isPrintView) return;
    // Find if this cell belongs to any word
    const matched = words.find(w => {
      if (w.direction === 'horizontal') {
        return row === w.row && col >= w.col && col < w.col + w.word.length;
      } else {
        return col === w.col && row >= w.row && row < w.row + w.word.length;
      }
    });

    if (matched) {
      onToggleFoundWord(matched.word);
    }
  };

  return (
    <section className="mb-8 rounded-xl border-2 border-slate-700 bg-white p-5 sm:p-6 shadow-sm print:p-2 print:border-black print:mb-4">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between border-b-2 border-slate-800 pb-3 mb-5 print:pb-1 print:mb-2">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-white font-black text-sm print:border print:border-black print:text-black print:bg-white">
            7
          </span>
          <div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight uppercase print:text-sm">
              SOPA DE LETRAS EDUCATIVA (10 PALABRAS CLAVE)
            </h2>
            <p className="text-xs text-slate-500 font-medium print:text-black">
              {isPrintView
                ? 'Encuentra las 10 palabras clave ocultas en la cuadrícula horizontal y verticalmente. Marca las pistas resueltas.'
                : 'Lee las pistas, busca las 10 palabras en la cuadrícula y haz clic sobre las letras o los botones para tacharlas.'}
            </p>
          </div>
        </div>

        {!isPrintView && (
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <span className="rounded-full bg-amber-100 border border-amber-300 px-3 py-0.5 text-xs font-black text-amber-900">
              Encontradas: {foundWords.length} / {words.length}
            </span>
            <button
              type="button"
              onClick={onClearFoundWords}
              className="cursor-pointer rounded bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600 hover:bg-slate-200 border border-slate-300"
              title="Reiniciar sopa de letras"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 print:gap-3">
        {/* The 12x12 Grid */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div className="inline-block rounded-xl border-2 border-slate-700 bg-slate-50 p-2 sm:p-3 shadow-inner print:p-1 print:border-black print:bg-white">
            <div className="grid grid-cols-12 gap-1 sm:gap-1.5 print:gap-0.5 text-center">
              {grid.map((row, rIndex) =>
                row.map((letter, cIndex) => {
                  const highlightClass = getCellHighlights(rIndex, cIndex);

                  return (
                    <button
                      key={`${rIndex}-${cIndex}`}
                      type="button"
                      onClick={() => handleCellClick(rIndex, cIndex)}
                      className={`h-6 w-6 sm:h-8 sm:w-8 text-xs sm:text-sm font-black flex items-center justify-center rounded border transition-all ${
                        highlightClass
                          ? highlightClass
                          : 'bg-white border-slate-200 hover:bg-amber-50 text-slate-800'
                      } print:border-slate-300 print:h-6 print:w-6 print:text-xs print:font-bold`}
                    >
                      {letter}
                    </button>
                  );
                })
              )}
            </div>
          </div>
          <p className="mt-2 text-[11px] text-slate-500 italic print:hidden">
            💡 Sugerencia: Puedes hacer clic en las letras de la sopa o presionar directamente sobre cada pista abajo.
          </p>
        </div>

        {/* Word Clues (Horizontal & Vertical) */}
        <div className="lg:col-span-5 space-y-4 print:space-y-2">
          {/* Horizontal Clues */}
          <div className="rounded-xl border border-slate-300 bg-slate-50/70 p-3 print:bg-white print:border-black print:p-1.5">
            <h3 className="font-black text-xs uppercase tracking-wider text-amber-900 border-b border-amber-200 pb-1 mb-2 flex items-center justify-between print:text-black print:border-black">
              <span>➡ Pistas Horizontales</span>
              <span className="text-[10px] text-slate-500 font-bold">{horizontalWords.length} palabras</span>
            </h3>
            <div className="space-y-1.5">
              {horizontalWords.map((item) => {
                const isFound = foundWords.includes(item.word);

                return (
                  <div
                    key={item.word}
                    onClick={() => !isPrintView && onToggleFoundWord(item.word)}
                    onMouseEnter={() => setHighlightedWord(item.word)}
                    onMouseLeave={() => setHighlightedWord(null)}
                    className={`flex items-start gap-2 p-1.5 rounded-lg border text-xs cursor-pointer transition-all ${
                      isFound
                        ? 'bg-amber-100/90 border-amber-400 text-amber-950 font-bold line-through'
                        : 'bg-white border-slate-200 hover:border-amber-400 text-slate-700'
                    } print:border-transparent print:p-0.5`}
                  >
                    <span className="font-extrabold text-[11px] px-1 rounded bg-amber-200 text-amber-900 shrink-0 print:border print:border-black print:bg-white print:text-black">
                      {isPrintView ? '[  ]' : isFound ? '✓' : '•'}
                    </span>
                    <div className="leading-snug">
                      <strong className="text-slate-900 print:text-black">{item.word}:</strong>{' '}
                      <span className="text-[11px] text-slate-600 print:text-black">{item.clue}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Vertical Clues */}
          <div className="rounded-xl border border-slate-300 bg-slate-50/70 p-3 print:bg-white print:border-black print:p-1.5">
            <h3 className="font-black text-xs uppercase tracking-wider text-emerald-900 border-b border-emerald-200 pb-1 mb-2 flex items-center justify-between print:text-black print:border-black">
              <span>⬇ Pistas Verticales</span>
              <span className="text-[10px] text-slate-500 font-bold">{verticalWords.length} palabras</span>
            </h3>
            <div className="space-y-1.5">
              {verticalWords.map((item) => {
                const isFound = foundWords.includes(item.word);

                return (
                  <div
                    key={item.word}
                    onClick={() => !isPrintView && onToggleFoundWord(item.word)}
                    onMouseEnter={() => setHighlightedWord(item.word)}
                    onMouseLeave={() => setHighlightedWord(null)}
                    className={`flex items-start gap-2 p-1.5 rounded-lg border text-xs cursor-pointer transition-all ${
                      isFound
                        ? 'bg-emerald-100/90 border-emerald-400 text-emerald-950 font-bold line-through'
                        : 'bg-white border-slate-200 hover:border-emerald-400 text-slate-700'
                    } print:border-transparent print:p-0.5`}
                  >
                    <span className="font-extrabold text-[11px] px-1 rounded bg-emerald-200 text-emerald-900 shrink-0 print:border print:border-black print:bg-white print:text-black">
                      {isPrintView ? '[  ]' : isFound ? '✓' : '•'}
                    </span>
                    <div className="leading-snug">
                      <strong className="text-slate-900 print:text-black">{item.word}:</strong>{' '}
                      <span className="text-[11px] text-slate-600 print:text-black">{item.clue}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
