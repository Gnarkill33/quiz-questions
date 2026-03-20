import { SkillFilter } from '@/features/filter-by-skill/ui/SkillFilter';
import { SpecializationFilter } from '@/features/filter-by-spec/ui/SpecializationFilter';
import { LevelButtons, RateButtons, SearchInput } from '@/shared/ui';

import { useFilters } from '../model/useFilters';

import styles from './QuestionsFilters.module.css';

export const QuestionsFilters = () => {
  const { toggleSpecialization } = useFilters();

  return (
    <aside className={styles.filtersContainer}>
      <SearchInput />
      <SpecializationFilter onToggle={toggleSpecialization} />
      <SkillFilter />
      <LevelButtons />
      <RateButtons />
    </aside>
  );
};
