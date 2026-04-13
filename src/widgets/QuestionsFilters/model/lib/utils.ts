import type { Filters } from '../types';

export const parseFilters = (params: URLSearchParams): Filters => {
  return {
    specialization: params.get('specialization') ?? undefined,
    skills: params.get('skills')?.split(',') ?? [],
    search: params.get('search') ?? undefined,
    page: Number(params.get('page') ?? 1),
    complexity: params.get('complexity')?.split(',').map(Number) ?? [],
  };
};

export const buildParams = (filters: Filters) => {
  const params = new URLSearchParams(window.location.search);

  if (filters.specialization) {
    params.set('specialization', filters.specialization);
  } else {
    params.delete('specialization');
  }

  if (filters.skills?.length) {
    params.set('skills', filters.skills.join(','));
  } else {
    params.delete('skills');
  }

  if (filters.search) {
    params.set('search', filters.search);
  } else {
    params.delete('search');
  }

  if (filters.complexity?.length) {
    params.set('complexity', filters.complexity.join(','));
  } else {
    params.delete('complexity');
  }

  params.set('page', String(filters.page ?? 1));

  return params;
};
