import { LevelButtons, RateButtons, SearchInput } from '@/shared/ui';

import styles from './QuestionsFilters.module.css';

export const QuestionsFilters = () => {
  return (
    <aside className={styles.filtersContainer}>
      <SearchInput />
      <LevelButtons />
      <RateButtons />
    </aside>
  );
};
