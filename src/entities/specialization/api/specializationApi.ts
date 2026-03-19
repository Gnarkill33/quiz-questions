import baseApi from '@/shared/api/baseApi';

import type { SpecializationParams, SpecializationResponse } from '../model/types';

export const specializationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchSpecializations: builder.query<SpecializationResponse, SpecializationParams>({
      query: (params) => ({
        url: '/specializations',
        params: { limit: params.limit },
      }),
      providesTags: ['Specialization'],
    }),
  }),
  overrideExisting: false,
});

export const { useFetchSpecializationsQuery } = specializationApi;
