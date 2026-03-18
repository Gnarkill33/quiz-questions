import { LEVELS } from '@/shared/constants/constants';

import { Button } from '../Button/Button';
import { ButtonWrapper } from '../ButtonWrapper/ButtonWrapper';

export const LevelButtons = () => {
  return (
    <ButtonWrapper title={'Уровень сложности'}>
      {LEVELS.map((level) => {
        return (
          <Button key={level} onClick={() => {}}>
            {level}
          </Button>
        );
      })}
    </ButtonWrapper>
  );
};
