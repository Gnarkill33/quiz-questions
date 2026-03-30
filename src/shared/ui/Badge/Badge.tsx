import styles from './Badge.module.css';

interface Props {
  title: string;
  evaluation: number | undefined;
}

export const Badge = ({ title, evaluation }: Props) => {
  return (
    <p className={styles.evalWrapper}>
      {title}
      <span className={styles.evalValue}>{evaluation}</span>
    </p>
  );
};
