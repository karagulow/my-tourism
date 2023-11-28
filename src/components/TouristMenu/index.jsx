import { Link } from 'react-router-dom';

import styles from './TouristMenu.module.scss';

export const TouristMenu = ({ setAuthorsTourOpen, setMenuOpen }) => {
  return (
    <div className={styles.menu}>
      <ul className={styles.menuList}>
        <li className={styles.menuList__item}>
          <Link
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            О нас
          </Link>
        </li>
        <li className={styles.menuList__item}>
          <Link
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Помощь
          </Link>
        </li>
      </ul>
      <ul className={styles.menuList}>
        <li className={styles.menuList__item}>₽ (RUB)</li>
        <li className={styles.menuList__item}>Рус</li>
      </ul>
      <ul className={styles.menuList}>
        <li className={styles.menuList__item}>
          <Link
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Чат
          </Link>
        </li>
        <li className={styles.menuList__item}>
          <Link
            to="/lk/tourist/booking"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Мои бронирования
          </Link>
        </li>
        <li className={styles.menuList__item}>
          <Link
            to="/lk/tourist/reviews"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Мои отзывы
          </Link>
        </li>
        <li className={styles.menuList__item}>
          <Link
            to="/lk/tourist/id"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Личный кабинет
          </Link>
        </li>
        <li className={styles.menuList__item}>
          <Link
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Персональная информация
          </Link>
        </li>
        <li className={styles.menuList__item}>
          <Link
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Урегулирование
          </Link>
        </li>
        <li className={styles.menuList__item}>
          <Link
            to="/lk/tourist/bonus"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Бонусная программа
          </Link>
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
