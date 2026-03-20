import baseApi from '@/shared/api/baseApi';

import type { QuestionParams, QuestionResponse } from '../model/types';

export const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchQuestions: builder.query<QuestionResponse, QuestionParams>({
      query: (params) => ({
        url: 'questions/public-questions',
        params: {
          specializationSlug: params.specializationSlug,
          page: params.page || 1,
          limit: params.limit || 10,
        },
      }),
      providesTags: ['Question'],
    }),
  }),
  overrideExisting: false,
});

export const { useFetchQuestionsQuery } = questionApi;
