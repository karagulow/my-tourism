import styles from './GuideRegulation.module.scss';

import { GuideNav } from '../../components/GuideNav';

export const GuideRegulation = () => {
  return (
    <div className={styles.regulation}>
      <GuideNav />
      <div className={styles.regulationBlock}>
        <h3 className={styles.regulationBlock__title}>Решение разногласий</h3>
        <p className={styles.regulationBlock__text}>
          Отправить или запросить деньги, связанные с бронированием
          (дополнительные услуги/ сборы, возвраты или компенсацию ущерба).
        </p>
        <button className={styles.regulationBlock__btn}>Запрос возврата</button>
        <div className={styles.regulationBlock__list}>
          <div className={styles.regulationBlock__listItem}>
            <p className={styles.regulationBlock__listItem__title}>
              Текущие заявки
            </p>
            <p className={styles.regulationBlock__listItem__text}>
              Нет исходящих заявок
            </p>
          </div>
          <div className={styles.regulationBlock__listItem}>
            <p className={styles.regulationBlock__listItem__title}>
              Входящие заявки
            </p>
            <p className={styles.regulationBlock__listItem__text}>
              Нет входящих заявок
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
