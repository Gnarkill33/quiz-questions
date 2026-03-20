import { Button } from '@/shared/ui/Button/Button';
import { ButtonWrapper } from '@/shared/ui/ButtonWrapper/ButtonWrapper';

import type { QuestionSpecialization } from '../model/types';

interface Props {
  specializations: QuestionSpecialization[];
}

export const SpecializationButtons = ({ specializations }: Props) => {
  return (
    <ButtonWrapper title="Специализация">
      {specializations.map((spec) => (
        <Button key={spec.id} onClick={() => {}}>
          {spec.title}
        </Button>
      ))}
    </ButtonWrapper>
  );
};
