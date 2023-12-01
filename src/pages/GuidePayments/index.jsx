import styles from './GuidePayments.module.scss';

import { GuideNav } from '../../components/GuideNav';

export const GuidePayments = () => {
  return (
    <div className={styles.payments}>
      <GuideNav />
      <div className={styles.paymentsBlock}>
        <ul className={styles.paymentsBlock__list}>
          <li className={styles.paymentsBlock__listItem}>Название тура</li>
          <li className={styles.paymentsBlock__listItem}>Дата транзакции</li>
          <li className={styles.paymentsBlock__listItem}>Дата начала</li>
          <li className={styles.paymentsBlock__listItem}>Дата завершения</li>
        </ul>

        <ul className={styles.paymentsBlock__table}>
          <li className={styles.paymentsBlock__tableItem}>ID транзакции</li>
          <li className={styles.paymentsBlock__tableItem}>Действия</li>
          <li className={styles.paymentsBlock__tableItem}>Дата транзакции</li>
          <li className={styles.paymentsBlock__tableItem}>ID заказа</li>
          <li className={styles.paymentsBlock__tableItem}>Название тура</li>
          <li className={styles.paymentsBlock__tableItem}>Дата начала</li>
          <li className={styles.paymentsBlock__tableItem}>Дата завершения</li>
          <li className={styles.paymentsBlock__tableItem}>
            Имя путешественника
          </li>
          <li className={styles.paymentsBlock__tableItem}>
            Кол-во путешественников
          </li>
          <li className={styles.paymentsBlock__tableItem}>Сумма брони</li>
          <li className={styles.paymentsBlock__tableItem}>Сумма депозита</li>
        </ul>
        <hr className={styles.paymentsBlock__line} />
      </div>
    </div>
  );
};
