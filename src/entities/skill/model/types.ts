import type { QuestionSpecialization } from '@/entities/specialization/model/types';

export interface SkillResponse {
  total: number;
  page: number;
  limit: number;
  data: QuestionSkill[];
}

export interface SkillParams {
  page?: number;
  limit?: number;
  authorId?: string;
  specializations?: number[];
  title?: string;
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
