import type { QuestionSpecialization } from '@/entities/question/model/types';

export interface SpecializationResponse {
  total: number;
  page: number;
  limit: number;
  data: QuestionSpecialization[];
}

export type SpecializationParams = {
  page?: number;
  limit?: number;
  authorId?: string;
  title?: string;
};
