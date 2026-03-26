import { useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router';

import { useAppDispatch, useAppSelector } from '@/app/providers/store';

import {
  setSkills,
  setSpecializationTitle,
  setSpecializationSlug,
  setSpecializationId,
  clearSkills,
} from './filtersSlice';

export const useFilters = () => {
  const dispatch = useAppDispatch();
  const { specializationSlug, skillsIdx } = useAppSelector((state) => state.filters);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const spec = searchParams.get('specialization');
    if (spec) {
      dispatch(setSpecializationSlug(spec));
    }

    const skills = searchParams.get('skills');
    if (skills) {
      skills.split(',').forEach((skill) => {
        dispatch(setSkills(skill));
      });
    }
  }, [dispatch, searchParams]);

  const handleSetSpecializationSlug = useCallback(
    (slug: string) => {
      dispatch(clearSkills());
      dispatch(setSpecializationSlug(slug));

      const params = new URLSearchParams();
      params.set('specialization', slug);
      params.set('page', '1');
      setSearchParams(params);
    },
    [dispatch, setSearchParams],
  );

  const handleSetSkills = useCallback(
    (skillId: string) => {
      const newSkills = skillsIdx.includes(skillId)
        ? skillsIdx.filter((id) => id !== skillId)
        : [...skillsIdx, skillId];

      dispatch(setSkills(skillId));

      const params = new URLSearchParams();
      if (specializationSlug) {
        params.set('specialization', specializationSlug);
      }
      if (newSkills.length > 0) {
        params.set('skills', newSkills.join(','));
      }
      params.set('page', '1');
      setSearchParams(params);
    },
    [dispatch, skillsIdx, specializationSlug, setSearchParams],
  );

  const handleSetSpecializationTitle = useCallback(
    (title: string) => {
      dispatch(setSpecializationTitle(title));
    },
    [dispatch],
  );

  const handleSetSpecializationId = useCallback(
    (id: number) => {
      dispatch(setSpecializationId(id));
    },
    [dispatch],
  );

  return {
    setSpecializationId: handleSetSpecializationId,
    setSpecializationSlug: handleSetSpecializationSlug,
    setSpecializationTitle: handleSetSpecializationTitle,
    setSkills: handleSetSkills,
  };
};
