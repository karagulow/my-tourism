import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { useState } from 'react';

import userAvatar from '../../assets/img/user-avatar-null.svg';

import { GuideMenu } from '../GuideMenu';
import { TouristMenu } from '../TouristMenu';
import { UserMenu } from '../UserMenu';

export const Header = () => {
  const [isTouristAuth, setIsTouristAuth] = useState(false);
  const [isGuideAuth, setIsGuideAuth] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className={`${styles.nav} ${styles.fixedNavBar}`}>
        <div className="container">
          <div className={styles.navRow}>
            <div className={styles.navRow__left}>
              <div className={styles.navRow__leftMenu}>
                {menuOpen ? (
                  <>
                    <svg
                      onClick={() => {
                        setMenuOpen(!menuOpen);
                      }}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.0829 2L18 17.9171M2 17.9171L17.9171 2"
                        stroke="#964B00"
                        stroke-width="3.97927"
                        stroke-linecap="round"
                      />
                    </svg>
                    {isTouristAuth ? (
                      <TouristMenu />
                    ) : isGuideAuth ? (
                      <GuideMenu />
                    ) : (
                      <UserMenu />
                    )}
                  </>
                ) : (
                  <svg
                    onClick={() => {
                      setMenuOpen(!menuOpen);
                    }}
                    width="21"
                    height="19"
                    viewBox="0 0 21 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.3421 15.4737C19.7679 15.4739 20.1772 15.6379 20.4854 15.9317C20.7935 16.2255 20.9768 16.6266 20.9973 17.0519C21.0177 17.4772 20.8738 17.894 20.5953 18.2161C20.3168 18.5381 19.925 18.7407 19.5013 18.7817L19.3421 18.7895H1.65789C1.23213 18.7893 0.822764 18.6253 0.514625 18.3314C0.206487 18.0376 0.0231972 17.6365 0.00273634 17.2113C-0.0177246 16.786 0.126212 16.3691 0.40472 16.0471C0.683228 15.7251 1.07496 15.5225 1.49874 15.4814L1.65789 15.4737H19.3421ZM19.3421 7.73684C19.7818 7.73684 20.2035 7.91151 20.5144 8.22243C20.8253 8.53334 21 8.95504 21 9.39474C21 9.83444 20.8253 10.2561 20.5144 10.567C20.2035 10.878 19.7818 11.0526 19.3421 11.0526H1.65789C1.21819 11.0526 0.796502 10.878 0.485586 10.567C0.174671 10.2561 0 9.83444 0 9.39474C0 8.95504 0.174671 8.53334 0.485586 8.22243C0.796502 7.91151 1.21819 7.73684 1.65789 7.73684H19.3421ZM19.3421 0C19.7818 0 20.2035 0.174671 20.5144 0.485586C20.8253 0.796502 21 1.21819 21 1.65789C21 2.0976 20.8253 2.51929 20.5144 2.8302C20.2035 3.14112 19.7818 3.31579 19.3421 3.31579H1.65789C1.21819 3.31579 0.796502 3.14112 0.485586 2.8302C0.174671 2.51929 0 2.0976 0 1.65789C0 1.21819 0.174671 0.796502 0.485586 0.485586C0.796502 0.174671 1.21819 0 1.65789 0H19.3421Z"
                      fill="#964B00"
                    />
                  </svg>
                )}
              </div>
              <Link to="/" className={styles.navRow__leftLogo}>
                Мой туризм
              </Link>
            </div>
            <div className={styles.navRow__right}>
              <div className={styles.navRow__rightBtns}>
                <button className={styles.navRow__rightBtns__item}>
                  Подобрать тур
                </button>
                <button className={styles.navRow__rightBtns__item}>
                  Что это такое
                </button>
              </div>
              <ul className={styles.navRow__rightList}>
                <li className={styles.navRow__rightList__item}>
                  <Link to="#">О нас</Link>
                </li>
                <li className={styles.navRow__rightList__item}>
                  <Link to="#">Помощь</Link>
                </li>
                <li className={styles.navRow__rightList__item}>
                  <p>₽ (RUB)</p>
                  <svg
                    width="18"
                    height="10"
                    viewBox="0 0 18 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.42195 1.13281L9.21097 8.92184L17 1.13281"
                      stroke="#964B00"
                      stroke-width="1.94726"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </li>
                <li className={styles.navRow__rightList__item}>
                  <p>Рус</p>
                  <svg
                    width="18"
                    height="10"
                    viewBox="0 0 18 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.42195 1.13281L9.21097 8.92184L17 1.13281"
                      stroke="#964B00"
                      stroke-width="1.94726"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </li>
              </ul>
              {isGuideAuth || isTouristAuth ? (
                <button to="#" className={styles.navRow__rightAvatar}>
                  <img src={userAvatar} alt="avatar" />
                </button>
              ) : (
                <button className={styles.navRow__rightBtn}>Вход</button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
