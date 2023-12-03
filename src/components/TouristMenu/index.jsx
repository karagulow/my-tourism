import { Link } from 'react-router-dom';

import styles from './TouristMenu.module.scss';

export const TouristMenu = ({
  setSelectionTourOpen,
  setAuthorsTourOpen,
  setMenuOpen,
}) => {
  return (
    <div className={styles.menu}>
      <ul className={styles.menuList}>
        <li className={styles.menuList__item}>
          <Link
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            О нас
          </Link>
        </li>
        <li className={styles.menuList__item}>
          <Link
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo(0, 0);
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
            to="/lk/tourist/chat"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo(0, 0);
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
              window.scrollTo(0, 0);
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
              window.scrollTo(0, 0);
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
              window.scrollTo(0, 0);
            }}
          >
            Личный кабинет
          </Link>
        </li>
        <li className={styles.menuList__item}>
          <Link
            to="/lk/tourist/personal"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Персональная информация
          </Link>
        </li>
        <li className={styles.menuList__item}>
          <Link
            to="/lk/tourist/regulation"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo(0, 0);
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
              window.scrollTo(0, 0);
            }}
          >
            Бонусная программа
          </Link>
        </li>
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
