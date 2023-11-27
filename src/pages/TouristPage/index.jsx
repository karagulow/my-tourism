import styles from './TouristPage.module.scss';

import { TouristNav } from '../../components/TouristNav';

export const TouristPage = () => {
  return (
    <div className={styles.tourist_page}>
      <TouristNav />
    </div>
  );
};
