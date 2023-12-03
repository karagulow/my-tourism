import styles from './SelectionTourRequest.module.scss';

export const SelectionTourRequest = ({ setSelectionTourRequestOpen }) => {
  return (
    <div className={styles.selection}>
      <div
        className={styles.selectionClose}
        onClick={() => {
          setSelectionTourRequestOpen(false);
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
      <div className={styles.selectionBlock}>
        <h3 className={styles.selectionBlock__title}>Запрос на подбор тура!</h3>
        <p className={styles.selectionBlock__text}>
          Оставьте свои контактные данные и мы свяжемся с Вами в течение{' '}
          <b>10 минут</b> для того, чтобы помочь Вам выбрать подходящий тур.{' '}
          <br />
          <br />
          *Время работы наших менеджеров с 09:00 до 22:00 по МСК
        </p>
        <div className={styles.selectionBlock__btns}>
          <button className={styles.selectionBlock__btnsItem}>Телефон</button>
          <button className={styles.selectionBlock__btnsItem}>WhatsApp</button>
          <button className={styles.selectionBlock__btnsItem}>Почта</button>
        </div>
        <button className={styles.selectionBlock__btn}>
          Оставить контакты
        </button>
      </div>
    </div>
  );
};
