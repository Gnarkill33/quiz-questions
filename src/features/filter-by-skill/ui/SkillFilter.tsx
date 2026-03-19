import { useState } from 'react';

import { SkillsButtons } from '@/entities/skill';
import { useFetchSkillsQuery } from '@/entities/skill/api/skillApi';
import { SPEC_COUNT_MIN } from '@/shared/constants/constants';

import styles from './SkillFilter.module.css';

export const SkillFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: initialData } = useFetchSkillsQuery({ limit: SPEC_COUNT_MIN });
  const totalSpecializations = initialData?.total || 0;

  const limit = isOpen ? totalSpecializations : SPEC_COUNT_MIN;
  const { data } = useFetchSkillsQuery({ limit });

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <SkillsButtons skills={data?.data || []} />

      <button className={styles.toggleBtn} onClick={toggleOpen}>
        {isOpen ? 'Скрыть' : 'Посмотреть все'}
      </button>
    </div>
  );
};
