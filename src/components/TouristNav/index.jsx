import { NavLink } from 'react-router-dom';

import styles from './TouristNav.module.scss';

const setActive = ({ isActive }) => (isActive ? styles.tourist_navActive : '');

export const TouristNav = () => {
  return (
    <div className={styles.tourist_nav}>
      <NavLink className={setActive} to="/lk/tourist/chat">
        Чат
      </NavLink>
      <NavLink className={setActive} to="/lk/tourist/booking">
        Мои бронирования
      </NavLink>
      <NavLink className={setActive} to="/lk/tourist/reviews">
        Мои отзывы
      </NavLink>
      <NavLink className={setActive} to="/lk/tourist/id">
        Личный кабинет
      </NavLink>
      <NavLink className={setActive} to="/lk/tourist/personal">
        Персональная информация
      </NavLink>
      <NavLink className={setActive} to="/lk/tourist/regulation">
        Урегулирование
      </NavLink>
      <NavLink className={setActive} to="/lk/tourist/bonus">
        Бонусная программа
      </NavLink>
      <NavLink className={setActive} to="/">
        Поддержка
      </NavLink>
    </div>
  );
};
