import { useState } from 'react';

import { useAppSelector } from '@/app/providers/store';
import { useFetchSpecializationsQuery } from '@/entities/specialization/api/specializationApi';
import { SPEC_COUNT_MAX, COUNT_MIN } from '@/shared/constants/constants';
import { Button, ButtonWrapper } from '@/shared/ui';
import { useFilters } from '@/widgets/QuestionsFilters/model/useFilters';

import styles from './SpecializationFilter.module.css';

export const SpecializationFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { specializationSlug } = useAppSelector((state) => state.filters);
  const { setSpecializationSlug, setSpecializationTitle, setSpecializationId } = useFilters();
  const limit = isOpen ? SPEC_COUNT_MAX : COUNT_MIN;
  const { data } = useFetchSpecializationsQuery({ limit: limit });

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <ButtonWrapper title="Специализация">
        {data?.data.map((spec) => (
          <Button
            key={spec.id}
            selected={spec.slug === specializationSlug}
            onClick={() => {
              setSpecializationId(spec.id);
              setSpecializationSlug(spec.slug);
              setSpecializationTitle(spec.title);
            }}
          >
            {spec.title}
          </Button>
        ))}
      </ButtonWrapper>

      <button className={styles.toggleBtn} onClick={toggleOpen}>
        {isOpen ? 'Скрыть' : 'Посмотреть все'}
      </button>
    </div>
  );
};
