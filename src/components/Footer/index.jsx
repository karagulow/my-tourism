import styles from './Footer.module.scss';

import fundLogo from '../../assets/img/fund.png';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerWrapper}>
          <div className={styles.footerWrapper__about}>
            <div
              className={`${styles.footerWrapper__aboutCol} ${styles.footerWrapper__aboutFirst}`}
            >
              <div className={styles.footerWrapper__aboutCol__title}>
                Мой туризм
              </div>
              <ul className={styles.footerWrapper__aboutCol__list}>
                <li className={styles.footerWrapper__aboutCol__listItem}>
                  <p className={styles.footerWrapper__aboutCol__listItem__text}>
                    ООО "..."
                  </p>
                </li>
                <li className={styles.footerWrapper__aboutCol__listItem}>
                  <p className={styles.footerWrapper__aboutCol__listItem__text}>
                    Электронная почта
                  </p>
                </li>
                <li className={styles.footerWrapper__aboutCol__listItem}>
                  <p className={styles.footerWrapper__aboutCol__listItem__text}>
                    Номер телефона
                  </p>
                </li>
                <li className={styles.footerWrapper__aboutCol__listItem}>
                  <p className={styles.footerWrapper__aboutCol__listItem__text}>
                    Адрес регистрации
                  </p>
                </li>
                <li className={styles.footerWrapper__aboutCol__listItem}>
                  <p className={styles.footerWrapper__aboutCol__listItem__text}>
                    ООО "..." - это российская компания, работающая и
                    оказывающая услуги в области информационных технологий.
                  </p>
                </li>
                <li className={styles.footerWrapper__aboutCol__listItem}>
                  <p className={styles.footerWrapper__aboutCol__listItem__text}>
                    ООО «...» разработало и использует программный продукт —
                    сайт, который представляет собой маркетплейс авторских
                    туров, то есть онлайн площадку для организации путешествий.
                  </p>
                </li>
              </ul>
            </div>
            <div
              className={`${styles.footerWrapper__aboutCol} ${styles.footerWrapper__aboutSecond}`}
            >
              <div className={styles.footerWrapper__aboutCol__title}>
                Наши преимущества
              </div>
              <ul className={styles.footerWrapper__aboutCol__list}>
                <li className={styles.footerWrapper__aboutCol__listItem}>
                  <p
                    className={styles.footerWrapper__aboutCol__listItem__title}
                  >
                    Безопасная оплата
                  </p>
                  <p className={styles.footerWrapper__aboutCol__listItem__text}>
                    Бронируйте туры через нашу надежную платежную систему
                  </p>
                </li>
                <li className={styles.footerWrapper__aboutCol__listItem}>
                  <p
                    className={styles.footerWrapper__aboutCol__listItem__title}
                  >
                    Продуманная спонтанность
                  </p>
                  <p className={styles.footerWrapper__aboutCol__listItem__text}>
                    Маршруты могут адаптироваться под пожелания группы
                  </p>
                </li>
                <li className={styles.footerWrapper__aboutCol__listItem}>
                  <p
                    className={styles.footerWrapper__aboutCol__listItem__title}
                  >
                    Гарантированные туры
                  </p>
                  <p className={styles.footerWrapper__aboutCol__listItem__text}>
                    У нас вы найдете множество туров с гарантированным
                    отправлением
                  </p>
                </li>
                <li className={styles.footerWrapper__aboutCol__listItem}>
                  <p
                    className={styles.footerWrapper__aboutCol__listItem__title}
                  >
                    Небольшие группы
                  </p>
                  <p className={styles.footerWrapper__aboutCol__listItem__text}>
                    Особенная атмосфера в компании единомышленников
                  </p>
                </li>
              </ul>
            </div>
            <form className={styles.footerWrapper__aboutForm}>
              <p className={styles.footerWrapper__aboutForm__text}>
                Берем идеи для путешествий и дополняем их лучшими авторскими
                турами и высылаем вам два раза в месяц.
              </p>
              <input
                className={styles.footerWrapper__aboutForm__input}
                type="text"
                placeholder="Имя"
              />
              <input
                className={styles.footerWrapper__aboutForm__input}
                type="text"
                placeholder="Email"
              />
              <button className={styles.footerWrapper__aboutForm__btn}>
                Подписаться на рассылку
              </button>
            </form>
          </div>
          <div className={styles.footerWrapper__support}>
            <p className={styles.footerWrapper__supportText}>
              Проект реализован при поддержке Фонда Содействия Инновациям
            </p>
            <img
              src={fundLogo}
              alt="fund"
              className={styles.footerWrapper__supportImg}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
