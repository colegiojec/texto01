import React, { useState, useEffect, useRef } from 'react';
import { WorksheetData } from '../types/worksheet';
import { WorksheetIllustration } from './WorksheetIllustrations';
import { Volume2, VolumeX, Pause, Play, Clock, Sparkles, BookOpen, ZoomIn, ZoomOut } from 'lucide-react';

interface Props {
  worksheet: WorksheetData;
  isPrintView?: boolean;
}

export const ReadingSection: React.FC<Props> = ({ worksheet, isPrintView = false }) => {
  const [selectedWord, setSelectedWord] = useState<{ word: string; definition: string } | null>(null);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'extralarge'>('normal');

  // TTS Web Speech API state
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [speechRate, setSpeechRate] = useState<number>(0.95);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState<number>(-1);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }
    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  const handleSpeak = () => {
    if (!synthRef.current) {
      alert('La síntesis de voz no está disponible en este navegador.');
      return;
    }

    if (isPaused) {
      synthRef.current.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    synthRef.current.cancel();

    const fullStory = `${worksheet.reading.title}. ${worksheet.reading.paragraphs.join(' ')}`;
    const utterance = new SpeechSynthesisUtterance(fullStory);
    utterance.lang = 'es-PE';
    utterance.rate = speechRate;
    utterance.pitch = 1.0;

    // Pick a natural Spanish voice if available
    const voices = synthRef.current.getVoices();
    const spanishVoice = voices.find(v => v.lang.startsWith('es-') || v.lang === 'es');
    if (spanishVoice) {
      utterance.voice = spanishVoice;
    }

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
      setCurrentParagraphIndex(0);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentParagraphIndex(-1);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentParagraphIndex(-1);
    };

    utteranceRef.current = utterance;
    synthRef.current.speak(utterance);
  };

  const handlePause = () => {
    if (synthRef.current && isPlaying) {
      synthRef.current.pause();
      setIsPaused(true);
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentParagraphIndex(-1);
    }
  };

  // Helper to highlight key words in paragraphs
  const renderParagraphContent = (text: string) => {
    // Get list of vocabulary words
    const words = worksheet.reading.vocabulary.map(v => v.word.toLowerCase());
    
    // Split into tokens preserving words
    const regex = new RegExp(`\\b(${words.join('|')})\\b`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) => {
      const matched = worksheet.reading.vocabulary.find(
        v => v.word.toLowerCase() === part.toLowerCase()
      );

      if (matched) {
        return (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedWord(matched)}
            className="cursor-pointer font-bold text-amber-950 bg-amber-200/80 px-1 py-0.5 rounded border-b-2 border-amber-600 hover:bg-amber-300 transition-colors mx-0.5 text-left inline-block print:bg-transparent print:underline print:text-black print:p-0"
            title="Haz clic para ver el significado en el glosario"
          >
            {part}
          </button>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  const fontClasses = {
    normal: 'text-sm sm:text-base leading-relaxed',
    large: 'text-base sm:text-lg leading-relaxed',
    extralarge: 'text-lg sm:text-xl leading-relaxed',
  }[fontSize];

  return (
    <section className="mb-8 rounded-xl border-2 border-slate-700 bg-white p-5 sm:p-6 shadow-sm print:p-2 print:border-black print:shadow-none print:mb-4">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between border-b-2 border-slate-800 pb-3 mb-4 print:pb-1 print:mb-2">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-white font-black text-sm print:border print:border-black print:text-black print:bg-white">
            2
          </span>
          <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight uppercase print:text-sm">
            TEXTO DE LECTURA (Hoja Completa de Comprensión)
          </h2>
        </div>

        {/* Audio Narration and Font Size Bar (Hidden in Print) */}
        {!isPrintView && (
          <div className="flex flex-wrap items-center gap-2 mt-2 sm:mt-0">
            {/* Audio narration toolbar */}
            <div className="flex items-center gap-1.5 rounded-lg bg-sky-50 border border-sky-300 px-2.5 py-1 text-xs">
              <span className="font-bold text-sky-900 flex items-center gap-1">
                <Volume2 className="w-3.5 h-3.5 text-sky-700" />
                Voz:
              </span>
              {!isPlaying ? (
                <button
                  type="button"
                  onClick={handleSpeak}
                  className="cursor-pointer inline-flex items-center gap-1 rounded bg-sky-600 px-2 py-0.5 font-bold text-white hover:bg-sky-700 shadow-xs"
                  title="Escuchar narración de la lectura en voz alta"
                >
                  <Play className="w-3 h-3 fill-current" />
                  {isPaused ? 'Reanudar' : 'Escuchar'}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handlePause}
                  className="cursor-pointer inline-flex items-center gap-1 rounded bg-amber-600 px-2 py-0.5 font-bold text-white hover:bg-amber-700 shadow-xs"
                >
                  <Pause className="w-3 h-3 fill-current" />
                  Pausar
                </button>
              )}

              {(isPlaying || isPaused) && (
                <button
                  type="button"
                  onClick={handleStop}
                  className="cursor-pointer rounded bg-slate-200 px-1.5 py-0.5 text-slate-700 hover:bg-slate-300"
                  title="Detener lectura"
                >
                  <VolumeX className="w-3 h-3" />
                </button>
              )}

              <select
                aria-label="Velocidad de reproducción de audio"
                value={speechRate}
                onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                className="bg-white border border-sky-300 text-[11px] rounded px-1 py-0.5 font-medium text-sky-950"
              >
                <option value="0.8">0.8x (Pausado)</option>
                <option value="0.95">1.0x (Normal)</option>
                <option value="1.15">1.2x (Rápido)</option>
              </select>
            </div>

            {/* Font Zoom Controls */}
            <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-0.5 border border-slate-300 text-xs">
              <button
                type="button"
                onClick={() => setFontSize('normal')}
                className={`cursor-pointer px-2 py-0.5 rounded font-bold ${fontSize === 'normal' ? 'bg-white shadow-xs text-slate-900' : 'text-slate-600'}`}
                title="Tamaño normal"
              >
                A
              </button>
              <button
                type="button"
                onClick={() => setFontSize('large')}
                className={`cursor-pointer px-2 py-0.5 rounded font-bold ${fontSize === 'large' ? 'bg-white shadow-xs text-slate-900' : 'text-slate-600'}`}
                title="Texto grande"
              >
                A+
              </button>
              <button
                type="button"
                onClick={() => setFontSize('extralarge')}
                className={`cursor-pointer px-2 py-0.5 rounded font-bold ${fontSize === 'extralarge' ? 'bg-white shadow-xs text-slate-900' : 'text-slate-600'}`}
                title="Texto muy grande"
              >
                A++
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Reading Synopsis and Estimated Time */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 bg-amber-50/70 border border-amber-200 rounded-lg p-2.5 text-xs text-amber-950 print:bg-white print:border-black print:text-black print:mb-2">
        <p className="flex-1 italic font-medium">
          <strong>Antes de leer:</strong> {worksheet.reading.synopsis}
        </p>
        <span className="inline-flex items-center gap-1 rounded bg-amber-200/80 px-2 py-0.5 font-bold text-amber-900 shrink-0 print:border print:border-black print:bg-white print:text-black">
          <Clock className="w-3.5 h-3.5" />
          {worksheet.reading.readingTime}
        </span>
      </div>

      {/* Didactic Illustration Component */}
      <div className="mb-5 print:mb-3">
        <WorksheetIllustration type={worksheet.reading.illustrationType} />
      </div>

      {/* Reading Article Body */}
      <article className="space-y-4 text-justify font-sans text-slate-800 print:text-black print:space-y-2">
        <h3 className="text-xl sm:text-2xl font-black text-center text-slate-900 tracking-tight pb-1 border-b border-dashed border-slate-300 print:text-base print:border-black">
          {worksheet.reading.title}
        </h3>

        {worksheet.reading.paragraphs.map((p, idx) => (
          <p
            key={idx}
            className={`${fontClasses} indent-6 leading-relaxed relative rounded transition-colors ${
              currentParagraphIndex === idx ? 'bg-amber-100 p-1.5 border-l-4 border-amber-500' : ''
            }`}
          >
            {renderParagraphContent(p)}
          </p>
        ))}
      </article>

      {/* Quote / Moral wisdom box */}
      <div className="mt-5 rounded-lg border-l-4 border-red-600 bg-red-50/60 p-3 text-xs italic text-red-950 print:bg-white print:border-black print:text-black print:mt-3">
        <p className="font-semibold">{worksheet.reading.quoteText}</p>
        <p className="mt-1 text-right font-bold not-italic text-red-800 print:text-black">
          — {worksheet.reading.quoteAuthor}
        </p>
      </div>

      {/* Vocabulary / Glosario Pedagógico Section */}
      <div className="mt-5 rounded-xl border border-slate-300 bg-slate-50 p-4 print:bg-white print:border-black print:p-2 print:mt-3">
        <h4 className="flex items-center gap-1.5 font-black text-xs uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1.5 mb-2.5 print:border-black print:text-black">
          <BookOpen className="w-3.5 h-3.5 text-red-600 print:text-black" />
          Glosario de Palabras Clave y Vocabulario (Haz clic en las palabras resaltadas)
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
          {worksheet.reading.vocabulary.map((vocab, index) => (
            <div
              key={index}
              className={`rounded-lg p-2.5 border transition-all ${
                selectedWord?.word === vocab.word
                  ? 'bg-amber-100 border-amber-500 ring-2 ring-amber-400'
                  : 'bg-white border-slate-200 hover:border-amber-300'
              } print:border-slate-400 print:p-1`}
            >
              <span className="font-extrabold text-red-800 block text-xs print:text-black">
                {vocab.word.toUpperCase()}
              </span>
              <p className="text-slate-600 mt-0.5 text-[11px] leading-snug print:text-black">
                {vocab.definition}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
