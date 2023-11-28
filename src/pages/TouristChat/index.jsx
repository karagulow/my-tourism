import styles from './TouristChat.module.scss';

import { TouristNav } from '../../components/TouristNav';
import { Chat } from '../../components/Chat';

export const TouristChat = () => {
  return (
    <div className={styles.tourist_chat}>
      <TouristNav />
      <Chat />
    </div>
  );
};
