import baseApi from '@/shared/api/baseApi';

import type { QuestionParams, QuestionResponse } from '../model/types';

export const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchQuestions: builder.query<QuestionResponse, QuestionParams>({
      query: (params) => {
        const queryParams: Record<string, unknown> = {
          page: params.page || 1,
          limit: params.limit || 10,
          specializationSlug: params.specializationSlug,
        };

        if (params.skillsIdx && params.skillsIdx.length > 0) {
          queryParams.skills = params.skillsIdx.join(',');
          queryParams.skillFilterMode = 'ANY';
        }

        return {
          url: 'questions/public-questions',
          params: queryParams,
        };
      },
      providesTags: ['Question'],
    }),
  }),
  overrideExisting: false,
});

export const { useFetchQuestionsQuery } = questionApi;
