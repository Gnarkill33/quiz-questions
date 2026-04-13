import { useState } from 'react';

import { ComplexityFilter } from '@/features/filter-by-complexity/ui/ComplexityFilter';
import { RateFilter } from '@/features/filter-by-rate/ui/RateFilter';
import { SkillFilter } from '@/features/filter-by-skill/ui/SkillFilter';
import { SpecializationFilter } from '@/features/filter-by-spec/ui/SpecializationFilter';
import { TermSearch } from '@/features/search-by-keyword/ui/TermSearch';

import styles from './QuestionsFilters.module.css';

export const QuestionsFilters = () => {
  const [specializationId, setSpecializationId] = useState<number>(11);

  return (
    <aside className={styles.filtersContainer}>
      <TermSearch />
      <SpecializationFilter onChange={setSpecializationId} />
      <SkillFilter specializationId={specializationId} />
      <ComplexityFilter />
      <RateFilter />
    </aside>
  );
};
