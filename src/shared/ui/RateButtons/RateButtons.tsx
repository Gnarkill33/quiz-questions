import { RATES } from '@/shared/constants/constants';

import { Button } from '../Button/Button';
import { ButtonWrapper } from '../ButtonWrapper/ButtonWrapper';

export const RateButtons = () => {
  return (
    <ButtonWrapper title={'Рейтинг'}>
      {RATES.map((rate) => {
        return (
          <Button key={rate} onClick={() => {}}>
            {rate}
          </Button>
        );
      })}
    </ButtonWrapper>
  );
};
