import { RATES } from '@/shared/constants/constants';
import { Button, ButtonWrapper } from '@/shared/ui';
import { useFilters } from '@/widgets/QuestionsFilters/model/hooks/useFilters';

export const RateFilter = () => {
  const { filters, toggleRate } = useFilters();

  return (
    <ButtonWrapper title={'Рейтинг'}>
      {RATES.map((rate) => {
        return (
          <Button key={rate} onClick={() => toggleRate(rate)} selected={filters.rate.includes(rate)}>
            {rate}
          </Button>
        );
      })}
    </ButtonWrapper>
  );
};
