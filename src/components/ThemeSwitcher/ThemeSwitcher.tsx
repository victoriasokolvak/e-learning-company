import styles from './ThemeSwitcher.module.scss';
import logo from '/src/assets/img/Icons/Logo-light.svg';

export const ThemeSwitcher = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={logo} alt="Logo" />
        <div className={styles.line}></div>
        <p className={styles.text}>Taking Learning <br/> to the Next Level</p>
      </div>
    </div>
  );
};
