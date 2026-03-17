import clsx from 'clsx';

import Arrow from '@/shared/assets/images/arrow.svg';

import { usePagination } from '../model/hooks';

import styles from './Pagination.module.css';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ totalPages, currentPage, onPageChange }: Props) => {
  const paginationRange = usePagination({ currentPage, totalPages });

  if (totalPages <= 1) return null;

  return (
    <div className={styles.container}>
      <button className={styles.arrowBtn} disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        <img src={Arrow} alt="arrow-left" />
      </button>
      {paginationRange.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              if (typeof page === 'number') {
                onPageChange(page);
              }
            }}
            className={clsx(styles.pageBtn, currentPage === page ? styles.active : '')}
            disabled={page === currentPage}
          >
            {page}
          </button>
        );
      })}
      <button
        className={clsx(styles.arrowBtn, styles.right)}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <img src={Arrow} alt="arrow-right" />
      </button>
    </div>
  );
};
