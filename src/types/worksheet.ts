export interface MultipleChoiceQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  pedagogicalSkill?: string;
}

export interface CriticalQuestion {
  id: string;
  question: string;
  promptHint: string;
  communityContext: string;
  rubricCriteria: string;
  suggestedAnswer: string;
}

export interface SentenceOrderItem {
  id: string;
  text: string;
  correctOrder: number; // 1-indexed
}

export interface MatchingPair {
  id: string;
  concept: string;
  match: string;
  hint: string;
}

export interface WordSearchItem {
  word: string;
  clue: string;
  direction: 'horizontal' | 'vertical';
  row: number; // 0-indexed
  col: number; // 0-indexed
}

export interface FillBlankItem {
  id: string;
  sentenceBefore: string;
  sentenceAfter: string;
  correctWord: string;
  wordType: 'conector' | 'vocabulario';
  grammarHint: string;
}

export interface WorksheetData {
  id: number;
  themeNumber: number;
  themeCategory: string;
  shortTag: string;
  title: string;
  subtitle: string;
  curricularArea: string;
  gradeAndLevel: string;
  cnebCompetency: string;
  cnebCapacities: string[];
  reading: {
    title: string;
    synopsis: string;
    readingTime: string;
    paragraphs: string[];
    vocabulary: { word: string; definition: string }[];
    illustrationType: 'technology' | 'self_esteem' | 'delinquency' | 'drugs';
    quoteText: string;
    quoteAuthor: string;
  };
  literalQuestions: MultipleChoiceQuestion[];
  inferentialQuestions: MultipleChoiceQuestion[];
  criticalQuestions: CriticalQuestion[];
  textIdentification: MultipleChoiceQuestion[];
  sentenceOrdering: SentenceOrderItem[];
  columnMatching: MatchingPair[];
  wordSearch: {
    grid: string[][];
    words: WordSearchItem[];
  };
  fillInTheBlanks: {
    wordBank: string[];
    items: FillBlankItem[];
  };
}

export interface StudentAnswers {
  studentName: string;
  schoolName: string;
  community: string;
  date: string;
  section: string;
  teacherName: string;
  literal: Record<string, number>;
  inferential: Record<string, number>;
  textIdent: Record<string, number>;
  critical: Record<string, string>;
  sentenceOrder: string[]; // array of sentence ids in chosen order
  columnMatches: Record<string, string>; // concept id -> match id
  foundWords: string[];
  fillBlanks: Record<string, string>;
  isEvaluated?: boolean;
}
