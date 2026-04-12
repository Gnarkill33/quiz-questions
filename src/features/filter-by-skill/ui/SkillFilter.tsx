import { useState } from 'react';

import { useFetchSkillsQuery } from '@/entities/skill/api/skillApi';
import { COUNT_MIN, SPEC_COUNT_MAX } from '@/shared/constants/constants';
import { Button, ButtonWrapper } from '@/shared/ui';
import { useFilters } from '@/widgets/QuestionsFilters/model/hooks/useFilters';

import styles from './SkillFilter.module.css';

interface Props {
  specializationId: number;
}

export const SkillFilter = ({ specializationId }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleSkill, filters } = useFilters();

  const limit = isOpen ? SPEC_COUNT_MAX : COUNT_MIN;
  const { data } = useFetchSkillsQuery({ limit, specializations: [specializationId] });

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <ButtonWrapper title="Навыки">
        {data?.data.map((skill) => (
          <Button
            key={skill.id}
            selected={filters.skills.includes(skill.id.toString())}
            onClick={() => {
              toggleSkill(skill.id.toString());
            }}
            image={skill.imageSrc}
          >
            {skill.title}
          </Button>
        ))}
      </ButtonWrapper>

      <button className={styles.toggleBtn} onClick={toggleOpen}>
        {isOpen ? 'Скрыть' : 'Посмотреть все'}
      </button>
    </div>
  );
};
