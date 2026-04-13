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

  const setSpecialization = (slug: string) => updateFilters({ specialization: slug, skills: [], page: 1 });

  const toggleSkill = (skill: string) => {
    const isSkillExist = filters.skills.includes(skill);

    const skills = isSkillExist ? filters.skills.filter((s) => s !== skill) : [...filters.skills, skill];

    updateFilters({ skills, page: 1 });
  };

  const setPage = (page: number) => updateFilters({ page });

  const toggleComplexity = (complexity: string[]) => {
    const normalizedComplexity = complexity.map(Number);
    const isComplexityExist = normalizedComplexity.every((level) => filters.complexity.includes(level));

    const complexityLevels = isComplexityExist
      ? filters.complexity.filter((lvl) => !normalizedComplexity.includes(lvl))
      : [...filters.complexity, ...normalizedComplexity];

    updateFilters({ complexity: complexityLevels });
  };

  const toggleRate = (rate: number) => {
    const isRateExist = filters.rate.includes(rate);

    const rates = isRateExist ? filters.rate.filter((r) => r !== rate) : [...filters.rate, rate];

    updateFilters({ rate: rates });
  };

  const setSearch = useCallback(
    (search: string) => {
      updateFilters({ search });
    },
    [updateFilters],
  );

  return { filters, setSpecialization, toggleSkill, setSearch, setPage, toggleComplexity, toggleRate };
};
