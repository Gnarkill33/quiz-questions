import { NotFoundBlock } from '@/shared/ui';
import { useFilters } from '@/widgets/QuestionsFilters/model/hooks/useFilters';

import styles from './FiltersReset.module.css';

export const FiltersReset = () => {
  const { resetFilters } = useFilters();
  return (
    <NotFoundBlock
      title="К сожалению, по запросу ничего не найдено"
      description="Попробуйте изменить запрос или воспользуйтесь нашими категориями"
    >
      <button className={styles.resetBtn} onClick={resetFilters}>
        Сбросить фильтр
      </button>
    </NotFoundBlock>
  );
};
