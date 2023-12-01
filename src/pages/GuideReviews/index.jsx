import styles from './GuideReviews.module.scss';

import { GuideNav } from '../../components/GuideNav';

export const GuideReviews = () => {
  return (
    <div className={styles.reviews}>
      <GuideNav />
      <div className={styles.reviewsBlock}>
        <h3 className={styles.reviewsBlock__title}>Отзывы</h3>
        <div className={styles.reviewsBlock__list}>
          <div className={styles.reviewsBlock__listItem}>
            <p className={styles.reviewsBlock__listItem__title}>
              Публичные ответы на отзывы
            </p>
            <p className={styles.reviewsBlock__listItem__text}>
              В этом разделе вы сможете отслеживать обратную связь от туристов и
              публично отвечать на их комментарии. Старайтесь собирать отзывы на
              каждый тур, чтобы повысить рейтинг и заработать доверие клиентов.
              <br />
              <br />
              Рейтинг:{'   '}
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.25125 16.2496L4.6325 10.2784L0 6.26211L6.12 5.73086L8.5 0.0996094L10.88 5.73086L17 6.26211L12.3675 10.2784L13.7487 16.2496L8.5 13.0834L3.25125 16.2496Z"
                  fill="#964B00"
                />
              </svg>
              {'   '}
              ()
            </p>
          </div>
          <div className={styles.reviewsBlock__listItem}>
            <p className={styles.reviewsBlock__listItem__title}>
              Сторонние отзывы
            </p>
            <p className={styles.reviewsBlock__listItem__text}>
              Добавьте отзывы от ваших туристов не cнашего сайтаи повысьте
              привлекательность ваших туров на платформе. Отправьте им ссылку на
              тур.
            </p>
          </div>
        </div>
        <button className={styles.reviewsBlock__btn}>
          Сгенерировать ссылку
        </button>
      </div>
    </div>
  );
};
