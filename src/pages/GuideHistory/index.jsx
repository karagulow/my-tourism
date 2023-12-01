import { GuideNav } from '../../components/GuideNav';
import styles from './GuideHistory.module.scss';

export const GuideHistory = () => {
  return (
    <div className={styles.history}>
      <GuideNav />
      <div className={styles.historyBlock}>
        <h3 className={styles.historyBlock__title}>История транзакций</h3>
        <p className={styles.historyBlock__text}>
          Текущий баланс: <b>0 ₽</b>
        </p>
        <p className={styles.historyBlock__text}>Транзакции не найдены</p>
      </div>
    </div>
  );
};
