import { NavLink, Link } from 'react-router-dom';

import styles from './GuideNav.module.scss';

const setActive = ({ isActive }) => (isActive ? styles.guide_navActive : '');

export const GuideNav = () => {
  return (
    <div className={styles.guide_nav}>
      <NavLink className={setActive} to="/lk/guide/id">
        Главная страница
      </NavLink>
      <NavLink className={setActive} to="/lk/guide/profile">
        Мой профиль
      </NavLink>
      <NavLink className={setActive} to="/lk/guide/team">
        Моя команда
      </NavLink>
      <NavLink className={setActive} to="/">
        Настройка оповещений
      </NavLink>
      <NavLink className={setActive} to="/lk/guide/notifications">
        Центр уведомлений
      </NavLink>
      <NavLink className={setActive} to="/">
        Мои туры
      </NavLink>
      <NavLink className={setActive} to="/">
        Заявки на бронирование
      </NavLink>
      <NavLink className={setActive} to="/">
        Оплаты
      </NavLink>
      <NavLink className={setActive} to="/">
        Путешественники
      </NavLink>
      <NavLink className={setActive} to="/">
        Урегулирование
      </NavLink>
      <NavLink className={setActive} to="/">
        Мои отзывы
      </NavLink>
      <NavLink className={setActive} to="/">
        Бонусный счет
      </NavLink>
      <NavLink className={setActive} to="/">
        Реквизиты и счета
      </NavLink>
      <NavLink className={setActive} to="/">
        Запросы на проверку туров
      </NavLink>
      <Link className={styles.guide_navBtn}>Создать новый тур</Link>
    </div>
  );
};
