import { COMPLEXITY } from '@/shared/constants/constants';
import { Button, ButtonWrapper } from '@/shared/ui';
import { useFilters } from '@/widgets/QuestionsFilters/model/hooks/useFilters';

export const ComplexityFilter = () => {
  const { toggleComplexity, filters } = useFilters();

  return (
    <ButtonWrapper title={'Уровень сложности'}>
      {COMPLEXITY.map((complexity) => {
        return (
          <Button
            key={complexity.label}
            onClick={() => toggleComplexity(complexity.value)}
            selected={complexity.value.map(Number).every((level) => filters.complexity.includes(level))}
          >
            {complexity.label}
          </Button>
        );
      })}
    </ButtonWrapper>
  );
};
