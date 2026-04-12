import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { buildParams, parseFilters } from '../lib/utils';
import type { Filters } from '../types';

export const useFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = useMemo(() => parseFilters(searchParams), [searchParams]);

  const updateFilters = useCallback(
    (patch: Partial<Filters>) => {
      setSearchParams((prev) => {
        const current = parseFilters(prev);

        const next = {
          ...current,
          ...patch,
        };

        return buildParams(next);
      });
    },
    [setSearchParams],
  );

  const setSearch = useCallback(
    (search: string) => {
      updateFilters({ search });
    },
    [updateFilters],
  );

  return {
    filters,

    setSpecialization: (slug: string) => updateFilters({ specialization: slug, skills: [], page: 1 }),

    toggleSkill: (skill: string) => {
      const isSkillExist = filters.skills.includes(skill);

      const skills = isSkillExist ? filters.skills.filter((s) => s !== skill) : [...filters.skills, skill];

      updateFilters({ skills, page: 1 });
    },

    setSearch,

    setPage: (page: number) => updateFilters({ page }),
  };
};
