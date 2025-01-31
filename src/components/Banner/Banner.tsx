import { Slider } from '../Slider';
import { ThemeSwitcher } from '../ThemeSwitcher';
import styles from './Banner.module.scss';

export const Banner = () => {
  return (
    <>
      <div id='home' className={styles.banner}>
        <div className={styles.container}>
          <ThemeSwitcher />
          <Slider />
        </div>
      </div>
      <div className={styles.line}></div>
    </>
  );
};