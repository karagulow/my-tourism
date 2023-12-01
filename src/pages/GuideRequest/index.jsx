import styles from './GuideRequest.module.scss';

import { GuideNav } from '../../components/GuideNav';

export const GuideRequest = () => {
  return (
    <div className={styles.request}>
      <GuideNav />
      <div className={styles.requestBlock}>
        <h3 className={styles.requestBlock__title}>Запросы</h3>
        <div className={styles.requestBlock__list}>
          <div className={styles.requestBlock__listItem}>
            <p className={styles.requestBlock__listItem__title}>
              Текущие запросы
            </p>
            <p className={styles.requestBlock__listItem__text}>Нет запросов</p>
          </div>
          <div className={styles.requestBlock__listItem}>
            <p className={styles.requestBlock__listItem__title}>
              Прошлые запросы
            </p>
            <p className={styles.requestBlock__listItem__text}>Нет запросов</p>
          </div>
        </div>
      </div>
    </div>
  );
};
