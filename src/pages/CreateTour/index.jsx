import styles from './CreateTour.module.scss';

import { GuideNav } from '../../components/GuideNav';

export const CreateTour = () => {
  return (
    <div className={styles.create_tour}>
      <GuideNav />
      <div className={styles.create_tourBlock}>
        <h3 className={styles.create_tourBlock__title}>Создание тура</h3>
        <hr className={styles.create_tourBlock__line} />
        <div className={styles.create_tourBlock__content}>
          <h6 className={styles.create_tourBlock__contentTitle}>
            Индивидуальный тур
          </h6>
          <div className={styles.create_tourBlock__contentItem}>
            <p className={styles.create_tourBlock__contentItem__text}>
              Этот тур может продаваться как индивидуальный тур
            </p>
            <div className={styles.create_tourBlock__contentItem__check}></div>
          </div>
          <div className={styles.create_tourBlock__contentItem}>
            <p className={styles.create_tourBlock__contentItem__text}>
              Предварительная стоимость тура в день за человека
            </p>
            <input
              type="text"
              placeholder="0 ₽"
              className={styles.create_tourBlock__contentItem__input}
            />
          </div>
        </div>

        <div className={styles.create_tourBlock__content}>
          <h6 className={styles.create_tourBlock__contentTitle}>Общее</h6>
          <div className={styles.create_tourBlock__contentItem}>
            <p className={styles.create_tourBlock__contentItem__text}>
              Название тура*
            </p>
            <input
              type="text"
              className={styles.create_tourBlock__contentItem__input}
            />
            <div className={styles.create_tourBlock__contentItem__warning}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0C11.3869 0 13.6761 0.948211 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948211 13.6761 0 11.3869 0 9C0 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948211 6.61305 0 9 0ZM9 16.7143C11.046 16.7143 13.0081 15.9015 14.4548 14.4548C15.9015 13.0081 16.7143 11.046 16.7143 9C16.7143 6.95404 15.9015 4.99189 14.4548 3.54518C13.0081 2.09847 11.046 1.28571 9 1.28571C6.95404 1.28571 4.99189 2.09847 3.54518 3.54518C2.09847 4.99189 1.28571 6.95404 1.28571 9C1.28571 11.046 2.09847 13.0081 3.54518 14.4548C4.99189 15.9015 6.95404 16.7143 9 16.7143ZM9.96429 13.1786C9.96429 13.4343 9.86269 13.6796 9.68185 13.8604C9.50101 14.0413 9.25574 14.1429 9 14.1429C8.74426 14.1429 8.49899 14.0413 8.31815 13.8604C8.13731 13.6796 8.03571 13.4343 8.03571 13.1786C8.03571 12.9228 8.13731 12.6776 8.31815 12.4967C8.49899 12.3159 8.74426 12.2143 9 12.2143C9.25574 12.2143 9.50101 12.3159 9.68185 12.4967C9.86269 12.6776 9.96429 12.9228 9.96429 13.1786ZM9 3.85714C9.1705 3.85714 9.33401 3.92487 9.45457 4.04543C9.57513 4.16599 9.64286 4.3295 9.64286 4.5V10.2857C9.64286 10.4562 9.57513 10.6197 9.45457 10.7403C9.33401 10.8608 9.1705 10.9286 9 10.9286C8.8295 10.9286 8.66599 10.8608 8.54543 10.7403C8.42487 10.6197 8.35714 10.4562 8.35714 10.2857V4.5C8.35714 4.3295 8.42487 4.16599 8.54543 4.04543C8.66599 3.92487 8.8295 3.85714 9 3.85714Z"
                  fill="#964B00"
                />
              </svg>
              <p className={styles.create_tourBlock__contentItem__warningText}>
                Максимум 50 символов.
              </p>
            </div>
          </div>

          <div className={styles.create_tourBlock__contentItem}>
            <p className={styles.create_tourBlock__contentItem__text}>
              Основной тип тура*
            </p>
            <input
              type="text"
              className={styles.create_tourBlock__contentItem__input}
            />
          </div>

          <div className={styles.create_tourBlock__contentItem}>
            <p className={styles.create_tourBlock__contentItem__text}>
              Дополнительные типы тура
            </p>
            <input
              type="text"
              className={styles.create_tourBlock__contentItem__input}
            />
            <div className={styles.create_tourBlock__contentItem__warning}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0C11.3869 0 13.6761 0.948211 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948211 13.6761 0 11.3869 0 9C0 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948211 6.61305 0 9 0ZM9 16.7143C11.046 16.7143 13.0081 15.9015 14.4548 14.4548C15.9015 13.0081 16.7143 11.046 16.7143 9C16.7143 6.95404 15.9015 4.99189 14.4548 3.54518C13.0081 2.09847 11.046 1.28571 9 1.28571C6.95404 1.28571 4.99189 2.09847 3.54518 3.54518C2.09847 4.99189 1.28571 6.95404 1.28571 9C1.28571 11.046 2.09847 13.0081 3.54518 14.4548C4.99189 15.9015 6.95404 16.7143 9 16.7143ZM9.96429 13.1786C9.96429 13.4343 9.86269 13.6796 9.68185 13.8604C9.50101 14.0413 9.25574 14.1429 9 14.1429C8.74426 14.1429 8.49899 14.0413 8.31815 13.8604C8.13731 13.6796 8.03571 13.4343 8.03571 13.1786C8.03571 12.9228 8.13731 12.6776 8.31815 12.4967C8.49899 12.3159 8.74426 12.2143 9 12.2143C9.25574 12.2143 9.50101 12.3159 9.68185 12.4967C9.86269 12.6776 9.96429 12.9228 9.96429 13.1786ZM9 3.85714C9.1705 3.85714 9.33401 3.92487 9.45457 4.04543C9.57513 4.16599 9.64286 4.3295 9.64286 4.5V10.2857C9.64286 10.4562 9.57513 10.6197 9.45457 10.7403C9.33401 10.8608 9.1705 10.9286 9 10.9286C8.8295 10.9286 8.66599 10.8608 8.54543 10.7403C8.42487 10.6197 8.35714 10.4562 8.35714 10.2857V4.5C8.35714 4.3295 8.42487 4.16599 8.54543 4.04543C8.66599 3.92487 8.8295 3.85714 9 3.85714Z"
                  fill="#964B00"
                />
              </svg>
              <p className={styles.create_tourBlock__contentItem__warningText}>
                Основной тип тура отображается в карточке тура в каталоге. Все
                возможные типы туров вы можете посмотреть здесь.
              </p>
            </div>
          </div>

          <div className={styles.create_tourBlock__contentItem}>
            <p className={styles.create_tourBlock__contentItem__text}>
              Страна тура*
            </p>
            <input
              type="text"
              className={styles.create_tourBlock__contentItem__input}
            />
          </div>

          <div className={styles.create_tourBlock__contentItem}>
            <p className={styles.create_tourBlock__contentItem__text}>
              Регион*
            </p>
            <input
              type="text"
              className={styles.create_tourBlock__contentItem__input}
            />
            <div className={styles.create_tourBlock__contentItem__warning}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0C11.3869 0 13.6761 0.948211 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948211 13.6761 0 11.3869 0 9C0 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948211 6.61305 0 9 0ZM9 16.7143C11.046 16.7143 13.0081 15.9015 14.4548 14.4548C15.9015 13.0081 16.7143 11.046 16.7143 9C16.7143 6.95404 15.9015 4.99189 14.4548 3.54518C13.0081 2.09847 11.046 1.28571 9 1.28571C6.95404 1.28571 4.99189 2.09847 3.54518 3.54518C2.09847 4.99189 1.28571 6.95404 1.28571 9C1.28571 11.046 2.09847 13.0081 3.54518 14.4548C4.99189 15.9015 6.95404 16.7143 9 16.7143ZM9.96429 13.1786C9.96429 13.4343 9.86269 13.6796 9.68185 13.8604C9.50101 14.0413 9.25574 14.1429 9 14.1429C8.74426 14.1429 8.49899 14.0413 8.31815 13.8604C8.13731 13.6796 8.03571 13.4343 8.03571 13.1786C8.03571 12.9228 8.13731 12.6776 8.31815 12.4967C8.49899 12.3159 8.74426 12.2143 9 12.2143C9.25574 12.2143 9.50101 12.3159 9.68185 12.4967C9.86269 12.6776 9.96429 12.9228 9.96429 13.1786ZM9 3.85714C9.1705 3.85714 9.33401 3.92487 9.45457 4.04543C9.57513 4.16599 9.64286 4.3295 9.64286 4.5V10.2857C9.64286 10.4562 9.57513 10.6197 9.45457 10.7403C9.33401 10.8608 9.1705 10.9286 9 10.9286C8.8295 10.9286 8.66599 10.8608 8.54543 10.7403C8.42487 10.6197 8.35714 10.4562 8.35714 10.2857V4.5C8.35714 4.3295 8.42487 4.16599 8.54543 4.04543C8.66599 3.92487 8.8295 3.85714 9 3.85714Z"
                  fill="#964B00"
                />
              </svg>
              <p className={styles.create_tourBlock__contentItem__warningText}>
                Для путешествий по России не забудьте добавить регион, чтобы ваш
                тур попал в соответствующий фильтр на сайте
              </p>
            </div>
          </div>

          <div className={styles.create_tourBlock__contentItem}>
            <p className={styles.create_tourBlock__contentItem__text}>
              Старт путешествия (город)*
            </p>
            <input
              type="text"
              className={styles.create_tourBlock__contentItem__input}
            />
            <div className={styles.create_tourBlock__contentItem__warning}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0C11.3869 0 13.6761 0.948211 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948211 13.6761 0 11.3869 0 9C0 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948211 6.61305 0 9 0ZM9 16.7143C11.046 16.7143 13.0081 15.9015 14.4548 14.4548C15.9015 13.0081 16.7143 11.046 16.7143 9C16.7143 6.95404 15.9015 4.99189 14.4548 3.54518C13.0081 2.09847 11.046 1.28571 9 1.28571C6.95404 1.28571 4.99189 2.09847 3.54518 3.54518C2.09847 4.99189 1.28571 6.95404 1.28571 9C1.28571 11.046 2.09847 13.0081 3.54518 14.4548C4.99189 15.9015 6.95404 16.7143 9 16.7143ZM9.96429 13.1786C9.96429 13.4343 9.86269 13.6796 9.68185 13.8604C9.50101 14.0413 9.25574 14.1429 9 14.1429C8.74426 14.1429 8.49899 14.0413 8.31815 13.8604C8.13731 13.6796 8.03571 13.4343 8.03571 13.1786C8.03571 12.9228 8.13731 12.6776 8.31815 12.4967C8.49899 12.3159 8.74426 12.2143 9 12.2143C9.25574 12.2143 9.50101 12.3159 9.68185 12.4967C9.86269 12.6776 9.96429 12.9228 9.96429 13.1786ZM9 3.85714C9.1705 3.85714 9.33401 3.92487 9.45457 4.04543C9.57513 4.16599 9.64286 4.3295 9.64286 4.5V10.2857C9.64286 10.4562 9.57513 10.6197 9.45457 10.7403C9.33401 10.8608 9.1705 10.9286 9 10.9286C8.8295 10.9286 8.66599 10.8608 8.54543 10.7403C8.42487 10.6197 8.35714 10.4562 8.35714 10.2857V4.5C8.35714 4.3295 8.42487 4.16599 8.54543 4.04543C8.66599 3.92487 8.8295 3.85714 9 3.85714Z"
                  fill="#964B00"
                />
              </svg>
              <p className={styles.create_tourBlock__contentItem__warningText}>
                Если вашего города нет в списке, оставьте поле пустым
              </p>
            </div>
          </div>

          <div className={styles.create_tourBlock__contentItem}>
            <p className={styles.create_tourBlock__contentItem__text}>
              Время прибытия (местное)
            </p>
            <input
              type="text"
              className={styles.create_tourBlock__contentItem__input}
            />
          </div>

          <div className={styles.create_tourBlock__contentItem}>
            <p className={styles.create_tourBlock__contentItem__text}>
              Финиш (город)*
            </p>
            <input
              type="text"
              className={styles.create_tourBlock__contentItem__input}
            />
          </div>

          <div className={styles.create_tourBlock__contentItem}>
            <p className={styles.create_tourBlock__contentItem__text}>
              Время окончания тура (местное)
            </p>
            <input
              type="text"
              className={styles.create_tourBlock__contentItem__input}
            />
          </div>

          <div className={styles.create_tourBlock__contentItem}>
            <p className={styles.create_tourBlock__contentItem__text}>
              Прямая ссылка на тур на вашем сайте
            </p>
            <input
              type="text"
              className={styles.create_tourBlock__contentItem__input}
            />
            <div className={styles.create_tourBlock__contentItem__warning}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0C11.3869 0 13.6761 0.948211 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948211 13.6761 0 11.3869 0 9C0 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948211 6.61305 0 9 0ZM9 16.7143C11.046 16.7143 13.0081 15.9015 14.4548 14.4548C15.9015 13.0081 16.7143 11.046 16.7143 9C16.7143 6.95404 15.9015 4.99189 14.4548 3.54518C13.0081 2.09847 11.046 1.28571 9 1.28571C6.95404 1.28571 4.99189 2.09847 3.54518 3.54518C2.09847 4.99189 1.28571 6.95404 1.28571 9C1.28571 11.046 2.09847 13.0081 3.54518 14.4548C4.99189 15.9015 6.95404 16.7143 9 16.7143ZM9.96429 13.1786C9.96429 13.4343 9.86269 13.6796 9.68185 13.8604C9.50101 14.0413 9.25574 14.1429 9 14.1429C8.74426 14.1429 8.49899 14.0413 8.31815 13.8604C8.13731 13.6796 8.03571 13.4343 8.03571 13.1786C8.03571 12.9228 8.13731 12.6776 8.31815 12.4967C8.49899 12.3159 8.74426 12.2143 9 12.2143C9.25574 12.2143 9.50101 12.3159 9.68185 12.4967C9.86269 12.6776 9.96429 12.9228 9.96429 13.1786ZM9 3.85714C9.1705 3.85714 9.33401 3.92487 9.45457 4.04543C9.57513 4.16599 9.64286 4.3295 9.64286 4.5V10.2857C9.64286 10.4562 9.57513 10.6197 9.45457 10.7403C9.33401 10.8608 9.1705 10.9286 9 10.9286C8.8295 10.9286 8.66599 10.8608 8.54543 10.7403C8.42487 10.6197 8.35714 10.4562 8.35714 10.2857V4.5C8.35714 4.3295 8.42487 4.16599 8.54543 4.04543C8.66599 3.92487 8.8295 3.85714 9 3.85714Z"
                  fill="#964B00"
                />
              </svg>
              <p className={styles.create_tourBlock__contentItem__warningText}>
                Если вы добавите ссылку, это ускорит модерацию тура
              </p>
            </div>
          </div>
        </div>

        <div className={styles.create_tourBlock__content}>
          <h6 className={styles.create_tourBlock__contentTitle}>Цены и даты</h6>
          <div className={styles.create_tourBlock__contentItem}>
            <p className={styles.create_tourBlock__contentItem__text}>
              Стоимость
            </p>
            <input
              type="text"
              className={styles.create_tourBlock__contentItem__input}
            />
            <div className={styles.create_tourBlock__contentItem__warning}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0C11.3869 0 13.6761 0.948211 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948211 13.6761 0 11.3869 0 9C0 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948211 6.61305 0 9 0ZM9 16.7143C11.046 16.7143 13.0081 15.9015 14.4548 14.4548C15.9015 13.0081 16.7143 11.046 16.7143 9C16.7143 6.95404 15.9015 4.99189 14.4548 3.54518C13.0081 2.09847 11.046 1.28571 9 1.28571C6.95404 1.28571 4.99189 2.09847 3.54518 3.54518C2.09847 4.99189 1.28571 6.95404 1.28571 9C1.28571 11.046 2.09847 13.0081 3.54518 14.4548C4.99189 15.9015 6.95404 16.7143 9 16.7143ZM9.96429 13.1786C9.96429 13.4343 9.86269 13.6796 9.68185 13.8604C9.50101 14.0413 9.25574 14.1429 9 14.1429C8.74426 14.1429 8.49899 14.0413 8.31815 13.8604C8.13731 13.6796 8.03571 13.4343 8.03571 13.1786C8.03571 12.9228 8.13731 12.6776 8.31815 12.4967C8.49899 12.3159 8.74426 12.2143 9 12.2143C9.25574 12.2143 9.50101 12.3159 9.68185 12.4967C9.86269 12.6776 9.96429 12.9228 9.96429 13.1786ZM9 3.85714C9.1705 3.85714 9.33401 3.92487 9.45457 4.04543C9.57513 4.16599 9.64286 4.3295 9.64286 4.5V10.2857C9.64286 10.4562 9.57513 10.6197 9.45457 10.7403C9.33401 10.8608 9.1705 10.9286 9 10.9286C8.8295 10.9286 8.66599 10.8608 8.54543 10.7403C8.42487 10.6197 8.35714 10.4562 8.35714 10.2857V4.5C8.35714 4.3295 8.42487 4.16599 8.54543 4.04543C8.66599 3.92487 8.8295 3.85714 9 3.85714Z"
                  fill="#964B00"
                />
              </svg>
              <p className={styles.create_tourBlock__contentItem__warningText}>
                Если вы выбираете моментальное бронирование - оплата с клиента
                будет списываться в момент бронирования без вашего подтверждения
              </p>
            </div>
          </div>

          <div className={styles.create_tourBlock__contentItem}>
            <p className={styles.create_tourBlock__contentItem__text}>Дата</p>
            <div className={styles.create_tourBlock__contentItem__data}>
              <input
                type="text"
                placeholder="с"
                className={styles.create_tourBlock__contentItem__dataInput}
              />
              <p>—</p>
              <input
                type="text"
                placeholder="по"
                className={styles.create_tourBlock__contentItem__dataInput}
              />
            </div>
          </div>
        </div>

        <button className={styles.create_tourBlock__btn}>Создать тур</button>
      </div>
    </div>
  );
};
