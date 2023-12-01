import styles from './GuideBooking.module.scss';

import { GuideNav } from '../../components/GuideNav';

export const GuideBooking = () => {
  return (
    <div className={styles.booking}>
      <GuideNav />
      <div className={styles.bookingBlock}>
        <ul className={styles.bookingBlock__list}>
          <li className={styles.bookingBlock__listItem}>Название тура</li>
          <li className={styles.bookingBlock__listItem}>Статус тура</li>
          <li className={styles.bookingBlock__listItem}>Дата начала</li>
          <li className={styles.bookingBlock__listItem}>Дата завершения</li>
          <li className={styles.bookingBlock__listItem}>Страна</li>
          <li className={styles.bookingBlock__listItem}>Регион</li>
          <li className={styles.bookingBlock__listItem}>Язык</li>
        </ul>

        <ul className={styles.bookingBlock__table}>
          <li className={styles.bookingBlock__tableItem}>ID заказа</li>
          <li className={styles.bookingBlock__tableItem}>Действия</li>
          <li className={styles.bookingBlock__tableItem}>
            Имя путешественника
          </li>
          <li className={styles.bookingBlock__tableItem}>
            Название тура и даты
          </li>
          <li className={styles.bookingBlock__tableItem}>
            Кол-во путешественников
          </li>
          <li className={styles.bookingBlock__tableItem}>
            Статус бронирования
          </li>
        </ul>
        <hr className={styles.bookingBlock__line} />
      </div>
    </div>
  );
};
