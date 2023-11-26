import styles from './AuthorsTour.module.scss';

import girlPhoto from '../../assets/img/girl.jpeg';

export const AuthorsTour = ({ setAuthorsTourOpen }) => {
  return (
    <div className={styles.authors_tour}>
      <div
        className={styles.authors_tourClose}
        onClick={() => {
          setAuthorsTourOpen(false);
        }}
      >
        <svg
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.3125 0C10.767 0 0 10.767 0 24.3125C0 37.858 10.767 48.625 24.3125 48.625C37.858 48.625 48.625 37.858 48.625 24.3125C48.625 10.767 37.858 0 24.3125 0ZM33.6902 36.4688L24.3125 27.0911L14.9348 36.4688L12.1562 33.6902L21.5339 24.3125L12.1562 14.9348L14.9348 12.1562L24.3125 21.5339L33.6902 12.1562L36.4688 14.9348L27.0911 24.3125L36.4688 33.6902L33.6902 36.4688Z"
            fill="white"
          />
        </svg>
      </div>
      <div className={styles.authors_tourBlock}>
        <div className={styles.authors_tourBlock__header}>
          <h2 className={styles.authors_tourBlock__headerTitle}>
            Что такое авторские туры?
          </h2>
          <p className={styles.authors_tourBlock__headerText}>
            Это новый формат необычных путешествий в уникальные места
          </p>
          <ul className={styles.authors_tourBlock__headerList}>
            <li className={styles.authors_tourBlock__headerList__item}>
              <img
                className={styles.authors_tourBlock__headerList__itemImg}
                src={girlPhoto}
                alt="girl"
              />
              <p className={styles.authors_tourBlock__headerList__itemTitle}>
                Адаптивные маршруты
              </p>
              <p className={styles.authors_tourBlock__headerList__itemText}>
                Авторы туров могут изменять маршрут в зависимости от желания
                группы
              </p>
            </li>
            <li className={styles.authors_tourBlock__headerList__item}>
              <img
                className={styles.authors_tourBlock__headerList__itemImg}
                src={girlPhoto}
                alt="girl"
              />
              <p className={styles.authors_tourBlock__headerList__itemTitle}>
                Комфорт
              </p>
              <p className={styles.authors_tourBlock__headerList__itemText}>
                Благодаря разнообразию туров вы можете выбрать подходящий по
                уровню комфорта
              </p>
            </li>
            <li className={styles.authors_tourBlock__headerList__item}>
              <img
                className={styles.authors_tourBlock__headerList__itemImg}
                src={girlPhoto}
                alt="girl"
              />
              <p className={styles.authors_tourBlock__headerList__itemTitle}>
                Ответственная организация
              </p>
              <p className={styles.authors_tourBlock__headerList__itemText}>
                Проживание, питание и активности включены в путешествие
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.authors_tourBlock__advantages}>
          <ul className={styles.authors_tourBlock__advantagesList}>
            <li className={styles.authors_tourBlock__advantagesList__item}>
              <h6
                className={styles.authors_tourBlock__advantagesList__itemTitle}
              >
                Безопасная транзакция
              </h6>
              <p className={styles.authors_tourBlock__advantagesList__itemText}>
                Бронируйте и оплачивайте туры через нашу платформу. Организатор
                получит оплату только после проведения тура
              </p>
            </li>
            <li className={styles.authors_tourBlock__advantagesList__item}>
              <h6
                className={styles.authors_tourBlock__advantagesList__itemTitle}
              >
                Проверенные организаторы
              </h6>
              <p className={styles.authors_tourBlock__advantagesList__itemText}>
                Туры только с экспертами прошедшими тщательный отбор
              </p>
            </li>
            <li className={styles.authors_tourBlock__advantagesList__item}>
              <h6
                className={styles.authors_tourBlock__advantagesList__itemTitle}
              >
                Поддержка 24/7
              </h6>
              <p className={styles.authors_tourBlock__advantagesList__itemText}>
                Наши технические специалисты на связи 24 часа в сутки
              </p>
            </li>
            <li className={styles.authors_tourBlock__advantagesList__item}>
              <h6
                className={styles.authors_tourBlock__advantagesList__itemTitle}
              >
                Гарантия лучшей цены
              </h6>
              <p className={styles.authors_tourBlock__advantagesList__itemText}>
                Мы гарантируем самую низкую стоимость
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.authors_tourBlock__footer}>
          <h1 className={styles.authors_tourBlock__footerTitle}>
            Как бронировать?
          </h1>
          <ul className={styles.authors_tourBlock__footerList}>
            <li className={styles.authors_tourBlock__footerList__item}>
              <div className={styles.authors_tourBlock__footerList__itemNumber}>
                1
              </div>
              <p className={styles.authors_tourBlock__footerList__itemText}>
                Выберите тур
              </p>
            </li>
            <li className={styles.authors_tourBlock__footerList__item}>
              <div className={styles.authors_tourBlock__footerList__itemNumber}>
                2
              </div>
              <p className={styles.authors_tourBlock__footerList__itemText}>
                Уточните все детали
              </p>
            </li>
            <li className={styles.authors_tourBlock__footerList__item}>
              <div className={styles.authors_tourBlock__footerList__itemNumber}>
                3
              </div>
              <p className={styles.authors_tourBlock__footerList__itemText}>
                Забронируйте место
              </p>
            </li>
          </ul>
          <button className={styles.authors_tourBlock__footerBtn}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
