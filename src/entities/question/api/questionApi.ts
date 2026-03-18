import baseApi from '@/shared/api/baseApi';

import type { QuestionParams, QuestionResponse } from '../model/types';

export const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchQuestions: builder.query<QuestionResponse, QuestionParams>({
      query: ({ page = 1 }) => `questions/public-questions?page=${page}`,
      providesTags: ['Question'],
    }),
  }),
  overrideExisting: false,
});

export const { useFetchQuestionsQuery } = questionApi;
