import baseApi from '@/shared/api/baseApi';

import type { QuestionParams, QuestionResponse } from '../model/types';

export const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchQuestions: builder.query<QuestionResponse, QuestionParams>({
      query: (params) => ({
        url: `questions/public-questions?page=${params.page}`,
        params: { page: 1, limit: 10, ...params },
      }),
      providesTags: ['Question'],
    }),
  }),
  overrideExisting: false,
});

export const { useFetchQuestionsQuery } = questionApi;
