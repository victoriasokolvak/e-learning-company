import { Slider } from '../Slider/Slider';
import styles from './Banner.module.scss';

export const Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        <Slider />
      </div>
    </>
  );
};