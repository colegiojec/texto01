import React from 'react';
import { WorksheetData, StudentAnswers } from '../types/worksheet';
import { School, Calendar, User, Award, BookOpen, MapPin } from 'lucide-react';

interface Props {
  worksheet: WorksheetData;
  studentData: StudentAnswers;
  onUpdateStudentData: (fields: Partial<StudentAnswers>) => void;
  score?: {
    totalPoints?: number;
    totalEarned?: number;
    maxPoints: number;
    score20: number;
    scale: 'AD' | 'A' | 'B' | 'C';
    scaleLabel: string;
  };
  isPrintView?: boolean;
}

export const WorksheetHeader: React.FC<Props> = ({
  worksheet,
  studentData,
  onUpdateStudentData,
  score,
  isPrintView = false,
}) => {
  return (
    <header className="mb-6 rounded-xl border-2 border-slate-700 bg-white p-4 shadow-sm print:p-2 print:border-black print:mb-4">
      {/* Top Banner with MINEDU & Regional context */}
      <div className="flex flex-wrap items-center justify-between border-b-2 border-slate-700 pb-3 mb-3 print:pb-2 print:mb-2">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-red-600 to-red-800 text-white font-extrabold text-xl shadow-xs print:border print:border-black">
            <span>PERÚ</span>
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-wider uppercase text-slate-500 print:text-black">
              Ministerio de Educación • Dirección de Educación Secundaria Rural
            </p>
            <h1 className="text-lg font-black text-slate-900 leading-tight print:text-base">
              CUADERNO DE TRABAJO PEDAGÓGICO DE COMUNICACIÓN
            </h1>
            <p className="text-xs font-semibold text-red-700 print:text-black">
              Ficha N.° {worksheet.themeNumber}: {worksheet.shortTag}
            </p>
          </div>
        </div>

        {/* Competency Badge */}
        <div className="mt-2 sm:mt-0 text-right">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-900 border border-amber-300 print:bg-white print:border-black print:text-black">
            <BookOpen className="w-3.5 h-3.5" />
            2.° Grado de Secundaria
          </span>
          <p className="text-[10px] text-slate-600 mt-1 max-w-xs text-right print:text-black">
            Área Curricular: <strong className="text-slate-900 print:text-black">Comunicación</strong>
          </p>
        </div>
      </div>

      {/* Title Highlight */}
      <div className="mb-4 text-center rounded-lg bg-slate-50 border border-slate-300 py-2.5 px-3 print:py-1.5 print:bg-white print:border-black">
        <h2 className="text-lg sm:text-xl font-black text-slate-800 tracking-tight uppercase leading-snug print:text-base">
          {worksheet.title}
        </h2>
        <p className="text-xs text-slate-600 italic font-medium print:text-black">
          {worksheet.subtitle}
        </p>
      </div>

      {/* Official Data Table Form */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse border border-slate-700 print:border-black">
          <tbody>
            <tr className="bg-slate-100 print:bg-slate-200">
              <td className="border border-slate-700 p-2 font-bold w-1/4 text-slate-800 print:border-black">
                <span className="flex items-center gap-1">
                  <School className="w-3.5 h-3.5 text-slate-600 print:text-black" />
                  Institución Educativa:
                </span>
              </td>
              <td className="border border-slate-700 p-1.5 w-1/4 print:border-black">
                {isPrintView ? (
                  <span className="font-semibold">{studentData.schoolName || 'I.E. Los Libertadores'}</span>
                ) : (
                  <input
                    type="text"
                    value={studentData.schoolName}
                    onChange={(e) => onUpdateStudentData({ schoolName: e.target.value })}
                    placeholder="Ej. I.E. San Juan Bautista"
                    className="w-full bg-white px-2 py-1 rounded border border-slate-300 text-xs font-medium focus:border-red-500 focus:outline-none"
                  />
                )}
              </td>
              <td className="border border-slate-700 p-2 font-bold w-1/4 text-slate-800 print:border-black">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-600 print:text-black" />
                  Comunidad / Caserío:
                </span>
              </td>
              <td className="border border-slate-700 p-1.5 w-1/4 print:border-black">
                {isPrintView ? (
                  <span className="font-semibold">{studentData.community || 'Caserío Monte Azul'}</span>
                ) : (
                  <input
                    type="text"
                    value={studentData.community}
                    onChange={(e) => onUpdateStudentData({ community: e.target.value })}
                    placeholder="Ej. Caserío El Triunfo"
                    className="w-full bg-white px-2 py-1 rounded border border-slate-300 text-xs font-medium focus:border-red-500 focus:outline-none"
                  />
                )}
              </td>
            </tr>

            <tr>
              <td className="border border-slate-700 p-2 font-bold bg-slate-50 print:bg-slate-100 print:border-black">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-slate-600 print:text-black" />
                  Estudiante (Apellidos y Nombres):
                </span>
              </td>
              <td className="border border-slate-700 p-1.5 print:border-black">
                {isPrintView ? (
                  <span className="font-bold text-slate-900">{studentData.studentName || '__________________________________________'}</span>
                ) : (
                  <input
                    type="text"
                    value={studentData.studentName}
                    onChange={(e) => onUpdateStudentData({ studentName: e.target.value })}
                    placeholder="Escribe tus apellidos y nombres"
                    className="w-full bg-white px-2 py-1 rounded border border-slate-300 text-xs font-bold text-slate-900 focus:border-red-500 focus:outline-none"
                  />
                )}
              </td>
              <td className="border border-slate-700 p-2 font-bold bg-slate-50 print:bg-slate-100 print:border-black">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-600 print:text-black" />
                  Fecha / Sección:
                </span>
              </td>
              <td className="border border-slate-700 p-1.5 print:border-black">
                <div className="flex gap-2">
                  {isPrintView ? (
                    <span className="font-medium">{studentData.date || '____/____/2026'} • Secc: {studentData.section || 'Única'}</span>
                  ) : (
                    <>
                      <input
                        type="date"
                        value={studentData.date}
                        onChange={(e) => onUpdateStudentData({ date: e.target.value })}
                        className="w-2/3 bg-white px-2 py-1 rounded border border-slate-300 text-xs font-medium focus:border-red-500 focus:outline-none"
                      />
                      <input
                        type="text"
                        value={studentData.section}
                        onChange={(e) => onUpdateStudentData({ section: e.target.value })}
                        placeholder="Secc: A"
                        className="w-1/3 bg-white px-2 py-1 rounded border border-slate-300 text-xs font-medium text-center focus:border-red-500 focus:outline-none"
                      />
                    </>
                  )}
                </div>
              </td>
            </tr>

            <tr className="bg-slate-100 print:bg-slate-200">
              <td className="border border-slate-700 p-2 font-bold text-slate-800 print:border-black">
                Docente Responsable:
              </td>
              <td className="border border-slate-700 p-1.5 print:border-black">
                {isPrintView ? (
                  <span>{studentData.teacherName || 'Prof. Carmen Flores'}</span>
                ) : (
                  <input
                    type="text"
                    value={studentData.teacherName}
                    onChange={(e) => onUpdateStudentData({ teacherName: e.target.value })}
                    placeholder="Prof. de Comunicación"
                    className="w-full bg-white px-2 py-1 rounded border border-slate-300 text-xs font-medium focus:border-red-500 focus:outline-none"
                  />
                )}
              </td>
              <td className="border border-slate-700 p-2 font-bold text-slate-800 print:border-black">
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-600 print:text-black" />
                  Calificación (0 - 20) / Nivel CNEB:
                </span>
              </td>
              <td className="border border-slate-700 p-1.5 text-center font-bold text-sm bg-amber-50 print:bg-white print:border-black">
                {score ? (
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-red-700 font-black text-base print:text-black">{score.score20} / 20</span>
                    <span className="rounded bg-red-100 px-1.5 py-0.5 text-xs text-red-900 border border-red-300 font-extrabold print:bg-white print:border-black print:text-black">
                      [{score.scale}] {score.scaleLabel}
                    </span>
                  </div>
                ) : (
                  <span className="text-slate-400 italic font-normal print:text-black">
                    {isPrintView ? '[ ___ / 20 ] Escala: [ AD / A / B / C ]' : 'Por evaluar al completar'}
                  </span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Competency and capacities banner */}
      <div className="mt-2.5 rounded bg-amber-50/70 border border-amber-200 p-2 text-[11px] text-amber-900 print:bg-white print:border-black print:text-black">
        <strong>Competencia MINEDU:</strong> {worksheet.cnebCompetency}.
        <span className="block text-[10px] text-slate-600 print:text-black mt-0.5">
          <strong>Capacidades a evaluar:</strong> {worksheet.cnebCapacities.join(' | ')}.
        </span>
      </div>
    </header>
  );
};
