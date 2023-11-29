import styles from './GuideChat.module.scss';

import { GuideNav } from '../../components/GuideNav';
import { Chat } from '../../components/Chat';

export const GuideChat = () => {
  return (
    <div className={styles.guide_chat}>
      <GuideNav />
      <Chat />
    </div>
  );
};
