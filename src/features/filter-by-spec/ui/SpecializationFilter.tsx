import { useState } from 'react';

import { useAppSelector } from '@/app/providers/store';
import { useFetchSpecializationsQuery } from '@/entities/specialization/api/specializationApi';
import { Button, ButtonWrapper } from '@/shared/ui';

import styles from './SpecializationFilter.module.css';

interface Props {
  onToggle: (slug: string) => void;
}

export const SpecializationFilter = ({ onToggle }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { specializationSlug } = useAppSelector((state) => state.filters);

  const { data: initialData } = useFetchSpecializationsQuery({ limit: 5 });
  const totalSpecializations = initialData?.total || 0;

  const limit = isOpen ? totalSpecializations : 5;
  const { data } = useFetchSpecializationsQuery({ limit });

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
              onToggle(spec.slug);
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
