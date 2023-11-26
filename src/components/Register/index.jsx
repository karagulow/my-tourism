import { Link } from 'react-router-dom';

import styles from './Register.module.scss';

export const Register = ({ setRegisterOpen }) => {
  return (
    <div className={styles.login}>
      <div
        className={styles.loginClose}
        onClick={() => {
          setRegisterOpen(false);
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
      <div className={styles.loginBlock}>
        <h2 className={styles.loginBlock__title}>Регистрация</h2>
        <form className={styles.loginBlock__form}>
          <input
            className={styles.loginBlock__formInput}
            type="text"
            placeholder="ФИО"
          />
          <input
            className={styles.loginBlock__formInput}
            type="text"
            placeholder="Номер телефона"
          />
          <input
            className={styles.loginBlock__formInput}
            type="text"
            placeholder="Электронная почта"
          />
          <input
            className={styles.loginBlock__formInput}
            type="text"
            placeholder="Логин"
          />
          <input
            className={styles.loginBlock__formInput}
            type="password"
            placeholder="Пароль"
          />
          <button className={styles.loginBlock__formBtn}>Авторизоваться</button>
        </form>
      </div>
    </div>
  );
};
