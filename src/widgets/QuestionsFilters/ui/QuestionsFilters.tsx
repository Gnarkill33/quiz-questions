import { LevelButtons } from '@/shared/ui/LevelButtons/LevelButtons';
import { SearchInput } from '@/shared/ui/SearchInput/SearchInput';

import styles from './QuestionsFilters.module.css';

export const QuestionsFilters = () => {
  return (
    <aside className={styles.filtersContainer}>
      <SearchInput />
      <LevelButtons />
    </aside>
  );
};
