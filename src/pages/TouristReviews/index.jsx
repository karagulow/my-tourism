import { TouristNav } from '../../components/TouristNav';
import styles from './TouristReviews.module.scss';

export const TouristReviews = () => {
  return (
    <div className={styles.tourist_reviews}>
      <TouristNav />
      <div className={styles.tourist_reviewsBlock}>
        <h3 className={styles.tourist_reviewsBlock__title}>Отзывы</h3>
      </div>
    </div>
  );
};
