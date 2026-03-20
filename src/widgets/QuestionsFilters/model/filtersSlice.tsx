import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { FiltersState } from './types';

const initialFiltersState: FiltersState = {
  specializationSlug: 'react-frontend-developer',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFiltersState,
  reducers: {
    toggleSpecialization: (state, action: PayloadAction<string>) => {
      state.specializationSlug = action.payload;
    },
  },
});

export const { toggleSpecialization } = filtersSlice.actions;
export default filtersSlice.reducer;
