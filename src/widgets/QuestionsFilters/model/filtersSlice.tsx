import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { FiltersState } from './types';

const initialFiltersState: FiltersState = {
  specializationSlug: 'react-frontend-developer',
  specializationTitle: 'React Frontend Developer',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFiltersState,
  reducers: {
    toggleSpecialization: (state, action: PayloadAction<string>) => {
      state.specializationSlug = action.payload;
    },
    setSpecializationTitle: (state, action: PayloadAction<string>) => {
      state.specializationTitle = action.payload;
    },
  },
});

export const { toggleSpecialization, setSpecializationTitle } = filtersSlice.actions;
export default filtersSlice.reducer;
