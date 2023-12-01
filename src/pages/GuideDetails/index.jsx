import styles from './GuideDetails.module.scss';

import { GuideNav } from '../../components/GuideNav';

export const GuideDetails = () => {
  return (
    <div className={styles.details}>
      <GuideNav />
      <div className={styles.detailsBlock}>
        <h3 className={styles.detailsBlock__title}>Счета и платежи</h3>
        <h6 className={styles.detailsBlock__headline}>Реквизиты</h6>
        <p className={styles.detailsBlock__text}>
          Все документы готовятся на основании реквизитов, указанных вами при
          выборе способа выплаты. Если вы хотите изменить данные, вы можете это
          сделать изменив способ выплаты.
        </p>
        <ul className={styles.detailsBlock__list}>
          <li className={styles.detailsBlock__listItem}>
            <p className={styles.detailsBlock__listItem__title}>
              Платежный профиль
            </p>
            <p className={styles.detailsBlock__listItem__text}>
              Пожалуйста, выберите способ выплаты ниже
            </p>
          </li>
          <li className={styles.detailsBlock__listItem}>
            <p className={styles.detailsBlock__listItem__title}>
              Основной контакт
            </p>
            <p className={styles.detailsBlock__listItem__text}>
              Пожалуйста, укажите основной контакт
            </p>
          </li>
          <li className={styles.detailsBlock__listItem}>
            <p className={styles.detailsBlock__listItem__title}>
              Условия и способ выплаты
            </p>
            <p className={styles.detailsBlock__listItem__text}>
              Оплаты и выплаты осуществляется на следующих условиях
            </p>
          </li>
          <li className={styles.detailsBlock__listItem}>
            <p className={styles.detailsBlock__listItem__title}>
              Сервисный сбор
            </p>
            <p className={styles.detailsBlock__listItem__text}>
              10% (от полной стоимости предложения)
            </p>
          </li>
        </ul>
        <h3 className={styles.detailsBlock__title}>Способ выплаты</h3>
        <p className={styles.detailsBlock__text}>
          Когда вы получаете платеж за бронирование, мы называем его выплатой.
          Наша безопасная система платежей может выплачивать денежные средства
          через разные платежные терминалы в зависимости от выбранного вами
          способа выплаты. Для получения оплат нужно обязательно выбрать метод,
          как вы хотите получать средства на счет. Мой туризм производит выплаты
          не ранее чем через 48 часов после внесения предоплаты
          путешественниками. Срок фактического зачисления средств обычно
          составляет до 5 рабочих дней. Влияют на сроки выходные и праздничные
          дни, выбранный способ выплаты, корректность указанных платежных
          реквизитов в личном кабинете тревел-эксперта.
        </p>
        <button className={styles.detailsBlock__btn}>
          Добавить способ выплаты
        </button>
      </div>
    </div>
  );
};
