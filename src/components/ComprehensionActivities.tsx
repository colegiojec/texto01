import React from 'react';
import { MultipleChoiceQuestion, CriticalQuestion } from '../types/worksheet';
import { CheckCircle2, XCircle, HelpCircle, Lightbulb, MessageSquareQuote, CheckSquare, Sparkles } from 'lucide-react';

interface Props {
  literalQuestions: MultipleChoiceQuestion[];
  inferentialQuestions: MultipleChoiceQuestion[];
  criticalQuestions: CriticalQuestion[];
  literalAnswers: Record<string, number>;
  inferentialAnswers: Record<string, number>;
  criticalAnswers: Record<string, string>;
  onSelectAnswer: (type: 'literal' | 'inferential', questionId: string, optionIndex: number) => void;
  onUpdateCriticalAnswer: (questionId: string, answer: string) => void;
  showSolutions?: boolean;
  isPrintView?: boolean;
}

export const ComprehensionActivities: React.FC<Props> = ({
  literalQuestions,
  inferentialQuestions,
  criticalQuestions,
  literalAnswers,
  inferentialAnswers,
  criticalAnswers,
  onSelectAnswer,
  onUpdateCriticalAnswer,
  showSolutions = false,
  isPrintView = false,
}) => {
  const letters = ['a', 'b', 'c', 'd'];

  return (
    <section className="mb-8 rounded-xl border-2 border-slate-700 bg-white p-5 sm:p-6 shadow-sm print:p-2 print:border-black print:mb-4">
      {/* Section Header */}
      <div className="flex items-center gap-2 border-b-2 border-slate-800 pb-3 mb-5 print:pb-1 print:mb-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-white font-black text-sm print:border print:border-black print:text-black print:bg-white">
          3
        </span>
        <div>
          <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight uppercase print:text-sm">
            ACTIVIDADES DE COMPRENSIÓN LECTORA (NIVEL INTERMEDIO Y AVANZADO)
          </h2>
          <p className="text-xs text-slate-500 font-medium print:text-black">
            Lee con atención cada enunciado y marca con una «X» o selecciona la alternativa correcta.
          </p>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* A. PREGUNTAS LITERALES (Mínimo 5 preguntas) */}
      {/* ========================================================================= */}
      <div className="mb-8 print:mb-4">
        <div className="flex items-center justify-between rounded-lg bg-emerald-50 border border-emerald-300 p-2.5 mb-4 print:bg-slate-100 print:border-black print:p-1 print:mb-2">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-xs px-2 py-0.5 rounded bg-emerald-600 text-white print:bg-black print:text-white">
              Nivel A
            </span>
            <h3 className="font-black text-sm text-emerald-950 uppercase print:text-black">
              PREGUNTAS LITERALES (Información explícita en el texto)
            </h3>
          </div>
          <span className="text-[11px] font-bold text-emerald-800 print:text-black">5 preguntas</span>
        </div>

        <div className="space-y-5 print:space-y-3">
          {literalQuestions.map((q, qIndex) => {
            const selectedOpt = literalAnswers[q.id];
            const isAnswered = selectedOpt !== undefined;
            const isCorrect = isAnswered && selectedOpt === q.correctIndex;

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
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-white text-xs font-bold shrink-0 print:border print:border-black print:bg-white print:text-black">
                    {qIndex + 1}
                  </span>
                  <p className="font-bold text-sm text-slate-900 leading-snug print:text-xs">
                    {q.question}
                  </p>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-8 print:pl-4 print:gap-1">
                  {q.options.map((opt, optIndex) => {
                    const isCurrentSelected = selectedOpt === optIndex;
                    const isRightOption = optIndex === q.correctIndex;

                    return (
                      <label
                        key={optIndex}
                        onClick={() => !isPrintView && onSelectAnswer('literal', q.id, optIndex)}
                        className={`flex items-start gap-2.5 p-2 rounded-lg text-xs cursor-pointer border transition-all ${
                          isPrintView
                            ? 'border-transparent'
                            : isCurrentSelected
                            ? 'bg-amber-100/70 border-amber-500 font-semibold text-amber-950 ring-1 ring-amber-400'
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
                        }`}
                      >
                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-black shrink-0 border ${
                            isCurrentSelected
                              ? 'bg-amber-600 text-white border-amber-600'
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

                {/* Teacher Solution & Rationale */}
                {showSolutions && (
                  <div className="mt-2.5 pl-8 text-xs rounded bg-slate-50 p-2 border border-slate-200 text-slate-700 flex items-start gap-1.5 print:hidden">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-emerald-700">Respuesta correcta: ({letters[q.correctIndex].toUpperCase()})</strong> — {q.explanation}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* B. PREGUNTAS INFERENCIALES (Mínimo 5 preguntas) */}
      {/* ========================================================================= */}
      <div className="mb-8 print:mb-4">
        <div className="flex items-center justify-between rounded-lg bg-sky-50 border border-sky-300 p-2.5 mb-4 print:bg-slate-100 print:border-black print:p-1 print:mb-2">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-xs px-2 py-0.5 rounded bg-sky-600 text-white print:bg-black print:text-white">
              Nivel B
            </span>
            <h3 className="font-black text-sm text-sky-950 uppercase print:text-black">
              PREGUNTAS INFERENCIALES (Deducción de información implícita)
            </h3>
          </div>
          <span className="text-[11px] font-bold text-sky-800 print:text-black">5 preguntas</span>
        </div>

        <div className="space-y-5 print:space-y-3">
          {inferentialQuestions.map((q, qIndex) => {
            const selectedOpt = inferentialAnswers[q.id];
            const isAnswered = selectedOpt !== undefined;
            const isCorrect = isAnswered && selectedOpt === q.correctIndex;

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
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-800 text-white text-xs font-bold shrink-0 print:border print:border-black print:bg-white print:text-black">
                    {qIndex + 1}
                  </span>
                  <p className="font-bold text-sm text-slate-900 leading-snug print:text-xs">
                    {q.question}
                  </p>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-8 print:pl-4 print:gap-1">
                  {q.options.map((opt, optIndex) => {
                    const isCurrentSelected = selectedOpt === optIndex;

                    return (
                      <label
                        key={optIndex}
                        onClick={() => !isPrintView && onSelectAnswer('inferential', q.id, optIndex)}
                        className={`flex items-start gap-2.5 p-2 rounded-lg text-xs cursor-pointer border transition-all ${
                          isPrintView
                            ? 'border-transparent'
                            : isCurrentSelected
                            ? 'bg-sky-100/80 border-sky-500 font-semibold text-sky-950 ring-1 ring-sky-400'
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
                        }`}
                      >
                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-black shrink-0 border ${
                            isCurrentSelected
                              ? 'bg-sky-600 text-white border-sky-600'
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

                {/* Solution */}
                {showSolutions && (
                  <div className="mt-2.5 pl-8 text-xs rounded bg-slate-50 p-2 border border-slate-200 text-slate-700 flex items-start gap-1.5 print:hidden">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-sky-700">Deducción correcta: ({letters[q.correctIndex].toUpperCase()})</strong> — {q.explanation}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* C. PREGUNTAS CRÍTICAS O CRITERIALES (Mínimo 4 preguntas) */}
      {/* ========================================================================= */}
      <div>
        <div className="flex items-center justify-between rounded-lg bg-amber-50 border border-amber-300 p-2.5 mb-4 print:bg-slate-100 print:border-black print:p-1 print:mb-2">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-xs px-2 py-0.5 rounded bg-amber-600 text-white print:bg-black print:text-white">
              Nivel C
            </span>
            <h3 className="font-black text-sm text-amber-950 uppercase print:text-black">
              PREGUNTAS CRÍTICAS O CRITERIALES (Opinión, reflexión y vida comunitaria)
            </h3>
          </div>
          <span className="text-[11px] font-bold text-amber-800 print:text-black">4 preguntas</span>
        </div>

        <div className="space-y-6 print:space-y-4">
          {criticalQuestions.map((q, qIndex) => (
            <div
              key={q.id}
              className="rounded-xl border border-slate-300 bg-white p-4 shadow-xs print:border-black print:p-2"
            >
              <div className="flex items-start gap-2 mb-2 print:mb-1">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-800 text-white text-xs font-bold shrink-0 print:border print:border-black print:bg-white print:text-black">
                  {qIndex + 1}
                </span>
                <div>
                  <h4 className="font-black text-sm text-slate-900 leading-snug print:text-xs">
                    {q.question}
                  </h4>
                  <p className="text-xs text-amber-900 italic mt-0.5 print:text-black">
                    <strong>Pista para reflexionar:</strong> {q.promptHint}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5 print:text-black">
                    <strong>Vínculo comunal:</strong> {q.communityContext}
                  </p>
                </div>
              </div>

              {/* Student text area or Printable lined notebook space */}
              <div className="mt-3 pl-8 print:pl-2">
                {isPrintView ? (
                  <div className="space-y-3 pt-1">
                    <div className="border-b border-dashed border-slate-400 h-6"></div>
                    <div className="border-b border-dashed border-slate-400 h-6"></div>
                    <div className="border-b border-dashed border-slate-400 h-6"></div>
                  </div>
                ) : (
                  <textarea
                    rows={3}
                    value={criticalAnswers[q.id] || ''}
                    onChange={(e) => onUpdateCriticalAnswer(q.id, e.target.value)}
                    placeholder="Escribe aquí tu opinión reflexiva fundamentando tu respuesta..."
                    className="w-full rounded-lg border border-slate-300 p-2.5 text-xs text-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-400 focus:outline-none bg-slate-50/50"
                  />
                )}
              </div>

              {/* Evaluation rubric criteria */}
              <div className="mt-2.5 pl-8 text-[11px] text-slate-500 flex items-center justify-between print:text-black print:pl-2">
                <span>
                  <strong>Criterio CNEB:</strong> {q.rubricCriteria}
                </span>
              </div>

              {/* Teacher suggested exemplar answer */}
              {showSolutions && (
                <div className="mt-2 pl-8 text-xs rounded bg-amber-50/80 p-2 border border-amber-200 text-amber-950 flex items-start gap-1.5 print:hidden">
                  <MessageSquareQuote className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Orientación docente (Respuesta modelo esperada):</strong> {q.suggestedAnswer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
