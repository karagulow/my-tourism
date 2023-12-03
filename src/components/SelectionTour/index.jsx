import styles from './SelectionTour.module.scss';

export const SelectionTour = ({ setSelectionTourOpen }) => {
  return (
    <div className={styles.selection_tour}>
      <div
        className={styles.selection_tourClose}
        onClick={() => {
          setSelectionTourOpen(false);
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
      <div className={styles.selection_tourBlock}>
        <h3 className={styles.selection_tourBlock__title}>
          Детальный подбор тура
        </h3>
        <div className={styles.selection_tourBlock__content}>
          <div className={styles.selection_tourBlock__contentItem}>
            <div className={styles.selection_tourBlock__contentItem__wide}>
              <p className={styles.selection_tourBlock__contentItem__wideText}>
                Длительность
              </p>
              <div
                className={styles.selection_tourBlock__contentItem__wideParams}
              >
                <div
                  className={
                    styles.selection_tourBlock__contentItem__wideParams__btns
                  }
                >
                  <button
                    className={
                      styles.selection_tourBlock__contentItem__wideParams__btnsItem
                    }
                  >
                    От (дней)
                  </button>
                  <button
                    className={
                      styles.selection_tourBlock__contentItem__wideParams__btnsItem
                    }
                  >
                    До (дней)
                  </button>
                </div>
                <div
                  className={
                    styles.selection_tourBlock__contentItem__wideParams__circles
                  }
                >
                  <div
                    className={
                      styles.selection_tourBlock__contentItem__wideParams__circlesItem
                    }
                  ></div>
                  <div
                    className={
                      styles.selection_tourBlock__contentItem__wideParams__circlesItem
                    }
                  ></div>
                  <div
                    className={
                      styles.selection_tourBlock__contentItem__wideParams__circlesLine
                    }
                  ></div>
                </div>
                <div
                  className={
                    styles.selection_tourBlock__contentItem__wideParams__numbers
                  }
                >
                  <p
                    className={
                      styles.selection_tourBlock__contentItem__wideParams__numbersItem
                    }
                  >
                    1
                  </p>
                  <p
                    className={
                      styles.selection_tourBlock__contentItem__wideParams__numbersItem
                    }
                  >
                    30
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.selection_tourBlock__contentItem__wide}>
              <p className={styles.selection_tourBlock__contentItem__wideText}>
                Тип тура
              </p>
              <div
                className={styles.selection_tourBlock__contentItem__wideParams}
              >
                <div
                  className={
                    styles.selection_tourBlock__contentItem__wideParams__btn
                  }
                ></div>
              </div>
            </div>
            <div className={styles.selection_tourBlock__contentItem__wide}>
              <p className={styles.selection_tourBlock__contentItem__wideText}>
                Цена
              </p>
              <div
                className={styles.selection_tourBlock__contentItem__wideParams}
              >
                <div
                  className={
                    styles.selection_tourBlock__contentItem__wideParams__btns
                  }
                >
                  <button
                    className={
                      styles.selection_tourBlock__contentItem__wideParams__btnsItem
                    }
                  >
                    От
                  </button>
                  <button
                    className={
                      styles.selection_tourBlock__contentItem__wideParams__btnsItem
                    }
                  >
                    До
                  </button>
                </div>
                <div
                  className={
                    styles.selection_tourBlock__contentItem__wideParams__circles
                  }
                >
                  <div
                    className={
                      styles.selection_tourBlock__contentItem__wideParams__circlesItem
                    }
                  ></div>
                  <div
                    className={
                      styles.selection_tourBlock__contentItem__wideParams__circlesItem
                    }
                  ></div>
                  <div
                    className={
                      styles.selection_tourBlock__contentItem__wideParams__circlesLine
                    }
                  ></div>
                </div>
                <div
                  className={
                    styles.selection_tourBlock__contentItem__wideParams__numbers
                  }
                >
                  <p
                    className={
                      styles.selection_tourBlock__contentItem__wideParams__numbersItem
                    }
                  >
                    5 000 ₽
                  </p>
                  <p
                    className={
                      styles.selection_tourBlock__contentItem__wideParams__numbersItem
                    }
                  >
                    500 000 ₽
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.selection_tourBlock__contentItem__short}>
              <p className={styles.selection_tourBlock__contentItem__shortText}>
                Сколько вас человек
              </p>
              <div
                className={
                  styles.selection_tourBlock__contentItem__shortBig_btns
                }
              >
                <button
                  className={
                    styles.selection_tourBlock__contentItem__shortBig_btns__item
                  }
                >
                  10
                </button>
              </div>
            </div>
            <div className={styles.selection_tourBlock__contentItem__short}>
              <p className={styles.selection_tourBlock__contentItem__shortText}>
                Максимальное количество участников
              </p>
              <div
                className={
                  styles.selection_tourBlock__contentItem__shortBig_btns
                }
              >
                <button
                  className={
                    styles.selection_tourBlock__contentItem__shortBig_btns__item
                  }
                >
                  От
                </button>
                <button
                  className={
                    styles.selection_tourBlock__contentItem__shortBig_btns__item
                  }
                >
                  До
                </button>
              </div>
            </div>
            <div className={styles.selection_tourBlock__contentItem__short}>
              <p className={styles.selection_tourBlock__contentItem__shortText}>
                Рейтинг тревел-эксперта
              </p>
              <div
                className={
                  styles.selection_tourBlock__contentItem__shortSmall_btns
                }
              >
                <button
                  className={
                    styles.selection_tourBlock__contentItem__shortSmall_btns__item
                  }
                >
                  1
                </button>
                <button
                  className={
                    styles.selection_tourBlock__contentItem__shortSmall_btns__item
                  }
                >
                  2
                </button>
                <button
                  className={
                    styles.selection_tourBlock__contentItem__shortSmall_btns__item
                  }
                >
                  3
                </button>
                <button
                  className={
                    styles.selection_tourBlock__contentItem__shortSmall_btns__item
                  }
                >
                  4
                </button>
                <button
                  className={
                    styles.selection_tourBlock__contentItem__shortSmall_btns__item
                  }
                >
                  5
                </button>
              </div>
            </div>
          </div>
          <div className={styles.selection_tourBlock__contentItem}>
            <div className={styles.selection_tourBlock__contentItem__short}>
              <p className={styles.selection_tourBlock__contentItem__shortText}>
                Комфорт
              </p>
              <div
                className={
                  styles.selection_tourBlock__contentItem__shortSmall_btns
                }
              >
                <button
                  className={
                    styles.selection_tourBlock__contentItem__shortSmall_btns__item
                  }
                >
                  1
                </button>
                <button
                  className={
                    styles.selection_tourBlock__contentItem__shortSmall_btns__item
                  }
                >
                  2
                </button>
                <button
                  className={
                    styles.selection_tourBlock__contentItem__shortSmall_btns__item
                  }
                >
                  3
                </button>
                <button
                  className={
                    styles.selection_tourBlock__contentItem__shortSmall_btns__item
                  }
                >
                  4
                </button>
                <button
                  className={
                    styles.selection_tourBlock__contentItem__shortSmall_btns__item
                  }
                >
                  5
                </button>
              </div>
            </div>
            <div className={styles.selection_tourBlock__contentItem__wide}>
              <p className={styles.selection_tourBlock__contentItem__wideText}>
                Возраст группы
              </p>
              <div
                className={styles.selection_tourBlock__contentItem__wideParams}
              >
                <div
                  className={
                    styles.selection_tourBlock__contentItem__wideParams__btns
                  }
                >
                  <button
                    className={
                      styles.selection_tourBlock__contentItem__wideParams__btnsItem
                    }
                  >
                    От
                  </button>
                  <button
                    className={
                      styles.selection_tourBlock__contentItem__wideParams__btnsItem
                    }
                  >
                    До
                  </button>
                </div>
                <div
                  className={
                    styles.selection_tourBlock__contentItem__wideParams__circles
                  }
                >
                  <div
                    className={
                      styles.selection_tourBlock__contentItem__wideParams__circlesItem
                    }
                  ></div>
                  <div
                    className={
                      styles.selection_tourBlock__contentItem__wideParams__circlesItem
                    }
                  ></div>
                  <div
                    className={
                      styles.selection_tourBlock__contentItem__wideParams__circlesLine
                    }
                  ></div>
                </div>
                <div
                  className={
                    styles.selection_tourBlock__contentItem__wideParams__numbers
                  }
                >
                  <p
                    className={
                      styles.selection_tourBlock__contentItem__wideParams__numbersItem
                    }
                  >
                    0
                  </p>
                  <p
                    className={
                      styles.selection_tourBlock__contentItem__wideParams__numbersItem
                    }
                  >
                    99
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.selection_tourBlock__contentItem__short}>
              <p className={styles.selection_tourBlock__contentItem__shortText}>
                Можно с детьми
              </p>
              <div
                className={
                  styles.selection_tourBlock__contentItem__shortBig_btns
                }
              >
                <button
                  className={
                    styles.selection_tourBlock__contentItem__shortBig_btns__item
                  }
                >
                  Да
                </button>
                <button
                  className={
                    styles.selection_tourBlock__contentItem__shortBig_btns__item
                  }
                >
                  Нет
                </button>
              </div>
            </div>
            <div className={styles.selection_tourBlock__contentItem__short}>
              <p className={styles.selection_tourBlock__contentItem__shortText}>
                Уровень активности
              </p>
              <div
                className={
                  styles.selection_tourBlock__contentItem__shortSmall_btns
                }
              >
                <button
                  className={
                    styles.selection_tourBlock__contentItem__shortSmall_btns__item
                  }
                >
                  1
                </button>
                <button
                  className={
                    styles.selection_tourBlock__contentItem__shortSmall_btns__item
                  }
                >
                  2
                </button>
                <button
                  className={
                    styles.selection_tourBlock__contentItem__shortSmall_btns__item
                  }
                >
                  3
                </button>
                <button
                  className={
                    styles.selection_tourBlock__contentItem__shortSmall_btns__item
                  }
                >
                  4
                </button>
                <button
                  className={
                    styles.selection_tourBlock__contentItem__shortSmall_btns__item
                  }
                >
                  5
                </button>
              </div>
            </div>
            <div className={styles.selection_tourBlock__contentItem__short}>
              <p className={styles.selection_tourBlock__contentItem__shortText}>
                Можно в расрочку
              </p>
              <div
                className={
                  styles.selection_tourBlock__contentItem__shortBig_btns
                }
              >
                <button
                  className={
                    styles.selection_tourBlock__contentItem__shortBig_btns__item
                  }
                >
                  Да
                </button>
                <button
                  className={
                    styles.selection_tourBlock__contentItem__shortBig_btns__item
                  }
                >
                  Нет
                </button>
              </div>
            </div>
            <div className={styles.selection_tourBlock__contentItem__short}>
              <p className={styles.selection_tourBlock__contentItem__shortText}>
                Только со скидками
              </p>
              <div
                className={
                  styles.selection_tourBlock__contentItem__shortBig_btns
                }
              >
                <button
                  className={
                    styles.selection_tourBlock__contentItem__shortBig_btns__item
                  }
                >
                  Да
                </button>
                <button
                  className={
                    styles.selection_tourBlock__contentItem__shortBig_btns__item
                  }
                >
                  Нет
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.selection_tourBlock__btn}>
          Показать результат
        </button>
      </div>
    </div>
  );
};
