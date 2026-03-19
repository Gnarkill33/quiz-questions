import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.yeatwork.ru/' }),
  tagTypes: ['Question', 'Specialization', 'Skill'],
  endpoints: () => ({}),
});

export default baseApi;
