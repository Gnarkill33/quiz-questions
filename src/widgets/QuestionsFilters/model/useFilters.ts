import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

import { useAppDispatch, useAppSelector } from '@/app/providers/store';

import { setSpecializationTitle, toggleSpecialization } from './filtersSlice';

export const useFilters = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const spec = searchParams.get('slug');
    if (spec) {
      dispatch(toggleSpecialization(spec));
    }
  }, [dispatch, searchParams]);

  useEffect(() => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (filters.specializationSlug) {
        params.set('slug', filters.specializationSlug);
      }

      return params;
    });
  }, [filters, setSearchParams]);

  const handleToggleSpecialization = (slug: string) => {
    dispatch(toggleSpecialization(slug));
  };

  const handleSetSpecializationTitle = (title: string) => {
    dispatch(setSpecializationTitle(title));
  };

  return {
    filters,
    toggleSpecialization: handleToggleSpecialization,
    setSpecializationTitle: handleSetSpecializationTitle,
  };
};
