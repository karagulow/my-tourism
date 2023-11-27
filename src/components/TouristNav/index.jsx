import { NavLink } from 'react-router-dom';

import styles from './TouristNav.module.scss';

const setActive = ({ isActive }) => (isActive ? styles.tourist_navActive : '');

export const TouristNav = () => {
  return (
    <div className={styles.tourist_nav}>
      <NavLink className={setActive} to="/">
        Чат
      </NavLink>
      <NavLink className={setActive} to="/">
        Мои бронирования
      </NavLink>
      <NavLink className={setActive} to="/">
        Мои отзывы
      </NavLink>
      <NavLink className={setActive} to="/lk/tourist/id">
        Личный кабинет
      </NavLink>
      <NavLink className={setActive} to="/">
        Персональная информация
      </NavLink>
      <NavLink className={setActive} to="/">
        Урегулирование
      </NavLink>
      <NavLink className={setActive} to="/">
        Бонусная программа
      </NavLink>
      <NavLink className={setActive} to="/">
        Поддержка
      </NavLink>
    </div>
  );
};
