import { SpecializationFilter } from '@/features/filter-by-spec/ui/SpecializationFilter';
import { LevelButtons, RateButtons, SearchInput } from '@/shared/ui';

import styles from './QuestionsFilters.module.css';

export const QuestionsFilters = () => {
  return (
    <aside className={styles.filtersContainer}>
      <SearchInput />
      <SpecializationFilter />
      <LevelButtons />
      <RateButtons />
    </aside>
  );
};
