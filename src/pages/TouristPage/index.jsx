import styles from './TouristPage.module.scss';

import { TouristNav } from '../../components/TouristNav';

export const TouristPage = () => {
  return (
    <div className={styles.tourist_page}>
      <TouristNav />
      <div className={styles.tourist_pageBlock}>
        <h3 className={styles.tourist_pageBlock__title}>Аккаунт</h3>
        <p className={styles.tourist_pageBlock__text}>Фио, почта</p>
        <div className={styles.tourist_pageBlock__stats}>
          <div className={styles.tourist_pageBlock__statsItem}>
            <p className={styles.tourist_pageBlock__statsItem__number}>0</p>
            <p className={styles.tourist_pageBlock__statsItem__text}>
              Количество туров
            </p>
          </div>
          <div className={styles.tourist_pageBlock__statsItem}>
            <p className={styles.tourist_pageBlock__statsItem__number}>0</p>
            <p className={styles.tourist_pageBlock__statsItem__text}>
              Количество регионов
            </p>
          </div>
        </div>
        <hr className={styles.tourist_pageBlock__line} />
        <div className={styles.tourist_pageBlock__request}>
          <h3 className={styles.tourist_pageBlock__requestTitle}>
            Индивидуальный формат путешествий своей компанией!
          </h3>
          <p className={styles.tourist_pageBlock__requestText}>
            Если вы хотите отправиться в авторский тур только своей семьей,
            компанией друзей или единомышленников по уникальной программе,
            заполните заявку, и наши проверенные тревел-эксперты подготовят
            предложение специально для вас.
          </p>
          <button className={styles.tourist_pageBlock__requestBtn}>
            Заполнить заявку
          </button>
        </div>
      </div>
    </div>
  );
};
