import baseApi from '@/shared/api/baseApi';

import type { SkillParams, SkillResponse } from '../model/types';

export const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchSkills: builder.query<SkillResponse, SkillParams>({
      query: (params) => ({
        url: '/skills',
        params: { limit: params.limit, specializations: params.specializations },
      }),
      providesTags: ['Skill'],
    }),
  }),
  overrideExisting: false,
});

export const { useFetchSkillsQuery } = skillApi;
