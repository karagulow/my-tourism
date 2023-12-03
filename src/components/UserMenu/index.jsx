import { Link } from 'react-router-dom';

import styles from './UserMenu.module.scss';

export const UserMenu = ({
  setSelectionTourOpen,
  setAuthorsTourOpen,
  setMenuOpen,
}) => {
  return (
    <div className={styles.menu}>
      <ul className={styles.menuList}>
        <li className={styles.menuList__item}>
          <Link>О нас</Link>
        </li>
        <li className={styles.menuList__item}>
          <Link>Помощь</Link>
        </li>
      </ul>
      <ul className={styles.menuList}>
        <li className={styles.menuList__item}>₽ (RUB)</li>
        <li className={styles.menuList__item}>Рус</li>
      </ul>
      <ul className={styles.menuList}>
        <li
          className={styles.menuList__item}
          onClick={() => {
            setSelectionTourOpen(true);
            setMenuOpen(false);
          }}
        >
          Подобрать тур
        </li>
        <li
          className={styles.menuList__item}
          onClick={() => {
            setAuthorsTourOpen(true);
            setMenuOpen(false);
          }}
        >
          Что это такое
        </li>
      </ul>
    </div>
  );
};
