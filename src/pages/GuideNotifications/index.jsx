import { GuideNav } from '../../components/GuideNav';
import styles from './GuideNotifications.module.scss';

export const GuideNotifications = () => {
  return (
    <div className={styles.notifications}>
      <GuideNav />
      <div className={styles.notificationsBlock}>
        <div className={styles.notificationsBlock__top}>
          <h3 className={styles.notificationsBlock__topTitle}>
            Центр уведомлений
          </h3>
          <p className={styles.notificationsBlock__topText}>
            Отметить все прочитанными
          </p>
        </div>

        <ul className={styles.notificationsBlock__list}>
          <li className={styles.notificationsBlock__listItem}>
            <div className={styles.notificationsBlock__listItem__left}>
              <div
                className={styles.notificationsBlock__listItem__leftCircle}
              ></div>
              <div className={styles.notificationsBlock__listItem__leftContent}>
                <p
                  className={
                    styles.notificationsBlock__listItem__leftContent__text
                  }
                >
                  Давайте познакомимся! Для начала заполните ваш профиль на
                  сайте: добавьте личную фотографию и расскажите о себе в
                  описании. Помните, что мы не размещаем информацию о компании,
                  ссылки на сторонние сервисы и номера телефонов
                </p>
                <p
                  className={
                    styles.notificationsBlock__listItem__leftContent__date
                  }
                >
                  Сегодня
                </p>
              </div>
            </div>

            <button className={styles.notificationsBlock__listItem__btn}>
              Заполнить профиль
            </button>
          </li>

          <li className={styles.notificationsBlock__listItem}>
            <div className={styles.notificationsBlock__listItem__left}>
              <div
                className={styles.notificationsBlock__listItem__leftCircle}
              ></div>
              <div className={styles.notificationsBlock__listItem__leftContent}>
                <p
                  className={
                    styles.notificationsBlock__listItem__leftContent__text
                  }
                >
                  Добро пожаловать на Мой Туризм! Рады, что вы к нам
                  присоединились! Перед началом работы ознакомьтесь, пожалуйста,
                  с условиями сотрудничества
                </p>
                <p
                  className={
                    styles.notificationsBlock__listItem__leftContent__date
                  }
                >
                  Сегодня
                </p>
              </div>
            </div>

            <button className={styles.notificationsBlock__listItem__btn}>
              Ознакомиться с условиями
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
