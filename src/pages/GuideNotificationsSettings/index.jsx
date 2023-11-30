import styles from './GuideNotificationsSettings.module.scss';

import { GuideNav } from '../../components/GuideNav';

export const GuideNotificationsSettings = () => {
  return (
    <div className={styles.settings}>
      <GuideNav />
      <div className={styles.settingsBlock}>
        <h3 className={styles.settingsBlock__title}>Уведомления</h3>
        <h6 className={styles.settingsBlock__name}>Каналы</h6>
        <p className={styles.settingsBlock__text}>
          Добавьте удобные каналы для получения оповещений, рассылок и рекламных
          уведомлений
        </p>
        <ul className={styles.settingsBlock__list}>
          <li className={styles.settingsBlock__listItem}>
            <p className={styles.settingsBlock__listItem__text}>Email</p>
            <div className={styles.settingsBlock__listItem__btns}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6667 22L24.4167 10.25L22.0833 7.91667L12.6667 17.3333L7.91667 12.5833L5.58334 14.9167L12.6667 22ZM3.33334 30C2.41667 30 1.63167 29.6733 0.978336 29.02C0.325003 28.3667 -0.00110828 27.5822 2.82966e-06 26.6667V3.33334C2.82966e-06 2.41667 0.32667 1.63167 0.980003 0.978336C1.63334 0.325003 2.41778 -0.00110828 3.33334 2.82966e-06H26.6667C27.5833 2.82966e-06 28.3683 0.32667 29.0217 0.980003C29.675 1.63334 30.0011 2.41778 30 3.33334V26.6667C30 27.5833 29.6733 28.3683 29.02 29.0217C28.3667 29.675 27.5822 30.0011 26.6667 30H3.33334Z"
                  fill="#964B00"
                />
              </svg>
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.584 0H4.08398C2.02148 0 0.333984 1.6875 0.333984 3.75V26.25C0.333984 28.3125 2.02148 30 4.08398 30H26.584C28.6465 30 30.334 28.3125 30.334 26.25V3.75C30.334 1.6875 28.6465 0 26.584 0ZM21.0734 23.9794L15.334 18.2419L9.59461 23.9794L6.35273 20.7394L12.0921 15L6.35461 9.26062L9.59648 6.01875L15.334 11.7581L21.0696 6.01875L24.3115 9.26062L18.5759 15L24.3134 20.7394L21.0734 23.9794Z"
                  fill="#964B00"
                />
              </svg>
            </div>
          </li>

          <li className={styles.settingsBlock__listItem}>
            <p className={styles.settingsBlock__listItem__text}>Whatsapp</p>
            <div className={styles.settingsBlock__listItem__btns}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6667 22L24.4167 10.25L22.0833 7.91667L12.6667 17.3333L7.91667 12.5833L5.58334 14.9167L12.6667 22ZM3.33334 30C2.41667 30 1.63167 29.6733 0.978336 29.02C0.325003 28.3667 -0.00110828 27.5822 2.82966e-06 26.6667V3.33334C2.82966e-06 2.41667 0.32667 1.63167 0.980003 0.978336C1.63334 0.325003 2.41778 -0.00110828 3.33334 2.82966e-06H26.6667C27.5833 2.82966e-06 28.3683 0.32667 29.0217 0.980003C29.675 1.63334 30.0011 2.41778 30 3.33334V26.6667C30 27.5833 29.6733 28.3683 29.02 29.0217C28.3667 29.675 27.5822 30.0011 26.6667 30H3.33334Z"
                  fill="#964B00"
                />
              </svg>
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.584 0H4.08398C2.02148 0 0.333984 1.6875 0.333984 3.75V26.25C0.333984 28.3125 2.02148 30 4.08398 30H26.584C28.6465 30 30.334 28.3125 30.334 26.25V3.75C30.334 1.6875 28.6465 0 26.584 0ZM21.0734 23.9794L15.334 18.2419L9.59461 23.9794L6.35273 20.7394L12.0921 15L6.35461 9.26062L9.59648 6.01875L15.334 11.7581L21.0696 6.01875L24.3115 9.26062L18.5759 15L24.3134 20.7394L21.0734 23.9794Z"
                  fill="#964B00"
                />
              </svg>
            </div>
          </li>

          <li className={styles.settingsBlock__listItem}>
            <p className={styles.settingsBlock__listItem__text}>Telegram</p>
            <div className={styles.settingsBlock__listItem__btns}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6667 22L24.4167 10.25L22.0833 7.91667L12.6667 17.3333L7.91667 12.5833L5.58334 14.9167L12.6667 22ZM3.33334 30C2.41667 30 1.63167 29.6733 0.978336 29.02C0.325003 28.3667 -0.00110828 27.5822 2.82966e-06 26.6667V3.33334C2.82966e-06 2.41667 0.32667 1.63167 0.980003 0.978336C1.63334 0.325003 2.41778 -0.00110828 3.33334 2.82966e-06H26.6667C27.5833 2.82966e-06 28.3683 0.32667 29.0217 0.980003C29.675 1.63334 30.0011 2.41778 30 3.33334V26.6667C30 27.5833 29.6733 28.3683 29.02 29.0217C28.3667 29.675 27.5822 30.0011 26.6667 30H3.33334Z"
                  fill="#964B00"
                />
              </svg>
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.584 0H4.08398C2.02148 0 0.333984 1.6875 0.333984 3.75V26.25C0.333984 28.3125 2.02148 30 4.08398 30H26.584C28.6465 30 30.334 28.3125 30.334 26.25V3.75C30.334 1.6875 28.6465 0 26.584 0ZM21.0734 23.9794L15.334 18.2419L9.59461 23.9794L6.35273 20.7394L12.0921 15L6.35461 9.26062L9.59648 6.01875L15.334 11.7581L21.0696 6.01875L24.3115 9.26062L18.5759 15L24.3134 20.7394L21.0734 23.9794Z"
                  fill="#964B00"
                />
              </svg>
            </div>
          </li>

          <li className={styles.settingsBlock__listItem}>
            <p className={styles.settingsBlock__listItem__text}>
              SMS-уведомления
            </p>
            <div className={styles.settingsBlock__listItem__btns}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6667 22L24.4167 10.25L22.0833 7.91667L12.6667 17.3333L7.91667 12.5833L5.58334 14.9167L12.6667 22ZM3.33334 30C2.41667 30 1.63167 29.6733 0.978336 29.02C0.325003 28.3667 -0.00110828 27.5822 2.82966e-06 26.6667V3.33334C2.82966e-06 2.41667 0.32667 1.63167 0.980003 0.978336C1.63334 0.325003 2.41778 -0.00110828 3.33334 2.82966e-06H26.6667C27.5833 2.82966e-06 28.3683 0.32667 29.0217 0.980003C29.675 1.63334 30.0011 2.41778 30 3.33334V26.6667C30 27.5833 29.6733 28.3683 29.02 29.0217C28.3667 29.675 27.5822 30.0011 26.6667 30H3.33334Z"
                  fill="#964B00"
                />
              </svg>
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.584 0H4.08398C2.02148 0 0.333984 1.6875 0.333984 3.75V26.25C0.333984 28.3125 2.02148 30 4.08398 30H26.584C28.6465 30 30.334 28.3125 30.334 26.25V3.75C30.334 1.6875 28.6465 0 26.584 0ZM21.0734 23.9794L15.334 18.2419L9.59461 23.9794L6.35273 20.7394L12.0921 15L6.35461 9.26062L9.59648 6.01875L15.334 11.7581L21.0696 6.01875L24.3115 9.26062L18.5759 15L24.3134 20.7394L21.0734 23.9794Z"
                  fill="#964B00"
                />
              </svg>
            </div>
          </li>

          <li className={styles.settingsBlock__listItem}>
            <p className={styles.settingsBlock__listItem__text}>
              Push-уведомления
            </p>
            <div className={styles.settingsBlock__listItem__btns}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6667 22L24.4167 10.25L22.0833 7.91667L12.6667 17.3333L7.91667 12.5833L5.58334 14.9167L12.6667 22ZM3.33334 30C2.41667 30 1.63167 29.6733 0.978336 29.02C0.325003 28.3667 -0.00110828 27.5822 2.82966e-06 26.6667V3.33334C2.82966e-06 2.41667 0.32667 1.63167 0.980003 0.978336C1.63334 0.325003 2.41778 -0.00110828 3.33334 2.82966e-06H26.6667C27.5833 2.82966e-06 28.3683 0.32667 29.0217 0.980003C29.675 1.63334 30.0011 2.41778 30 3.33334V26.6667C30 27.5833 29.6733 28.3683 29.02 29.0217C28.3667 29.675 27.5822 30.0011 26.6667 30H3.33334Z"
                  fill="#964B00"
                />
              </svg>
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.584 0H4.08398C2.02148 0 0.333984 1.6875 0.333984 3.75V26.25C0.333984 28.3125 2.02148 30 4.08398 30H26.584C28.6465 30 30.334 28.3125 30.334 26.25V3.75C30.334 1.6875 28.6465 0 26.584 0ZM21.0734 23.9794L15.334 18.2419L9.59461 23.9794L6.35273 20.7394L12.0921 15L6.35461 9.26062L9.59648 6.01875L15.334 11.7581L21.0696 6.01875L24.3115 9.26062L18.5759 15L24.3134 20.7394L21.0734 23.9794Z"
                  fill="#964B00"
                />
              </svg>
            </div>
          </li>
        </ul>

        <button className={styles.settingsBlock__btn}>
          Подключить текущее устройство
        </button>
        <p className={styles.settingsBlock__text}>
          Подключить текущее устройство
        </p>
      </div>
    </div>
  );
};
