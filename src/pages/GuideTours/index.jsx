import styles from './GuideTours.module.scss';

import { GuideNav } from '../../components/GuideNav';

export const GuideTours = () => {
  return (
    <div className={styles.tours}>
      <GuideNav />
      <div className={styles.toursBlock}>
        <ul className={styles.toursBlock__list}>
          <li className={styles.toursBlock__listItem}>Название тура</li>
          <li className={styles.toursBlock__listItem}>Статус тура</li>
          <li className={styles.toursBlock__listItem}>Дата начала</li>
          <li className={styles.toursBlock__listItem}>Дата завершения</li>
          <li className={styles.toursBlock__listItem}>Страна</li>
          <li className={styles.toursBlock__listItem}>Регион</li>
          <li className={styles.toursBlock__listItem}>Язык</li>
        </ul>
        <button className={styles.toursBlock__btn}>Добавить путешествие</button>
      </div>
    </div>
  );
};
