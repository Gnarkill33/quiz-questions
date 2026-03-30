import type { QuestionType } from '@/entities/question/model/types';
import { Button } from '@/shared/ui';
import { Badge } from '@/shared/ui/Badge/Badge';

import styles from './DetailedQuestionSidebar.module.css';

interface Props {
  question: QuestionType;
}

export const DetailedQuestionSidebar = ({ question }: Props) => {
  return (
    <aside>
      <div className={styles.contentContainer}>
        <div className={styles.wrapper}>
          <p className={styles.title}>Уровень:</p>
          <div className={styles.badgeWrapper}>
            <Badge title="Сложность:" evaluation={question?.complexity}></Badge>
            <Badge title="Рейтинг:" evaluation={question?.rate}></Badge>
          </div>
        </div>
        <div className={styles.wrapper}>
          <p className={styles.title}>Навыки:</p>
          <div className={styles.badgeWrapper}>
            {question.questionSkills.length > 0 &&
              question.questionSkills.map((skill) => (
                <Button key={skill.id} selected image={skill.imageSrc}>
                  {skill.title}
                </Button>
              ))}
          </div>
        </div>
        <div className={styles.wrapper}>
          <p className={styles.title}>Ключевые слова:</p>
          <div className={styles.badgeWrapper}>
            {question.keywords.length > 0 &&
              question?.keywords.map((word) => (
                <p className={styles.hashTaggedWord} key={word}>
                  #{word}
                </p>
              ))}
          </div>
        </div>
        <p>Автор: {question.createdBy.username}</p>
      </div>
    </aside>
  );
};
