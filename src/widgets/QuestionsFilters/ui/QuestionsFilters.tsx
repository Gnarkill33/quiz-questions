import { useState } from 'react';

import { SkillFilter } from '@/features/filter-by-skill/ui/SkillFilter';
import { SpecializationFilter } from '@/features/filter-by-spec/ui/SpecializationFilter';
import { TermSearch } from '@/features/search-by-keyword/ui/TermSearch';
import { LevelButtons, RateButtons } from '@/shared/ui';

import styles from './QuestionsFilters.module.css';

export const QuestionsFilters = () => {
  const [specializationId, setSpecializationId] = useState<number | null>(11);

  return (
    <aside className={styles.filtersContainer}>
      <TermSearch />
      <SpecializationFilter onChange={setSpecializationId} />
      <SkillFilter specializationId={specializationId} />
      <LevelButtons />
      <RateButtons />
    </aside>
  );
};
