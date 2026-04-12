import { useEffect, useState } from 'react';

import { useDebounce } from '@/shared/hooks/useDebounce';
import { SearchInput } from '@/shared/ui';
import { useFilters } from '@/widgets/QuestionsFilters/model/hooks/useFilters';

export const TermSearch = () => {
  const { setSearch, filters } = useFilters();
  const [localValue, setLocalValue] = useState(filters.search || '');
  const debouncedValue = useDebounce(localValue, 500);

  useEffect(() => {
    setSearch(debouncedValue);
  }, [debouncedValue, setSearch]);

  const handleSearchChange = (value: string) => {
    setLocalValue(value);
  };

  return <SearchInput value={localValue} onChange={handleSearchChange} />;
};
