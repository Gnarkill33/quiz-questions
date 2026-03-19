import { useState } from 'react';

import { SpecializationButtons } from '@/entities/specialization';
import { useFetchSpecializationsQuery } from '@/entities/specialization/api/specializationApi';
import { SPEC_COUNT_MIN } from '@/shared/constants/constants';

import styles from './SpecializationFilter.module.css';

export const SpecializationFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: initialData } = useFetchSpecializationsQuery({ limit: SPEC_COUNT_MIN });
  const totalSpecializations = initialData?.total || 0;

  const limit = isOpen ? totalSpecializations : SPEC_COUNT_MIN;
  const { data } = useFetchSpecializationsQuery({ limit });

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <SpecializationButtons specializations={data?.data || []} />

      <button className={styles.toggleBtn} onClick={toggleOpen}>
        {isOpen ? 'Скрыть' : 'Посмотреть все'}
      </button>
    </div>
  );
};
