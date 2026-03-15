import baseApi from '@/shared/api/baseApi';

import type { QuestionResponse } from '../model/types';

export const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchQuestions: builder.query<QuestionResponse, void>({
      query: () => '/questions/public-questions',
      providesTags: ['Question'],
    }),
  }),
  overrideExisting: false,
});

export const { useFetchQuestionsQuery } = questionApi;
