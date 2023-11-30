import styles from './GuideProfile.module.scss';

import avatar from '../../assets/img/user-avatar-null.svg';
import { GuideNav } from '../../components/GuideNav';

export const GuideProfile = () => {
  return (
    <div className={styles.profile}>
      <GuideNav />
      <div className={styles.profileBlock}>
        <h3 className={styles.profileBlock__title}>Профиль пользователя</h3>
        <div className={styles.profileBlock__content}>
          <h5 className={styles.profileBlock__contentTitle}>
            Условия работы с сервисом
          </h5>
          <div className={styles.profileBlock__contentConditions}>
            <div className={styles.profileBlock__contentConditions__item}>
              <p className={styles.profileBlock__contentConditions__itemTitle}>
                Комиссия:
              </p>
              <p className={styles.profileBlock__contentConditions__itemText}>
                10%
              </p>
            </div>
            <div className={styles.profileBlock__contentConditions__item}>
              <p className={styles.profileBlock__contentConditions__itemTitle}>
                Подписка (5 туров):
              </p>
              <p className={styles.profileBlock__contentConditions__itemText}>
                2999р/ мес
              </p>
            </div>
          </div>

          <h5 className={styles.profileBlock__contentTitle}>Личные данные</h5>
          <div className={styles.profileBlock__contentData}>
            <div className={styles.profileBlock__contentData__item}>
              <p className={styles.profileBlock__contentData__itemTitle}>Имя</p>
              <input
                className={styles.profileBlock__contentData__itemInput}
                type="text"
              />
            </div>

            <div className={styles.profileBlock__contentData__item}>
              <p className={styles.profileBlock__contentData__itemTitle}>
                Фамилия
              </p>
              <input
                className={styles.profileBlock__contentData__itemInput}
                type="text"
              />
            </div>

            <div className={styles.profileBlock__contentData__item}>
              <p className={styles.profileBlock__contentData__itemTitle}>
                Номер телефона
              </p>
              <input
                className={styles.profileBlock__contentData__itemInput}
                type="text"
              />
            </div>

            <div className={styles.profileBlock__contentData__item}>
              <p className={styles.profileBlock__contentData__itemTitle}>
                Электронная почта
              </p>
              <input
                className={styles.profileBlock__contentData__itemInput}
                type="text"
              />
            </div>

            <div className={styles.profileBlock__contentData__item}>
              <p className={styles.profileBlock__contentData__itemTitle}>
                Язык уведомлений
              </p>
              <input
                className={styles.profileBlock__contentData__itemInput}
                type="text"
              />
            </div>
          </div>

          <div className={styles.profileBlock__contentAbout}>
            <p className={styles.profileBlock__contentAbout__title}>
              Расскажите о себе, опыте
            </p>
            <textarea
              className={styles.profileBlock__contentAbout__input}
            ></textarea>
            <p className={styles.profileBlock__contentAbout__text}>
              Пожалуйста, не публикуйте названия компаний, контакты, бренды и
              ссылки. Публикации с подобной информацией могут быть удалены в
              одностороннем порядке
            </p>
          </div>

          <h5 className={styles.profileBlock__contentTitle}>Аватар</h5>
          <div className={styles.profileBlock__contentAvatar}>
            <img
              className={styles.profileBlock__contentAvatar__img}
              src={avatar}
              alt="avatar"
            />
            <button className={styles.profileBlock__contentAvatar__btn}>
              Добавить новый аватар
            </button>
          </div>

          <h5 className={styles.profileBlock__contentTitle}>
            Настройка Push-уведомлений
          </h5>
          <div className={styles.profileBlock__contentPush}>
            <button className={styles.profileBlock__contentPush__btn}>
              Подключить текущее устройство
            </button>
            <div className={styles.profileBlock__contentPush__check}>
              <div
                className={styles.profileBlock__contentPush__checkSquare}
              ></div>
              <p className={styles.profileBlock__contentPush__checkText}>
                Получать push-уведомления
              </p>
            </div>
            <p className={styles.profileBlock__contentPush__text}>
              Необходимо разрешить получение уведомлений в браузере
            </p>
          </div>

          <h5 className={styles.profileBlock__contentTitle}>Пароль</h5>
          <div className={styles.profileBlock__contentData}>
            <div className={styles.profileBlock__contentData__item}>
              <p className={styles.profileBlock__contentData__itemTitle}>
                Новый пароль
              </p>
              <input
                className={styles.profileBlock__contentData__itemInput}
                type="password"
              />
            </div>

            <div className={styles.profileBlock__contentData__item}>
              <p className={styles.profileBlock__contentData__itemTitle}>
                Подтверждение пароля
              </p>
              <input
                className={styles.profileBlock__contentData__itemInput}
                type="password"
              />
            </div>
          </div>

          <div className={styles.profileBlock__contentDelete}>
            <p className={styles.profileBlock__contentDelete__text}>
              Для удаления аккаунта обратитесь в чат нашей поддержки.
            </p>
            <p className={styles.profileBlock__contentDelete__btn}>Удалить</p>
          </div>
        </div>
        <button className={styles.profileBlock__btn}>
          Сохранить настройки профиля
        </button>
      </div>
    </div>
  );
};
