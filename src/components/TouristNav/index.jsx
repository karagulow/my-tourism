import { NavLink } from 'react-router-dom';

import styles from './TouristNav.module.scss';

const setActive = ({ isActive }) => (isActive ? styles.tourist_navActive : '');

export const TouristNav = () => {
  return (
    <div className={styles.tourist_nav}>
      <NavLink
        className={setActive}
        to="/lk/tourist/chat"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Чат
      </NavLink>
      <NavLink
        className={setActive}
        to="/lk/tourist/booking"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Мои бронирования
      </NavLink>
      <NavLink
        className={setActive}
        to="/lk/tourist/reviews"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Мои отзывы
      </NavLink>
      <NavLink
        className={setActive}
        to="/lk/tourist/id"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Личный кабинет
      </NavLink>
      <NavLink
        className={setActive}
        to="/lk/tourist/personal"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Персональная информация
      </NavLink>
      <NavLink
        className={setActive}
        to="/lk/tourist/regulation"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Урегулирование
      </NavLink>
      <NavLink
        className={setActive}
        to="/lk/tourist/bonus"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Бонусная программа
      </NavLink>
      <NavLink
        className={setActive}
        to="/"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Поддержка
      </NavLink>
    </div>
  );
};
