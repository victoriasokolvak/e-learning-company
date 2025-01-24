import styles from './WeDesignSection.module.scss';
import man from '/src/assets/img/man.png';

export const WeDesignSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <div className={styles.block}>
          <h1 className={styles.title}>We Design <br /> Learning.</h1>
          <h3 className={styles.question}>What We Can Do For You?</h3>
          <button className={styles.button}>Know more</button>
        </div>
        <img src={man} alt="Man" className={styles.image}/>
      </div>
    </section>
  );
};
