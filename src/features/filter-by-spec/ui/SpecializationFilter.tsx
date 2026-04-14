import { useState } from 'react';

import { useFetchSpecializationsQuery } from '@/entities/specialization/api/specializationApi';
import { SPEC_COUNT_MAX, COUNT_MIN } from '@/shared/constants/constants';
import { Button, ButtonWrapper } from '@/shared/ui';
import { FilterSkeleton } from '@/shared/ui/FilterSkeleton/FilterSkeleton';
import { useFilters } from '@/widgets/QuestionsFilters/model/hooks/useFilters';

import styles from './SpecializationFilter.module.css';

interface Props {
  onChange: (specId: number) => void;
}

export const SpecializationFilter = ({ onChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setSpecialization, filters } = useFilters();
  const limit = isOpen ? SPEC_COUNT_MAX : COUNT_MIN;
  const { data, isLoading } = useFetchSpecializationsQuery({ limit: limit });

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  if (isLoading) {
    return <FilterSkeleton buttonsCount={limit} isColumn />;
  }

  return (
    <div>
      <ButtonWrapper title="Специализация">
        {data?.data.map((spec) => (
          <Button
            key={spec.id}
            selected={spec.slug === filters.specialization}
            onClick={() => {
              setSpecialization(spec.slug);
              onChange(spec.id);
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
