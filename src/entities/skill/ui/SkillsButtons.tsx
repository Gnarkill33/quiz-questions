import { Button } from '@/shared/ui/Button/Button';
import { ButtonWrapper } from '@/shared/ui/ButtonWrapper/ButtonWrapper';

import type { QuestionSkill } from '../model/types';

interface Props {
  skills: QuestionSkill[];
}

export const SkillsButtons = ({ skills }: Props) => {
  return (
    <ButtonWrapper title="Навыки">
      {skills.map((skill) => (
        <Button key={skill.id} onClick={() => {}} image={skill.imageSrc}>
          {skill.title}
        </Button>
      ))}
    </ButtonWrapper>
  );
};
