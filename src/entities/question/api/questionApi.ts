import baseApi from '@/shared/api/baseApi';

import type { QuestionParams, QuestionResponse, QuestionType } from '../model/types';

export const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchQuestions: builder.query<QuestionResponse, QuestionParams>({
      query: (params) => {
        const queryParams: Record<string, unknown> = {
          page: params.page || 1,
          limit: params.limit || 10,
        };

        if (params.specializationSlug) {
          queryParams.specializationSlug = params.specializationSlug;
        }

        if (params.skillsIdx && params.skillsIdx.length > 0) {
          queryParams.skills = params.skillsIdx.join(',');
          queryParams.skillFilterMode = 'ANY';
        }

        if (params.searchValue) {
          queryParams.titleOrDescription = params.searchValue;
        }

        if (params.complexity && params.complexity.length > 0) {
          queryParams.complexity = params.complexity.join(',');
        }

        if (params.rate && params.rate.length > 0) {
          queryParams.rate = params.rate.join(',');
        }

        return {
          url: 'questions/public-questions',
          params: queryParams,
        };
      },
      providesTags: ['Question'],
    }),
    fetchQuestionById: builder.query<QuestionType, number>({
      query: (id) => `questions/public-questions/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useFetchQuestionsQuery, useFetchQuestionByIdQuery } = questionApi;
