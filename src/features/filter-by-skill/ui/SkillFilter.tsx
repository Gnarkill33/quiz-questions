import { useState } from 'react';

import { useAppSelector } from '@/app/providers/store';
import { useFetchSkillsQuery } from '@/entities/skill/api/skillApi';
import { COUNT_MIN, SPEC_COUNT_MAX } from '@/shared/constants/constants';
import { Button, ButtonWrapper } from '@/shared/ui';
import { useFilters } from '@/widgets/QuestionsFilters/model/useFilters';

import styles from './SkillFilter.module.css';

export const SkillFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { specializationId, skillsIdx } = useAppSelector((state) => state.filters);
  const { setSkills } = useFilters();
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
            selected={skillsIdx.includes(skill.id.toString())}
            onClick={() => {
              setSkills(skill.id.toString());
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
