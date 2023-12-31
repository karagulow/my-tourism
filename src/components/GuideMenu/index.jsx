import { Link } from 'react-router-dom';

import styles from './GuideMenu.module.scss';

export const GuideMenu = ({ setMenuOpen }) => {
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
          <Link
            to="/lk/guide/id"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Главная страница
          </Link>
        </li>
        <li className={styles.menuList__item}>
          <Link
            to="/lk/guide/profile"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Мой профиль
          </Link>
        </li>
        <li className={styles.menuList__item}>
          <Link
            to="/lk/guide/team"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Моя команда
          </Link>
        </li>
        <li className={styles.menuList__item}>
          <Link
            to="/lk/guide/notifications-settings"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Настройка оповещений
          </Link>
        </li>
        <li className={styles.menuList__item}>
          <Link
            to="/lk/guide/notifications"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Центр уведомлений
          </Link>
        </li>
        <li className={styles.menuList__item}>
          <Link
            to="/lk/guide/tours"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Мои туры
          </Link>
        </li>
        <li className={styles.menuList__item}>
          <Link
            to="/lk/guide/tours"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Заявки на бронирование
          </Link>
        </li>
        <li className={styles.menuList__item}>
          <Link
            to="/lk/guide/payments"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Оплаты
          </Link>
        </li>
        <li className={styles.menuList__item}>
          <Link
            to="/lk/guide/travelers"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Путешественники
          </Link>
        </li>
        <li className={styles.menuList__item}>
          <Link
            to="/lk/guide/regulation"
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
            to="/lk/guide/reviews"
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
            to="/lk/guide/history"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Бонусный счет
          </Link>
        </li>
        <li className={styles.menuList__item}>
          <Link
            to="/lk/guide/details"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Реквизиты и счета
          </Link>
        </li>
        <li className={styles.menuList__item}>
          <Link
            to="/lk/guide/request"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Запросы на проверку туров
          </Link>
        </li>
        <li className={styles.menuList__item}>
          <Link
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Поддержка
          </Link>
        </li>
      </ul>

      <Link to="/lk/guide/create-tour" className={styles.menuBtn}>
        Создать новый тур
      </Link>
    </div>
  );
};
