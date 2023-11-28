import styles from './TouristBooking.module.scss';

import { TouristNav } from '../../components/TouristNav';

export const TouristBooking = () => {
  return (
    <div className={styles.tourist_booking}>
      <TouristNav />
      <div className={styles.tourist_bookingBlock}>
        <h3 className={styles.tourist_bookingBlock__title}>
          История бронирования
        </h3>
        <p className={styles.tourist_bookingBlock__text}>
          У ВАС НЕТ АКТИВНЫХ ЗАЯВОК
        </p>
      </div>
    </div>
  );
};
