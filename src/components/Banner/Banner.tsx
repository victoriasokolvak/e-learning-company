import { Slider } from '../Slider/Slider';
import styles from './Banner.module.scss';
import slides from '../../assets/mock.json';

export const Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        <Slider slides={slides} />
      </div>
    </>
  );
};