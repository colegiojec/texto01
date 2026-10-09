/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { WORKSHEETS_DATA } from './data/worksheetsData';
import { StudentAnswers, WorksheetData } from './types/worksheet';
import { WorksheetHeader } from './components/WorksheetHeader';
import { ReadingSection } from './components/ReadingSection';
import { ComprehensionActivities } from './components/ComprehensionActivities';
import { TextIdentificationActivity } from './components/TextIdentificationActivity';
import { SentenceOrderingActivity } from './components/SentenceOrderingActivity';
import { ColumnMatchingActivity } from './components/ColumnMatchingActivity';
import { WordSearchActivity } from './components/WordSearchActivity';
import { FillBlanksActivity } from './components/FillBlanksActivity';
import { GradingScorecard, calculateWorksheetScore } from './components/GradingScorecard';
import { A4PrintSheet } from './components/A4PrintSheet';
import { SaveHtmlModal } from './components/SaveHtmlModal';
import { SavePdfModal } from './components/SavePdfModal';
import { ApkInstallModal } from './components/ApkInstallModal';
import { PWAInstallButton } from './components/PWAInstallButton';
import { OfflineIndicator } from './components/OfflineIndicator';
import { exportWorksheetsToStandaloneHtml } from './utils/exportHtml';
import {
  BookOpen,
  Printer,
  Sparkles,
  Award,
  Layers,
  CheckCircle2,
  FileText,
  FileCode,
  Eye,
  GraduationCap,
  Shield,
  Heart,
  AlertTriangle,
  Flame,
  Volume2,
  RotateCcw,
  Share2,
  Download,
  Smartphone
} from 'lucide-react';

const STORAGE_KEY_PREFIX = 'peru_rural_cuaderno_2sec_';

export default function App() {
  const [selectedThemeId, setSelectedThemeId] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'interactive' | 'print'>('interactive');
  const [showTeacherSolutions, setShowTeacherSolutions] = useState<boolean>(false);
  const [showGradingReport, setShowGradingReport] = useState<boolean>(false);
  const [showSaveHtmlModal, setShowSaveHtmlModal] = useState<boolean>(false);
  const [showApkModal, setShowApkModal] = useState<boolean>(false);
  const [showSavePdfModal, setShowSavePdfModal] = useState<boolean>(false);
  const [printScope, setPrintScope] = useState<'current' | 'all'>('current');
  const [printIncludeAnswers, setPrintIncludeAnswers] = useState<boolean>(true);
  const [printIncludeSolutions, setPrintIncludeSolutions] = useState<boolean>(false);

  // Active worksheet data
  const currentWorksheet: WorksheetData =
    WORKSHEETS_DATA.find((w) => w.id === selectedThemeId) || WORKSHEETS_DATA[0];

  // Default empty student answers
  const defaultAnswers: StudentAnswers = {
    studentName: '',
    schoolName: '',
    community: '',
    date: new Date().toISOString().split('T')[0],
    section: 'A',
    teacherName: '',
    literal: {},
    inferential: {},
    textIdent: {},
    critical: {},
    sentenceOrder: currentWorksheet.sentenceOrdering.map((s) => s.id),
    columnMatches: {},
    foundWords: [],
    fillBlanks: {},
  };

  // State of student answers for the current worksheet
  const [studentAnswers, setStudentAnswers] = useState<StudentAnswers>(defaultAnswers);

  // Load answers from localStorage on theme change
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}theme_${selectedThemeId}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        setStudentAnswers({
          ...defaultAnswers,
          ...parsed,
          sentenceOrder:
            parsed.sentenceOrder && parsed.sentenceOrder.length === currentWorksheet.sentenceOrdering.length
              ? parsed.sentenceOrder
              : currentWorksheet.sentenceOrdering.map((s) => s.id),
        });
      } else {
        setStudentAnswers({
          ...defaultAnswers,
          sentenceOrder: currentWorksheet.sentenceOrdering.map((s) => s.id),
        });
      }
    } catch {
      setStudentAnswers(defaultAnswers);
    }
    setShowGradingReport(false);
  }, [selectedThemeId]);

  // Save answers to localStorage
  const saveAnswers = (updated: StudentAnswers) => {
    setStudentAnswers(updated);
    try {
      localStorage.setItem(`${STORAGE_KEY_PREFIX}theme_${selectedThemeId}`, JSON.stringify(updated));
    } catch (e) {
      console.error('Error saving answers to localStorage', e);
    }
  };

  // Student header fields update
  const handleUpdateStudentData = (fields: Partial<StudentAnswers>) => {
    saveAnswers({ ...studentAnswers, ...fields });
  };

  // Multiple choice selection
  const handleSelectAnswer = (
    type: 'literal' | 'inferential',
    questionId: string,
    optionIndex: number
  ) => {
    if (type === 'literal') {
      saveAnswers({
        ...studentAnswers,
        literal: { ...studentAnswers.literal, [questionId]: optionIndex },
      });
    } else {
      saveAnswers({
        ...studentAnswers,
        inferential: { ...studentAnswers.inferential, [questionId]: optionIndex },
      });
    }
  };

  // Text identification selection
  const handleSelectTextIdent = (questionId: string, optionIndex: number) => {
    saveAnswers({
      ...studentAnswers,
      textIdent: { ...studentAnswers.textIdent, [questionId]: optionIndex },
    });
  };

  // Critical open questions update
  const handleUpdateCritical = (questionId: string, text: string) => {
    saveAnswers({
      ...studentAnswers,
      critical: { ...studentAnswers.critical, [questionId]: text },
    });
  };

  // Sentence reordering
  const handleReorderSentences = (newOrderedIds: string[]) => {
    saveAnswers({
      ...studentAnswers,
      sentenceOrder: newOrderedIds,
    });
  };

  // Column matching
  const handleMatchColumns = (conceptId: string, matchId: string) => {
    saveAnswers({
      ...studentAnswers,
      columnMatches: { ...studentAnswers.columnMatches, [conceptId]: matchId },
    });
  };

  const handleClearColumnMatches = () => {
    saveAnswers({
      ...studentAnswers,
      columnMatches: {},
    });
  };

  // Word search toggle found word
  const handleToggleFoundWord = (word: string) => {
    const current = [...studentAnswers.foundWords];
    const index = current.indexOf(word);
    if (index >= 0) {
      current.splice(index, 1);
    } else {
      current.push(word);
    }
    saveAnswers({
      ...studentAnswers,
      foundWords: current,
    });
  };

  const handleClearFoundWords = () => {
    saveAnswers({
      ...studentAnswers,
      foundWords: [],
    });
  };

  // Fill in blanks
  const handleSelectBlankWord = (itemId: string, word: string) => {
    saveAnswers({
      ...studentAnswers,
      fillBlanks: { ...studentAnswers.fillBlanks, [itemId]: word },
    });
  };

  const handleClearBlankAnswers = () => {
    saveAnswers({
      ...studentAnswers,
      fillBlanks: {},
    });
  };

  // Reset current worksheet answers
  const handleResetAll = () => {
    if (window.confirm('¿Deseas reiniciar todas tus respuestas de esta ficha?')) {
      const resetState: StudentAnswers = {
        ...defaultAnswers,
        studentName: studentAnswers.studentName,
        schoolName: studentAnswers.schoolName,
        community: studentAnswers.community,
        teacherName: studentAnswers.teacherName,
        sentenceOrder: currentWorksheet.sentenceOrdering.map((s) => s.id),
      };
      saveAnswers(resetState);
      setShowGradingReport(false);
      setShowTeacherSolutions(false);
    }
  };

  // Export standalone HTML
  const handleExportCurrentHtml = () => {
    exportWorksheetsToStandaloneHtml([currentWorksheet], studentAnswers, {
      includeAnswers: true,
      title: `Ficha N.° ${currentWorksheet.themeNumber}: ${currentWorksheet.title}`,
    });
  };

  const handleExportAllHtml = () => {
    exportWorksheetsToStandaloneHtml(WORKSHEETS_DATA, studentAnswers, {
      includeAnswers: true,
      title: 'Cuaderno Pedagógico de Comprensión Lectora (4 Temas) - 2.° Secundaria Rural',
    });
  };

  // PDF Print Execution Handler with formatted filename
  const handleExecutePdfPrint = (options: {
    scope: 'current' | 'all';
    includeAnswers: boolean;
    includeSolutions: boolean;
  }) => {
    setPrintScope(options.scope);
    setPrintIncludeAnswers(options.includeAnswers);
    setPrintIncludeSolutions(options.includeSolutions);
    setViewMode('print');

    // Filename for browser's default Save As PDF dialog
    const themeTag =
      options.scope === 'current'
        ? `Ficha_${currentWorksheet.themeNumber}_${currentWorksheet.shortTag.replace(/\s+/g, '_')}`
        : 'Cuaderno_Comprension_Lectora_4_Temas_2do_Secundaria_Rural';
    const modeSuffix = !options.includeAnswers
      ? '_En_Blanco_Fotocopias'
      : options.includeSolutions
      ? '_Con_Solucionario'
      : '_Resuelto';
    const targetFileName = `${themeTag}${modeSuffix}.pdf`;

    const originalTitle = document.title;
    document.title = targetFileName;

    // Small delay to allow React to render the chosen scope before printing
    setTimeout(() => {
      window.print();
      setTimeout(() => {
        document.title = originalTitle;
      }, 2000);
    }, 300);
  };

  // Progress calculation
  const totalQuestionsCount =
    currentWorksheet.literalQuestions.length +
    currentWorksheet.inferentialQuestions.length +
    currentWorksheet.textIdentification.length +
    currentWorksheet.fillInTheBlanks.items.length +
    currentWorksheet.wordSearch.words.length;

  const answeredQuestionsCount =
    Object.keys(studentAnswers.literal).length +
    Object.keys(studentAnswers.inferential).length +
    Object.keys(studentAnswers.textIdent).length +
    Object.keys(studentAnswers.fillBlanks).length +
    studentAnswers.foundWords.length;

  const progressPercent = Math.min(100, Math.round((answeredQuestionsCount / totalQuestionsCount) * 100));

  const calculatedScore = calculateWorksheetScore(currentWorksheet, studentAnswers);

  const themeIcons = [
    <Shield className="w-4 h-4 text-sky-600" key="1" />,
    <Heart className="w-4 h-4 text-emerald-600" key="2" />,
    <AlertTriangle className="w-4 h-4 text-amber-600" key="3" />,
    <Flame className="w-4 h-4 text-rose-600" key="4" />,
  ];

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 pb-16 print:bg-white print:p-0 print:pb-0">
      {/* Top Application Bar (Hidden in Print) */}
      <header className="sticky top-0 z-30 border-b border-slate-700 bg-slate-900 text-white shadow-md print:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5">
          {/* Logo & Peru Identity */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 font-black text-sm text-white shadow-xs">
              PE
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm font-black tracking-tight sm:text-base">
                  Cuaderno de Comprensión Lectora • Secundaria Rural
                </h1>
                <span className="rounded bg-amber-400 px-1.5 py-0.5 text-[10px] font-black text-slate-950 uppercase">
                  2.° Grado
                </span>
              </div>
              <p className="text-[11px] text-slate-300">
                Área de Comunicación • Fichas Didácticas A4 contextualizadas al Perú
              </p>
            </div>
          </div>

          {/* Mode Switcher & Quick Actions */}
          <div className="flex items-center gap-2">
            <div className="flex rounded-lg bg-slate-800 p-0.5 border border-slate-700">
              <button
                type="button"
                onClick={() => setViewMode('interactive')}
                className={`cursor-pointer flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold transition-all ${
                  viewMode === 'interactive'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                Interactivo
              </button>
              <button
                type="button"
                onClick={() => setViewMode('print')}
                className={`cursor-pointer flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold transition-all ${
                  viewMode === 'print'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Printer className="w-3.5 h-3.5" />
                Formato A4 PDF
              </button>
            </div>

            <PWAInstallButton onOpenApkModal={() => setShowApkModal(true)} />

            <button
              type="button"
              onClick={() => setShowSaveHtmlModal(true)}
              className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-emerald-600 via-amber-600 to-red-600 px-3 py-1.5 text-xs font-black text-white hover:brightness-110 shadow-xs transition-all active:scale-95"
              title="Guardar ficha o cuaderno en formato HTML interactivo para usar sin conexión"
            >
              <Download className="w-3.5 h-3.5" />
              Guardar en HTML Interactivo
            </button>

            <button
              type="button"
              onClick={() => setShowSavePdfModal(true)}
              className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg bg-red-600 px-3 py-1.5 text-xs font-black text-white hover:bg-red-700 shadow-xs transition-all active:scale-95"
              title="Guardar ficha o cuaderno en formato PDF para imprimir o enviar"
            >
              <Printer className="w-3.5 h-3.5" />
              Guardar en PDF
            </button>
          </div>
        </div>

        {/* 4 Core Themes Navigation Tabs */}
        <div className="border-t border-slate-800 bg-slate-950/80 px-4">
          <div className="mx-auto flex max-w-6xl overflow-x-auto py-1.5 no-scrollbar gap-2">
            {WORKSHEETS_DATA.map((w, idx) => {
              const isActive = w.id === selectedThemeId;

              return (
                <button
                  key={w.id}
                  type="button"
                  onClick={() => setSelectedThemeId(w.id)}
                  className={`cursor-pointer flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all border ${
                    isActive
                      ? 'bg-slate-800 text-white border-red-500 shadow-xs ring-1 ring-red-500'
                      : 'bg-transparent text-slate-400 border-transparent hover:bg-slate-900 hover:text-slate-200'
                  }`}
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-[10px] font-black border border-slate-700">
                    {w.themeNumber}
                  </span>
                  <span>{w.shortTag}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-5xl px-3 sm:px-4 py-6 print:p-0 print:max-w-none">
        {/* Floating / Sticky Actions bar in Interactive Mode */}
        {viewMode === 'interactive' && (
          <div className="mb-6 rounded-xl border border-slate-300 bg-white p-3 shadow-sm flex flex-wrap items-center justify-between gap-3 print:hidden">
            {/* Progress indicator */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-slate-500">Progreso de la ficha:</span>
                <span className="text-xs font-black text-slate-800">
                  {progressPercent}% completado
                </span>
              </div>
              <div className="w-28 sm:w-40 h-2.5 rounded-full bg-slate-200 overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-amber-500 to-emerald-600 transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>

            {/* Evaluation and Teacher solution toggles */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setShowGradingReport(!showGradingReport)}
                className={`cursor-pointer inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-black transition-all shadow-xs ${
                  showGradingReport
                    ? 'bg-emerald-700 text-white'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
              >
                <Award className="w-4 h-4" />
                {showGradingReport ? 'Ocultar Calificación' : 'Calificar / Evaluar Ficha'}
              </button>

              <button
                type="button"
                onClick={() => setShowTeacherSolutions(!showTeacherSolutions)}
                className={`cursor-pointer inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-bold transition-all ${
                  showTeacherSolutions
                    ? 'bg-indigo-700 text-white border-indigo-800'
                    : 'bg-white text-indigo-900 border-indigo-400 hover:bg-indigo-50'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                {showTeacherSolutions ? 'Modo Estudiante' : 'Modo Docente (Claves)'}
              </button>

              <button
                type="button"
                onClick={() => setShowApkModal(true)}
                className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg bg-teal-700 px-3.5 py-2 text-xs font-black text-white hover:bg-teal-800 shadow-xs transition-transform active:scale-95"
                title="Instalar como aplicación nativa APK en celulares y tablets Android"
              >
                <Smartphone className="w-3.5 h-3.5 text-teal-200" />
                Instalar APK
              </button>

              <button
                type="button"
                onClick={() => setShowSaveHtmlModal(true)}
                className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-emerald-600 via-amber-600 to-red-600 px-3.5 py-2 text-xs font-black text-white hover:brightness-110 shadow-xs transition-transform active:scale-95"
                title="Guardar ficha o cuaderno en formato HTML interactivo autónomo"
              >
                <Download className="w-3.5 h-3.5" />
                Guardar en HTML Interactivo
              </button>

              <button
                type="button"
                onClick={handleExportCurrentHtml}
                className="cursor-pointer hidden md:inline-flex items-center gap-1.5 rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-xs font-bold text-amber-900 hover:bg-amber-100 shadow-xs"
                title="Descarga directa de esta ficha resuelta (.html)"
              >
                <FileCode className="w-3.5 h-3.5 text-amber-700" />
                Descarga Rápida
              </button>

              <button
                type="button"
                onClick={() => setShowSavePdfModal(true)}
                className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg bg-red-700 px-3.5 py-2 text-xs font-black text-white hover:bg-red-800 shadow-xs transition-transform active:scale-95"
                title="Guardar ficha o cuaderno en formato PDF de alta resolución"
              >
                <Printer className="w-3.5 h-3.5" />
                Guardar en PDF
              </button>

              <button
                type="button"
                onClick={() => setViewMode('print')}
                className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-3 py-2 text-xs font-bold text-white hover:bg-slate-700"
              >
                <Printer className="w-3.5 h-3.5" />
                Vista A4
              </button>

              <button
                type="button"
                onClick={handleResetAll}
                className="cursor-pointer p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-slate-200"
                title="Reiniciar respuestas"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Display Scorecard Banner if requested */}
        {showGradingReport && (
          <div className="mb-6 animate-fadeIn">
            <GradingScorecard
              worksheet={currentWorksheet}
              studentData={studentAnswers}
              onResetAll={handleResetAll}
              onPrintA4={() => window.print()}
              onToggleSolutions={() => setShowTeacherSolutions(!showTeacherSolutions)}
              showSolutions={showTeacherSolutions}
              onOpenSaveHtmlModal={() => setShowSaveHtmlModal(true)}
              onOpenApkModal={() => setShowApkModal(true)}
            />
          </div>
        )}

        {/* RENDER MODE: Interactive OR A4 Printable */}
        {viewMode === 'interactive' ? (
          <div className="space-y-6">
            {/* 1. ENCABEZADO */}
            <WorksheetHeader
              worksheet={currentWorksheet}
              studentData={studentAnswers}
              onUpdateStudentData={handleUpdateStudentData}
              score={showGradingReport ? calculatedScore : undefined}
            />

            {/* 2. TEXTO DE LECTURA */}
            <ReadingSection worksheet={currentWorksheet} />

            {/* 3. ACTIVIDADES DE COMPRENSIÓN LECTORA (Literales, Inferenciales, Críticas) */}
            <ComprehensionActivities
              literalQuestions={currentWorksheet.literalQuestions}
              inferentialQuestions={currentWorksheet.inferentialQuestions}
              criticalQuestions={currentWorksheet.criticalQuestions}
              literalAnswers={studentAnswers.literal}
              inferentialAnswers={studentAnswers.inferential}
              criticalAnswers={studentAnswers.critical}
              onSelectAnswer={handleSelectAnswer}
              onUpdateCriticalAnswer={handleUpdateCritical}
              showSolutions={showTeacherSolutions}
            />

            {/* 4. IDENTIFICACIÓN DEL TEXTO */}
            <TextIdentificationActivity
              questions={currentWorksheet.textIdentification}
              answers={studentAnswers.textIdent}
              onSelectAnswer={handleSelectTextIdent}
              showSolutions={showTeacherSolutions}
            />

            {/* 5. ORDENAMIENTO DE ORACIONES */}
            <SentenceOrderingActivity
              sentences={currentWorksheet.sentenceOrdering}
              orderedIds={studentAnswers.sentenceOrder}
              onReorder={handleReorderSentences}
              showSolutions={showTeacherSolutions}
            />

            {/* 6. RELACIONAR COLUMNAS */}
            <ColumnMatchingActivity
              pairs={currentWorksheet.columnMatching}
              matches={studentAnswers.columnMatches}
              onMatch={handleMatchColumns}
              onClearMatches={handleClearColumnMatches}
              showSolutions={showTeacherSolutions}
            />

            {/* 7. SOPA DE LETRAS */}
            <WordSearchActivity
              grid={currentWorksheet.wordSearch.grid}
              words={currentWorksheet.wordSearch.words}
              foundWords={studentAnswers.foundWords}
              onToggleFoundWord={handleToggleFoundWord}
              onClearFoundWords={handleClearFoundWords}
              showSolutions={showTeacherSolutions}
            />

            {/* 8. COMPLETAR ESPACIOS Y CONECTORES */}
            <FillBlanksActivity
              wordBank={currentWorksheet.fillInTheBlanks.wordBank}
              items={currentWorksheet.fillInTheBlanks.items}
              answers={studentAnswers.fillBlanks}
              onSelectWord={handleSelectBlankWord}
              onClearAnswers={handleClearBlankAnswers}
              showSolutions={showTeacherSolutions}
            />

            {/* Bottom Evaluation Callout */}
            <div className="rounded-2xl border-2 border-emerald-400 bg-emerald-50 p-6 text-center shadow-xs">
              <h3 className="text-lg font-black text-emerald-950">
                ¿Has completado todas las actividades de esta ficha?
              </h3>
              <p className="mt-1 text-xs text-emerald-800 font-medium">
                Presiona el botón para verificar tu puntaje vigesimal (0-20), ver tu nivel de logro CNEB y descargar o imprimir tu ficha resuelta.
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowGradingReport(true)}
                  className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-black text-white hover:bg-emerald-700 shadow-md"
                >
                  <Award className="w-4 h-4" />
                  Ver Calificación y Rúbrica
                </button>

                <button
                  type="button"
                  onClick={() => setShowApkModal(true)}
                  className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-teal-700 px-5 py-2.5 text-xs font-black text-white hover:bg-teal-800 shadow-md transition-all active:scale-95"
                  title="Instalar como aplicación nativa APK en celulares y tablets Android"
                >
                  <Smartphone className="w-4 h-4 text-teal-200" />
                  Instalar en Celular (APK)
                </button>

                <button
                  type="button"
                  onClick={() => setShowSaveHtmlModal(true)}
                  className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 via-amber-600 to-red-600 px-5 py-2.5 text-xs font-black text-white hover:brightness-110 shadow-md transition-all active:scale-95"
                  title="Guardar ficha o cuaderno en formato HTML interactivo autónomo"
                >
                  <Download className="w-4 h-4" />
                  Guardar en HTML Interactivo (.html)
                </button>

                <button
                  type="button"
                  onClick={handleExportAllHtml}
                  className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-amber-800 px-5 py-2.5 text-xs font-black text-white hover:bg-amber-900 shadow-md"
                  title="Descargar las 4 fichas juntas en un solo archivo HTML"
                >
                  <Download className="w-4 h-4" />
                  Cuaderno Completo (.html)
                </button>

                <button
                  type="button"
                  onClick={() => setShowSavePdfModal(true)}
                  className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-2.5 text-xs font-black text-white hover:bg-red-800 shadow-md transition-all active:scale-95"
                  title="Guardar como archivo PDF o imprimir en tamaño A4"
                >
                  <Printer className="w-4 h-4" />
                  Guardar en PDF (A4)
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* A4 PRINT SHEET VIEW */
          printScope === 'all' ? (
            <div className="space-y-12 print:space-y-0">
              {WORKSHEETS_DATA.map((w) => (
                <div key={w.id} className="print:break-after-page mb-10 print:mb-0">
                  <A4PrintSheet
                    worksheet={w}
                    studentData={printIncludeAnswers ? studentAnswers : defaultAnswers}
                    onUpdateStudentData={handleUpdateStudentData}
                    onSelectAnswer={handleSelectAnswer}
                    onUpdateCriticalAnswer={handleUpdateCritical}
                    onSelectTextIdentAnswer={handleSelectTextIdent}
                    onReorderSentences={handleReorderSentences}
                    onMatchColumns={handleMatchColumns}
                    onClearColumnMatches={handleClearColumnMatches}
                    onToggleFoundWord={handleToggleFoundWord}
                    onClearFoundWords={handleClearFoundWords}
                    onSelectBlankWord={handleSelectBlankWord}
                    onClearBlankAnswers={handleClearBlankAnswers}
                    onOpenSaveHtmlModal={() => setShowSaveHtmlModal(true)}
                    onOpenApkModal={() => setShowApkModal(true)}
                    onOpenSavePdfModal={() => setShowSavePdfModal(true)}
                    showTeacherSolutions={printIncludeSolutions}
                  />
                </div>
              ))}
            </div>
          ) : (
            <A4PrintSheet
              worksheet={currentWorksheet}
              studentData={printIncludeAnswers ? studentAnswers : defaultAnswers}
              onUpdateStudentData={handleUpdateStudentData}
              onSelectAnswer={handleSelectAnswer}
              onUpdateCriticalAnswer={handleUpdateCritical}
              onSelectTextIdentAnswer={handleSelectTextIdent}
              onReorderSentences={handleReorderSentences}
              onMatchColumns={handleMatchColumns}
              onClearColumnMatches={handleClearColumnMatches}
              onToggleFoundWord={handleToggleFoundWord}
              onClearFoundWords={handleClearFoundWords}
              onSelectBlankWord={handleSelectBlankWord}
              onClearBlankAnswers={handleClearBlankAnswers}
              onOpenSaveHtmlModal={() => setShowSaveHtmlModal(true)}
              onOpenApkModal={() => setShowApkModal(true)}
              onOpenSavePdfModal={() => setShowSavePdfModal(true)}
              showTeacherSolutions={printIncludeSolutions}
            />
          )
        )}
      </main>

      {/* Modal for saving / exporting to standalone HTML */}
      <SaveHtmlModal
        isOpen={showSaveHtmlModal}
        onClose={() => setShowSaveHtmlModal(false)}
        currentWorksheet={currentWorksheet}
        allWorksheets={WORKSHEETS_DATA}
        studentAnswers={studentAnswers}
      />

      {/* Modal for saving / exporting to PDF */}
      <SavePdfModal
        isOpen={showSavePdfModal}
        onClose={() => setShowSavePdfModal(false)}
        currentWorksheet={currentWorksheet}
        allWorksheets={WORKSHEETS_DATA}
        studentAnswers={studentAnswers}
        onExecutePdfPrint={handleExecutePdfPrint}
      />

      {/* Modal for Android APK Installation & Distribution */}
      <ApkInstallModal
        isOpen={showApkModal}
        onClose={() => setShowApkModal(false)}
        onDownloadInteractiveHtml={handleExportCurrentHtml}
      />

      {/* Offline connectivity status banner */}
      <OfflineIndicator />

      {/* Footer Info (Hidden in Print) */}
      <footer className="mt-12 border-t border-slate-300 bg-white py-6 text-center text-xs text-slate-500 print:hidden">
        <div className="mx-auto max-w-5xl px-4">
          <p className="font-bold text-slate-700">
            Cuaderno de Comprensión Lectora para el Ámbito Rural • 2.° Grado de Educación Secundaria
          </p>
          <p className="text-[11px] text-slate-500 mt-1">
            Diseñado según las competencias del Currículo Nacional de la Educación Básica (CNEB) - Ministerio de Educación del Perú (MINEDU).
          </p>
          <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-slate-400">
            <span>Tema 1: Riesgos con la tecnología</span>
            <span>•</span>
            <span>Tema 2: La Autoestima</span>
            <span>•</span>
            <span>Tema 3: La Delincuencia</span>
            <span>•</span>
            <span>Tema 4: Alcohol y Drogas</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
