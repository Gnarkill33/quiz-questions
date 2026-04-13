import type { QuestionSkill } from '@/entities/skill/model/types';
import type { QuestionSpecialization } from '@/entities/specialization/model/types';

export interface QuestionParams {
  page?: number;
  limit?: number;
  specializationSlug?: string;
  skillsIdx?: string[];
  searchValue: string;
  complexity: number[];
  rate: number[];
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
