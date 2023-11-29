import { Link } from 'react-router-dom';

import styles from './GuideMenu.module.scss';

export const GuideMenu = () => {
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
          <Link>Главная страница</Link>
        </li>
        <li className={styles.menuList__item}>
          <Link>Мой профиль</Link>
        </li>
        <li className={styles.menuList__item}>
          <Link>Моя команда</Link>
        </li>
        <li className={styles.menuList__item}>
          <Link>Настройка оповещений</Link>
        </li>
        <li className={styles.menuList__item}>
          <Link>Центр уведомлений</Link>
        </li>
        <li className={styles.menuList__item}>
          <Link>Мои туры</Link>
        </li>
        <li className={styles.menuList__item}>
          <Link>Заявки на бронирование</Link>
        </li>
        <li className={styles.menuList__item}>
          <Link>Оплаты</Link>
        </li>
        <li className={styles.menuList__item}>
          <Link>Путешественники</Link>
        </li>
        <li className={styles.menuList__item}>
          <Link>Урегулирование</Link>
        </li>
        <li className={styles.menuList__item}>
          <Link>Мои отзывы</Link>
        </li>
        <li className={styles.menuList__item}>
          <Link>Бонусный счет</Link>
        </li>
        <li className={styles.menuList__item}>
          <Link>Реквизиты и счета</Link>
        </li>
        <li className={styles.menuList__item}>
          <Link>Запросы на проверку туров</Link>
        </li>
        <li className={styles.menuList__item}>
          <Link>Поддержка</Link>
        </li>
      </ul>

      <button className={styles.menuBtn}>Создать новый тур</button>
    </div>
  );
};
