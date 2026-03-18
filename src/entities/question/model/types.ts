export interface QuestionParams {
  page?: number;
  limit?: number;
}
export interface QuestionResponse {
  data: QuestionType[];
  limit: number;
  page: number;
  total: number;
}
export interface QuestionType {
  id: number;
  title: string;
  slug: string;
  description: string;
  code: string | null;
  imageSrc: string | null;
  keywords: string[];
  longAnswer: string | null;
  shortAnswer: string | TrustedHTML;
  status: string;
  rate: number;
  complexity: number;
  createdAt: string;
  updatedAt: string;
  createdById: string;
  updatedById: string;
  createdBy: User;
  updatedBy: User;
  questionTopics: string[];
  questionSpecializations: QuestionSpecialization[];
  questionSkills: QuestionSkill[];
}

export interface User {
  id: string;
  username: string;
}

export interface QuestionSpecialization {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface QuestionSkill {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  specializations: QuestionSpecialization[];
}
