import { TouristNav } from '../../components/TouristNav';
import styles from './TouristInfo.module.scss';

export const TouristInfo = () => {
  return (
    <div className={styles.personal}>
      <TouristNav />
      <div className={styles.personalBlock}>
        <h3 className={styles.personalBlock__title}>Профиль пользователя</h3>
        <div className={styles.personalBlock__content}>
          <h6 className={styles.personalBlock__contentTitle}>Личные данные</h6>
          <div className={styles.personalBlock__contentGrid}>
            <p className={styles.personalBlock__contentGrid__name}>Аватар</p>
            <div className={styles.personalBlock__contentGrid__add}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.58044 6.57971C-0.985803 14.146 -0.985803 26.1744 6.58044 33.7406C14.1467 41.3068 26.1751 41.3068 33.7413 33.7406C41.3076 26.1744 41.3076 14.146 33.7413 6.57971C26.1751 -0.986535 14.1467 -0.986534 6.58044 6.57971ZM32.1893 21.7122H21.7129V32.1885L18.6088 32.1885L18.6088 21.7122L8.1325 21.7122V18.6081L18.6088 18.6081L18.6088 8.13176L21.7129 8.13176V18.6081H32.1893V21.7122Z"
                  fill="#964B00"
                />
              </svg>
            </div>

            <p className={styles.personalBlock__contentGrid__name}>Имя</p>
            <input
              className={styles.personalBlock__contentGrid__input}
              type="text"
            />

            <p className={styles.personalBlock__contentGrid__name}>Фамилия</p>
            <input
              className={styles.personalBlock__contentGrid__input}
              type="text"
            />

            <p className={styles.personalBlock__contentGrid__name}>
              Дата рождения
            </p>
            <div className={styles.personalBlock__contentGrid__date}>
              <input
                className={styles.personalBlock__contentGrid__dateInput}
                type="text"
              />
              <input
                className={styles.personalBlock__contentGrid__dateInput}
                type="text"
              />
              <input
                className={styles.personalBlock__contentGrid__dateInput}
                type="text"
              />
            </div>

            <p className={styles.personalBlock__contentGrid__name}>Пол</p>
            <input
              className={styles.personalBlock__contentGrid__input}
              type="text"
            />
          </div>
        </div>

        <div className={styles.personalBlock__content}>
          <h6 className={styles.personalBlock__contentTitle}>
            Контактная информация
          </h6>
          <div className={styles.personalBlock__contentGrid}>
            <p className={styles.personalBlock__contentGrid__name}>
              Номер телефона
            </p>
            <input
              className={styles.personalBlock__contentGrid__input}
              type="text"
            />

            <p className={styles.personalBlock__contentGrid__name}>
              Страна/регион
            </p>
            <input
              className={styles.personalBlock__contentGrid__input}
              type="text"
            />

            <p className={styles.personalBlock__contentGrid__name}>Город</p>
            <input
              className={styles.personalBlock__contentGrid__input}
              type="text"
            />

            <p className={styles.personalBlock__contentGrid__name}>
              Адрес проживания
            </p>
            <input
              className={styles.personalBlock__contentGrid__input}
              type="text"
            />

            <p className={styles.personalBlock__contentGrid__name}>Индекс</p>
            <input
              className={styles.personalBlock__contentGrid__input}
              type="text"
            />

            <p className={styles.personalBlock__contentGrid__name}>
              Электронная почта
            </p>
            <input
              className={styles.personalBlock__contentGrid__input}
              type="text"
            />
          </div>
        </div>

        <div className={styles.personalBlock__content}>
          <h6 className={styles.personalBlock__contentTitle}>Пароль</h6>
          <div className={styles.personalBlock__contentGrid}>
            <p className={styles.personalBlock__contentGrid__name}>
              Новый пароль
            </p>
            <input
              className={styles.personalBlock__contentGrid__input}
              type="password"
            />

            <p className={styles.personalBlock__contentGrid__name}>
              Подтверждение пароля
            </p>
            <input
              className={styles.personalBlock__contentGrid__input}
              type="password"
            />
          </div>
        </div>

        <div className={styles.personalBlock__content}>
          <h6 className={styles.personalBlock__contentTitle}>
            Дополнительные настройки
          </h6>
          <div className={styles.personalBlock__contentGrid}>
            <p className={styles.personalBlock__contentGrid__name}>
              Язык уведомлений
            </p>
            <div className={styles.personalBlock__contentGrid__other}>
              <input
                className={styles.personalBlock__contentGrid__input}
                type="text"
              />
              <button className={styles.personalBlock__contentGrid__otherBtn}>
                Подключить мессенджеры
              </button>
              <div className={styles.personalBlock__contentGrid__otherPush}>
                <div
                  className={
                    styles.personalBlock__contentGrid__otherPush__square
                  }
                ></div>
                <p
                  className={styles.personalBlock__contentGrid__otherPush__text}
                >
                  Получать Push-уведомления
                </p>
              </div>
              <button className={styles.personalBlock__contentGrid__otherBtn}>
                Стать тревел-экспертом
              </button>
            </div>
          </div>
        </div>

        <button className={styles.personalBlock__btn}>
          Сохранить настройки профиля
        </button>
      </div>
    </div>
  );
};
