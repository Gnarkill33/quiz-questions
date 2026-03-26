import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { FiltersState } from './types';

const initialFiltersState: FiltersState = {
  specializationId: 11,
  specializationSlug: 'react-frontend-developer',
  specializationTitle: 'React Frontend Developer',
  skillsIdx: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFiltersState,
  reducers: {
    setSpecializationId: (state, action: PayloadAction<number>) => {
      state.specializationId = action.payload;
    },
    setSpecializationSlug: (state, action: PayloadAction<string>) => {
      state.specializationSlug = action.payload;
    },
    setSpecializationTitle: (state, action: PayloadAction<string>) => {
      state.specializationTitle = action.payload;
    },
    setSkills: (state, action: PayloadAction<string>) => {
      const skillId = action.payload;
      if (state.skillsIdx.includes(skillId)) {
        state.skillsIdx = state.skillsIdx.filter((id) => id !== skillId);
        return;
      }
      state.skillsIdx.push(skillId);
    },
    clearSkills: (state) => {
      state.skillsIdx = [];
    },
  },
});

export const { setSpecializationId, setSpecializationSlug, setSpecializationTitle, setSkills, clearSkills } =
  filtersSlice.actions;
export default filtersSlice.reducer;
