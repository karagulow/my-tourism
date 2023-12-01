import styles from './GuideTravelers.module.scss';

import { GuideNav } from '../../components/GuideNav';

export const GuideTravelers = () => {
  return (
    <div className={styles.travelers}>
      <GuideNav />
      <div className={styles.travelersBlock}>
        <h3 className={styles.travelersBlock__title}>Путешественники</h3>
      </div>
    </div>
  );
};
