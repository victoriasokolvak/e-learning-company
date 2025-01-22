import { Slider } from '../Slider/Slider';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import styles from './Banner.module.scss';

export const Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.container}>
          <ThemeSwitcher />
          <Slider />
        </div>
      </div>
      <div className={styles.line}></div>
    </>
  );
};