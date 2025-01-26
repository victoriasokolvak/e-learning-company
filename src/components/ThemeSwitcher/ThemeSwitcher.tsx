import { useContext } from 'react';
import styles from './ThemeSwitcher.module.scss';
import logoLight from '/src/assets/img/Icons/Logo-light.svg';
import logoDark from '/src/assets/img/Icons/Logo-dark.svg';
import { ThemeContext } from '../../context/ThemeContext';

export const ThemeSwitcher = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.img_wrapper}>
          <img
            src={darkTheme ? logoDark : logoLight}
            alt="Logo"
            className={styles.image}
          />
        </div>
        <div className={styles.line}></div>
        <p className={styles.text}>
          Taking Learning <br/> to the Next Level
        </p>
      </div>
        <div className={styles.switcher}>
          <label id="switch" className={styles.switch}>
            <input
              type="checkbox"
              onChange={toggleTheme}
              id="slider"
              checked={darkTheme}
              className={styles.input}
            />
            <div className={styles.slider}>
              <p className={styles.mode}>
                {darkTheme ? 'NIGHTMODE' : 'DAYMODE'}
              </p>
            </div>
          </label>
        </div>
    </div>
  );
};
