import styles from './TouristRegulation.module.scss';

import { TouristNav } from '../../components/TouristNav';

export const TouristRegulation = () => {
  return (
    <div className={styles.tourist_regulation}>
      <TouristNav />
      <div className={styles.tourist_regulationBlock}>
        <h3 className={styles.tourist_regulationBlock__title}>
          Решение разногласий
        </h3>
        <p className={styles.tourist_regulationBlock__text}>
          Отправить или запросить деньги, связанные с бронированием
          (дополнительные услуги/ сборы, возвраты или компенсацию ущерба).
        </p>
        <button className={styles.tourist_regulationBlock__btn}>
          Запрос возврата
        </button>
        <div className={styles.tourist_regulationBlock__request}>
          <h6 className={styles.tourist_regulationBlock__requestTitle}>
            Текущие заявки
          </h6>
          <p className={styles.tourist_regulationBlock__requestText}>
            Нет исходящих заявок
          </p>
        </div>
        <div className={styles.tourist_regulationBlock__request}>
          <h6 className={styles.tourist_regulationBlock__requestTitle}>
            Входящие заявки
          </h6>
          <p className={styles.tourist_regulationBlock__requestText}>
            Нет входящих заявок
          </p>
        </div>
      </div>
    </div>
  );
};
