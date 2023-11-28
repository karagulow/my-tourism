import styles from './TouristBonus.module.scss';

import { TouristNav } from '../../components/TouristNav';

export const TouristBonus = () => {
  return (
    <div className={styles.tourist_bonus}>
      <TouristNav />
      <div className={styles.tourist_bonusBlock}>
        <div className={styles.tourist_bonusBlock__stats}>
          <div className={styles.tourist_bonusBlock__statsItem}>
            <h4 className={styles.tourist_bonusBlock__statsItem__title}>
              Вернётся баллами
            </h4>
            <p className={styles.tourist_bonusBlock__statsItem__text}>
              Начислим баллы после первой поездки
            </p>
            <p className={styles.tourist_bonusBlock__statsItem__text}>
              <strong>Начинающий путешественник</strong>
            </p>
          </div>
          <div className={styles.tourist_bonusBlock__statsItem}>
            <h4 className={styles.tourist_bonusBlock__statsItem__title}>
              Ваш баланс
            </h4>
            <p className={styles.tourist_bonusBlock__statsItem__text}>
              <strong>0 баллов</strong>
            </p>
            <p className={styles.tourist_bonusBlock__statsItem__text}>
              1 балл = 1 ₽
            </p>
          </div>
          <div className={styles.tourist_bonusBlock__statsItem}>
            <h4 className={styles.tourist_bonusBlock__statsItem__title}>
              Вы потратили на туры
            </h4>
            <p className={styles.tourist_bonusBlock__statsItem__text}>
              <strong>0 ₽</strong>
            </p>
            <p className={styles.tourist_bonusBlock__statsItem__text}>
              Съездите с нами в любой тур, чтобы стать участником бонусной
              программы
            </p>
          </div>
        </div>

        <div className={styles.tourist_bonusBlock__content}>
          <h4 className={styles.tourist_bonusBlock__contentTitle}>
            Как стать участником бонусной программы?
          </h4>
          <ul className={styles.tourist_bonusBlock__contentList}>
            <li className={styles.tourist_bonusBlock__contentList__item}>
              1. Отправьтесь в путешествие в любой из наших туров.
            </li>
            <li className={styles.tourist_bonusBlock__contentList__item}>
              2. Вернитесь из путешествия и опишите в течение 30 дней ваши
              эмоции, оставив отзыв по туру.
            </li>
            <li className={styles.tourist_bonusBlock__contentList__item}>
              3. Вы стали участником программы. Мы начислим Вам баллы в размере
              1% стоимости тура.
            </li>
          </ul>
        </div>

        <div className={styles.tourist_bonusBlock__content}>
          <h4 className={styles.tourist_bonusBlock__contentTitle}>
            Как стать участником бонусной программы?
          </h4>
          <ul className={styles.tourist_bonusBlock__contentList}>
            <li className={styles.tourist_bonusBlock__contentList__item}>
              Чем больше Вы с нами путешествуете, тем больше баллов за тур
              сможете получить.
            </li>
          </ul>
        </div>

        <div className={styles.tourist_bonusBlock__content}>
          <h4 className={styles.tourist_bonusBlock__contentTitle}>
            У нас есть система уровней:
          </h4>
          <ul className={styles.tourist_bonusBlock__contentList}>
            <li className={styles.tourist_bonusBlock__contentList__item}>
              - Начинающий путешественник - <strong>1%</strong> начисляем
              баллами после первой поездки и следующих поездок.
            </li>
            <li className={styles.tourist_bonusBlock__contentList__item}>
              - Путешественник - <strong>2%</strong> начисляем баллами за каждый
              тур после того, как Вы потратили у нас <strong>200 000 ₽</strong>.
            </li>
            <li className={styles.tourist_bonusBlock__contentList__item}>
              - Заядлый путешественник - <strong>3%</strong> начисляем баллами
              за каждый тур после того, как Вы потратили у нас
              <strong>500 000 ₽</strong>.
            </li>
          </ul>
        </div>

        <div className={styles.tourist_bonusBlock__content}>
          <h4 className={styles.tourist_bonusBlock__contentTitle}>
            Как потратить баллы?
          </h4>
          <ul className={styles.tourist_bonusBlock__contentList}>
            <li className={styles.tourist_bonusBlock__contentList__item}>
              - Накопленные баллы спишутся автоматически при следующей оплате
              тура. По сути - это ваша скидка.
            </li>
            <li className={styles.tourist_bonusBlock__contentList__item}>
              - Баллы могут быть потрачены на следующую покупку на сайте в
              размере <strong>не более 10%</strong> от суммы покупки.
            </li>
            <li className={styles.tourist_bonusBlock__contentList__item}>
              - Срок действия баллов - <strong>1 год</strong> с момента
              начисления.
            </li>
          </ul>
        </div>

        <div className={styles.tourist_bonusBlock__content}>
          <h4 className={styles.tourist_bonusBlock__contentTitle}>
            Как еще можно получить баллы?
          </h4>
          <ul className={styles.tourist_bonusBlock__contentList}>
            <li className={styles.tourist_bonusBlock__contentList__item}>
              Отправьте друзьям электронное письмо (сообщение в мессенджер) с
              приглашением на YouTravel.me или поделитесь пригласительной
              ссылкой в социальных сетях. Друзья получат скидку до 1 000 ₽ на
              первое бронирование, а вы — 1 000 ₽ за каждого, кто совершит
              поездку по условиям акции. Доступный бонус появится на странице
              оплаты.
            </li>
          </ul>
        </div>

        <div className={styles.tourist_bonusBlock__content}>
          <h4 className={styles.tourist_bonusBlock__contentTitle}>
            Ваша ссылка:
          </h4>
        </div>
      </div>
    </div>
  );
};
