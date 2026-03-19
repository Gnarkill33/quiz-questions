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

export interface QuestionSpecialization {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string | null;
  createdAt: string;
  updatedAt: string;
}
