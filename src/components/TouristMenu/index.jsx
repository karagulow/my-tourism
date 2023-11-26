import { Link } from 'react-router-dom';

import styles from './TouristMenu.module.scss';

export const TouristMenu = ({ setAuthorsTourOpen, setMenuOpen }) => {
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
        <li className={styles.menuList__item}>
          <Link>Чат</Link>
        </li>
        <li className={styles.menuList__item}>
          <Link>Мои бронирования</Link>
        </li>
        <li className={styles.menuList__item}>
          <Link>Мои отзывы</Link>
        </li>
        <li className={styles.menuList__item}>
          <Link>Личный кабинет</Link>
        </li>
        <li className={styles.menuList__item}>
          <Link>Персональная информация</Link>
        </li>
        <li className={styles.menuList__item}>
          <Link>Урегулирование</Link>
        </li>
        <li className={styles.menuList__item}>
          <Link>Бонусная программа</Link>
        </li>
      </ul>
      <ul className={styles.menuList}>
        <li className={styles.menuList__item}>Подобрать тур</li>
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
