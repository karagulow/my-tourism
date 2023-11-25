import styles from './Home.module.scss';

import tourPhoto from '../../assets/img/tour-photo.jpeg';

export const Home = () => {
  return (
    <div className={styles.content}>
      <div className={styles.contentHeader}>
        <h1 className={styles.contentHeader__title}>
          Авторские туры - отличная возможность нестандартно погрузиться в
          путешествия
        </h1>
        <div className={styles.contentHeader__search}>
          <input
            className={styles.contentHeader__searchInput}
            type="text"
            placeholder="Куда вы хотите?"
          />
          <input
            className={styles.contentHeader__searchInput}
            type="text"
            placeholder="Месяц или даты"
          />
          <button className={styles.contentHeader__searchBtn}>Найти</button>
        </div>
      </div>

      <hr className={styles.contentLine} />

      <div className={styles.contentAdvantages}>
        <h3 className={styles.contentAdvantages__title}>Преимущества</h3>
        <ul className={styles.contentAdvantages__list}>
          <li className={styles.contentAdvantages__listItem}>
            <svg
              width="45"
              height="48"
              viewBox="0 0 45 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45 24.75C45 37.1768 34.9268 47.25 22.5 47.25C10.0737 47.25 0 37.1768 0 24.75C0 12.3237 10.0737 2.25 22.5 2.25C34.9268 2.25 45 12.3237 45 24.75Z"
                fill="#6F3903"
              />
              <path
                d="M45 22.5C45 34.9268 34.9268 45 22.5 45C10.0737 45 0 34.9268 0 22.5C0 10.0737 10.0737 0 22.5 0C34.9268 0 45 10.0737 45 22.5Z"
                fill="#964B00"
              />
              <path
                d="M31.5 15.75L18 29.25L12.375 23.625L7.59375 28.3499L13.2188 33.9749L17.7188 38.4749L18 38.6999L36.2812 20.4749L31.5 15.75Z"
                fill="#6F3903"
              />
              <path
                d="M31.5 13.5L18 27L12.375 21.375L7.59375 26.0999L13.2188 31.7249L17.7188 36.2249L18 36.4499L36.2812 18.2249L31.5 13.5Z"
                fill="#ECF0F1"
              />
            </svg>
            <div className={styles.contentAdvantages__listItem__right}>
              <h6 className={styles.contentAdvantages__listItem__rightTitle}>
                Безопасная транзакция
              </h6>
              <p className={styles.contentAdvantages__listItem__rightText}>
                Бронируйте и оплачивайте туры через нашу платформу. Организатор
                получит оплату только после проведения тура
              </p>
            </div>
          </li>
          <li className={styles.contentAdvantages__listItem}>
            <svg
              width="45"
              height="48"
              viewBox="0 0 45 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45 24.75C45 37.1768 34.9268 47.25 22.5 47.25C10.0737 47.25 0 37.1768 0 24.75C0 12.3237 10.0737 2.25 22.5 2.25C34.9268 2.25 45 12.3237 45 24.75Z"
                fill="#6F3903"
              />
              <path
                d="M45 22.5C45 34.9268 34.9268 45 22.5 45C10.0737 45 0 34.9268 0 22.5C0 10.0737 10.0737 0 22.5 0C34.9268 0 45 10.0737 45 22.5Z"
                fill="#964B00"
              />
              <path
                d="M31.5 15.75L18 29.25L12.375 23.625L7.59375 28.3499L13.2188 33.9749L17.7188 38.4749L18 38.6999L36.2812 20.4749L31.5 15.75Z"
                fill="#6F3903"
              />
              <path
                d="M31.5 13.5L18 27L12.375 21.375L7.59375 26.0999L13.2188 31.7249L17.7188 36.2249L18 36.4499L36.2812 18.2249L31.5 13.5Z"
                fill="#ECF0F1"
              />
            </svg>
            <div className={styles.contentAdvantages__listItem__right}>
              <h6 className={styles.contentAdvantages__listItem__rightTitle}>
                Адаптивность
              </h6>
              <p className={styles.contentAdvantages__listItem__rightText}>
                Маршруты корректируются в зависимости от предпочтений группы
              </p>
            </div>
          </li>
          <li className={styles.contentAdvantages__listItem}>
            <svg
              width="45"
              height="48"
              viewBox="0 0 45 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45 24.75C45 37.1768 34.9268 47.25 22.5 47.25C10.0737 47.25 0 37.1768 0 24.75C0 12.3237 10.0737 2.25 22.5 2.25C34.9268 2.25 45 12.3237 45 24.75Z"
                fill="#6F3903"
              />
              <path
                d="M45 22.5C45 34.9268 34.9268 45 22.5 45C10.0737 45 0 34.9268 0 22.5C0 10.0737 10.0737 0 22.5 0C34.9268 0 45 10.0737 45 22.5Z"
                fill="#964B00"
              />
              <path
                d="M31.5 15.75L18 29.25L12.375 23.625L7.59375 28.3499L13.2188 33.9749L17.7188 38.4749L18 38.6999L36.2812 20.4749L31.5 15.75Z"
                fill="#6F3903"
              />
              <path
                d="M31.5 13.5L18 27L12.375 21.375L7.59375 26.0999L13.2188 31.7249L17.7188 36.2249L18 36.4499L36.2812 18.2249L31.5 13.5Z"
                fill="#ECF0F1"
              />
            </svg>
            <div className={styles.contentAdvantages__listItem__right}>
              <h6 className={styles.contentAdvantages__listItem__rightTitle}>
                Проверенные гиды
              </h6>
              <p className={styles.contentAdvantages__listItem__rightText}>
                К публикации туров допускаются исключительно эксперты имеющие
                опыт в области туристических путешествий
              </p>
            </div>
          </li>
          <li className={styles.contentAdvantages__listItem}>
            <svg
              width="45"
              height="48"
              viewBox="0 0 45 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45 24.75C45 37.1768 34.9268 47.25 22.5 47.25C10.0737 47.25 0 37.1768 0 24.75C0 12.3237 10.0737 2.25 22.5 2.25C34.9268 2.25 45 12.3237 45 24.75Z"
                fill="#6F3903"
              />
              <path
                d="M45 22.5C45 34.9268 34.9268 45 22.5 45C10.0737 45 0 34.9268 0 22.5C0 10.0737 10.0737 0 22.5 0C34.9268 0 45 10.0737 45 22.5Z"
                fill="#964B00"
              />
              <path
                d="M31.5 15.75L18 29.25L12.375 23.625L7.59375 28.3499L13.2188 33.9749L17.7188 38.4749L18 38.6999L36.2812 20.4749L31.5 15.75Z"
                fill="#6F3903"
              />
              <path
                d="M31.5 13.5L18 27L12.375 21.375L7.59375 26.0999L13.2188 31.7249L17.7188 36.2249L18 36.4499L36.2812 18.2249L31.5 13.5Z"
                fill="#ECF0F1"
              />
            </svg>
            <div className={styles.contentAdvantages__listItem__right}>
              <h6 className={styles.contentAdvantages__listItem__rightTitle}>
                Комфорт
              </h6>
              <p className={styles.contentAdvantages__listItem__rightText}>
                Благодаря разнообразию туров вы можете выбрать подходящий по
                уровню комфорта
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.contentTours}>
        <div className={styles.contentTours__block}>
          <h3 className={styles.contentTours__blockTitle}>Популярные туры</h3>
          <ul className={styles.contentTours__blockList}>
            <li className={styles.contentTours__blockList__item}>
              <img src={tourPhoto} alt="tour" />
            </li>
            <li className={styles.contentTours__blockList__item}>
              <img src={tourPhoto} alt="tour" />
            </li>
            <li className={styles.contentTours__blockList__item}>
              <img src={tourPhoto} alt="tour" />
            </li>
            <li className={styles.contentTours__blockList__item}>
              <img src={tourPhoto} alt="tour" />
            </li>
            <li className={styles.contentTours__blockList__item}>
              <img src={tourPhoto} alt="tour" />
            </li>
          </ul>
        </div>
        <div className={styles.contentTours__block}>
          <h3 className={styles.contentTours__blockTitle}>Типы туров</h3>
          <ul className={styles.contentTours__blockList}>
            <li className={styles.contentTours__blockList__item}>
              <img src={tourPhoto} alt="tour" />
            </li>
            <li className={styles.contentTours__blockList__item}>
              <img src={tourPhoto} alt="tour" />
            </li>
            <li className={styles.contentTours__blockList__item}>
              <img src={tourPhoto} alt="tour" />
            </li>
            <li className={styles.contentTours__blockList__item}>
              <img src={tourPhoto} alt="tour" />
            </li>
            <li className={styles.contentTours__blockList__item}>
              <img src={tourPhoto} alt="tour" />
            </li>
          </ul>
        </div>
        <div className={styles.contentTours__block}>
          <h3 className={styles.contentTours__blockTitle}>
            Регионы, куда осуществляются поездки
          </h3>
          <ul className={styles.contentTours__blockList}>
            <li className={styles.contentTours__blockList__item}>
              <img src={tourPhoto} alt="tour" />
            </li>
            <li className={styles.contentTours__blockList__item}>
              <img src={tourPhoto} alt="tour" />
            </li>
            <li className={styles.contentTours__blockList__item}>
              <img src={tourPhoto} alt="tour" />
            </li>
            <li className={styles.contentTours__blockList__item}>
              <img src={tourPhoto} alt="tour" />
            </li>
            <li className={styles.contentTours__blockList__item}>
              <img src={tourPhoto} alt="tour" />
            </li>
          </ul>
        </div>
      </div>

      <hr className={styles.contentLine} />

      <div className={styles.contentSteps}>
        <h3 className={styles.contentSteps__title}>Как все устроено</h3>
        <ul className={styles.contentSteps__list}>
          <li className={styles.contentSteps__listItem}>
            <p className={styles.contentSteps__listItem__number}>1</p>
            <p className={styles.contentSteps__listItem__text}>
              Настройте фильтры, чтобы найти подходящий тур
            </p>
          </li>
          <li className={styles.contentSteps__listItem}>
            <p className={styles.contentSteps__listItem__number}>2</p>
            <p className={styles.contentSteps__listItem__text}>
              Задайте вопросы организатору через чат на сайте
            </p>
          </li>
          <li className={styles.contentSteps__listItem}>
            <p className={styles.contentSteps__listItem__number}>3</p>
            <p className={styles.contentSteps__listItem__text}>
              Бронируйте и оплачивайте тур через наш сервис
            </p>
          </li>
          <li className={styles.contentSteps__listItem}>
            <p className={styles.contentSteps__listItem__number}>4</p>
            <p className={styles.contentSteps__listItem__text}>
              Получайте предложения по лучшей цене
            </p>
          </li>
        </ul>
      </div>

      <hr className={styles.contentLine} />

      <div className={styles.contentRegion}>
        <ul className={styles.contentRegion__list}>
          <li className={styles.contentRegion__listItem}>
            Центральный федеральный округ
          </li>
          <li className={styles.contentRegion__listItem}>
            Северо-Западный федеральный округ
          </li>
          <li className={styles.contentRegion__listItem}>
            Южный федеральный округ
          </li>
          <li className={styles.contentRegion__listItem}>
            Приволжский федеральный округ
          </li>
          <li className={styles.contentRegion__listItem}>
            Уральский федеральный округ
          </li>
          <li className={styles.contentRegion__listItem}>
            Сибирский федеральный округ
          </li>
          <li className={styles.contentRegion__listItem}>
            Дальневосточный федеральный округ
          </li>
        </ul>
      </div>
    </div>
  );
};
