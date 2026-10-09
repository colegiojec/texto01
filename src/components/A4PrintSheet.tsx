import React from 'react';
import { WorksheetData, StudentAnswers } from '../types/worksheet';
import { WorksheetHeader } from './WorksheetHeader';
import { ReadingSection } from './ReadingSection';
import { ComprehensionActivities } from './ComprehensionActivities';
import { TextIdentificationActivity } from './TextIdentificationActivity';
import { SentenceOrderingActivity } from './SentenceOrderingActivity';
import { ColumnMatchingActivity } from './ColumnMatchingActivity';
import { WordSearchActivity } from './WordSearchActivity';
import { FillBlanksActivity } from './FillBlanksActivity';
import { Printer, Download, CheckCircle, FileText, Code2, Smartphone } from 'lucide-react';
import { exportWorksheetsToStandaloneHtml } from '../utils/exportHtml';

interface Props {
  worksheet: WorksheetData;
  studentData: StudentAnswers;
  onUpdateStudentData: (fields: Partial<StudentAnswers>) => void;
  onSelectAnswer: (type: 'literal' | 'inferential', questionId: string, optionIndex: number) => void;
  onUpdateCriticalAnswer: (questionId: string, answer: string) => void;
  onSelectTextIdentAnswer: (questionId: string, optionIndex: number) => void;
  onReorderSentences: (newOrderedIds: string[]) => void;
  onMatchColumns: (conceptId: string, matchId: string) => void;
  onClearColumnMatches: () => void;
  onToggleFoundWord: (word: string) => void;
  onClearFoundWords: () => void;
  onSelectBlankWord: (itemId: string, word: string) => void;
  onClearBlankAnswers: () => void;
  onOpenSaveHtmlModal?: () => void;
  onOpenApkModal?: () => void;
  onOpenSavePdfModal?: () => void;
  showTeacherSolutions?: boolean;
}

export const A4PrintSheet: React.FC<Props> = ({
  worksheet,
  studentData,
  onUpdateStudentData,
  onSelectAnswer,
  onUpdateCriticalAnswer,
  onSelectTextIdentAnswer,
  onReorderSentences,
  onMatchColumns,
  onClearColumnMatches,
  onToggleFoundWord,
  onClearFoundWords,
  onSelectBlankWord,
  onClearBlankAnswers,
  onOpenSaveHtmlModal,
  onOpenApkModal,
  onOpenSavePdfModal,
  showTeacherSolutions = false,
}) => {
  const handlePrint = () => {
    if (onOpenSavePdfModal) {
      onOpenSavePdfModal();
    } else {
      window.print();
    }
  };

  const handleExportHtml = () => {
    if (onOpenSaveHtmlModal) {
      onOpenSaveHtmlModal();
    } else {
      exportWorksheetsToStandaloneHtml([worksheet], studentData, {
        includeAnswers: true,
        title: `Ficha N.° ${worksheet.themeNumber}: ${worksheet.title}`,
      });
    }
  };

  return (
    <div className="mx-auto max-w-[210mm] bg-white text-black p-4 sm:p-8 shadow-xl border border-slate-300 rounded-sm print:shadow-none print:border-none print:p-0 print:max-w-none">
      {/* Printable Sheet Top Controls (Hidden in actual print) */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b-2 border-slate-200 pb-4 print:hidden">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-xs font-black text-red-900 border border-red-300">
            <FileText className="w-3.5 h-3.5" />
            Formato A4 Cuaderno de Trabajo Escolar
          </span>
          <h2 className="text-lg font-black text-slate-900 mt-1">
            Vista Previa de Impresión y PDF - Ficha N.° {worksheet.themeNumber}
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Diseñado en alta resolución para impresión en tamaño A4 (210 × 297 mm), fotocopiado escolar o exportación a PDF.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {onOpenApkModal && (
            <button
              type="button"
              onClick={onOpenApkModal}
              className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-teal-700 px-4 py-2.5 text-xs font-black text-white hover:bg-teal-800 shadow-md transition-transform active:scale-95"
              title="Instalar como app nativa en celulares Android o generar archivo APK"
            >
              <Smartphone className="w-4 h-4 text-teal-200" />
              Instalar APK
            </button>
          )}

          <button
            type="button"
            onClick={handleExportHtml}
            className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 via-amber-600 to-red-600 px-4 py-2.5 text-xs font-black text-white hover:brightness-110 shadow-md transition-transform active:scale-95"
            title="Guardar o descargar esta ficha como archivo HTML interactivo autónomo para abrir sin conexión"
          >
            <Download className="w-4 h-4" />
            Guardar en HTML Interactivo (.html)
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-xs font-black text-white hover:bg-red-700 shadow-md transition-transform active:scale-95"
            title="Abrir opciones para Guardar como PDF o Imprimir en A4"
          >
            <Printer className="w-4 h-4" />
            Guardar en PDF / Imprimir
          </button>
        </div>
      </div>

      {/* Sheet Content Wrapper with Notebook aesthetic */}
      <div className="relative border-l-4 border-red-500 pl-4 sm:pl-6 print:border-none print:p-0">
        {/* Notebook Ring Hole simulation (Hidden in Print) */}
        <div className="hidden sm:flex absolute -left-7 top-10 flex-col gap-12 print:hidden">
          <div className="h-4 w-4 rounded-full bg-slate-300 border-2 border-slate-400"></div>
          <div className="h-4 w-4 rounded-full bg-slate-300 border-2 border-slate-400"></div>
          <div className="h-4 w-4 rounded-full bg-slate-300 border-2 border-slate-400"></div>
          <div className="h-4 w-4 rounded-full bg-slate-300 border-2 border-slate-400"></div>
        </div>

        {/* 1. ENCABEZADO */}
        <WorksheetHeader
          worksheet={worksheet}
          studentData={studentData}
          onUpdateStudentData={onUpdateStudentData}
          isPrintView={true}
        />

        {/* 2. TEXTO DE LECTURA */}
        <ReadingSection
          worksheet={worksheet}
          isPrintView={true}
        />

        {/* Page Break for printing if needed */}
        <div className="print:break-after-page my-6 print:my-0"></div>

        {/* 3. ACTIVIDADES DE COMPRENSIÓN LECTORA */}
        <ComprehensionActivities
          literalQuestions={worksheet.literalQuestions}
          inferentialQuestions={worksheet.inferentialQuestions}
          criticalQuestions={worksheet.criticalQuestions}
          literalAnswers={studentData.literal}
          inferentialAnswers={studentData.inferential}
          criticalAnswers={studentData.critical}
          onSelectAnswer={onSelectAnswer}
          onUpdateCriticalAnswer={onUpdateCriticalAnswer}
          showSolutions={showTeacherSolutions}
          isPrintView={true}
        />

        {/* Page Break for printing */}
        <div className="print:break-after-page my-6 print:my-0"></div>

        {/* 4. IDENTIFICACIÓN DEL TEXTO */}
        <TextIdentificationActivity
          questions={worksheet.textIdentification}
          answers={studentData.textIdent}
          onSelectAnswer={onSelectTextIdentAnswer}
          showSolutions={showTeacherSolutions}
          isPrintView={true}
        />

        {/* 5. ORDENAMIENTO DE ORACIONES */}
        <SentenceOrderingActivity
          sentences={worksheet.sentenceOrdering}
          orderedIds={studentData.sentenceOrder}
          onReorder={onReorderSentences}
          showSolutions={showTeacherSolutions}
          isPrintView={true}
        />

        {/* 6. RELACIONAR COLUMNAS */}
        <ColumnMatchingActivity
          pairs={worksheet.columnMatching}
          matches={studentData.columnMatches}
          onMatch={onMatchColumns}
          onClearMatches={onClearColumnMatches}
          showSolutions={showTeacherSolutions}
          isPrintView={true}
        />

        {/* Page Break for printing */}
        <div className="print:break-after-page my-6 print:my-0"></div>

        {/* 7. SOPA DE LETRAS */}
        <WordSearchActivity
          grid={worksheet.wordSearch.grid}
          words={worksheet.wordSearch.words}
          foundWords={studentData.foundWords}
          onToggleFoundWord={onToggleFoundWord}
          onClearFoundWords={onClearFoundWords}
          isPrintView={true}
        />

        {/* 8. COMPLETAR ESPACIOS Y CONECTORES */}
        <FillBlanksActivity
          wordBank={worksheet.fillInTheBlanks.wordBank}
          items={worksheet.fillInTheBlanks.items}
          answers={studentData.fillBlanks}
          onSelectWord={onSelectBlankWord}
          onClearAnswers={onClearBlankAnswers}
          showSolutions={showTeacherSolutions}
          isPrintView={true}
        />

        {/* Printable Footer / School Signing */}
        <div className="mt-8 pt-4 border-t-2 border-slate-700 text-xs flex justify-between items-end print:mt-4 print:pt-2">
          <div className="text-center w-48">
            <div className="border-b border-black mb-1 h-12"></div>
            <p className="font-bold">Firma del Estudiante</p>
          </div>

          <div className="text-center text-[10px] text-slate-500 print:text-black">
            <p>Área de Comunicación • 2.° de Secundaria Rural</p>
            <p>MINEDU Perú - Cuaderno de Autoaprendizaje</p>
          </div>

          <div className="text-center w-48">
            <div className="border-b border-black mb-1 h-12"></div>
            <p className="font-bold">Sello y Firma del Docente</p>
          </div>
        </div>
      </div>
    </div>
  );
};
