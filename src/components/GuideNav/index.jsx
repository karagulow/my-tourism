import { NavLink, Link } from 'react-router-dom';

import styles from './GuideNav.module.scss';

const setActive = ({ isActive }) => (isActive ? styles.guide_navActive : '');

export const GuideNav = () => {
  return (
    <div className={styles.guide_nav}>
      <NavLink
        className={setActive}
        to="/lk/guide/id"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Главная страница
      </NavLink>
      <NavLink
        className={setActive}
        to="/lk/guide/profile"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Мой профиль
      </NavLink>
      <NavLink
        className={setActive}
        to="/lk/guide/team"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Моя команда
      </NavLink>
      <NavLink
        className={setActive}
        to="/lk/guide/notifications-settings"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Настройка оповещений
      </NavLink>
      <NavLink
        className={setActive}
        to="/lk/guide/notifications"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Центр уведомлений
      </NavLink>
      <NavLink
        className={setActive}
        to="/lk/guide/tours"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Мои туры
      </NavLink>
      <NavLink
        className={setActive}
        to="/lk/guide/booking"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Заявки на бронирование
      </NavLink>
      <NavLink
        className={setActive}
        to="/lk/guide/payments"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Оплаты
      </NavLink>
      <NavLink
        className={setActive}
        to="/lk/guide/travelers"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Путешественники
      </NavLink>
      <NavLink
        className={setActive}
        to="/lk/guide/regulation"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Урегулирование
      </NavLink>
      <NavLink
        className={setActive}
        to="/lk/guide/reviews"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Мои отзывы
      </NavLink>
      <NavLink
        className={setActive}
        to="/lk/guide/history"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Бонусный счет
      </NavLink>
      <NavLink
        className={setActive}
        to="/lk/guide/details"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Реквизиты и счета
      </NavLink>
      <NavLink
        className={setActive}
        to="/lk/guide/request"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Запросы на проверку туров
      </NavLink>
      <Link
        className={styles.guide_navBtn}
        to="/lk/guide/create-tour"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Создать новый тур
      </Link>
    </div>
  );
};
