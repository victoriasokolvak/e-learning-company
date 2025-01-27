import styles from './WeDesignSection.module.scss';
import man from '/src/assets/img/man.png';

export const WeDesignSection = () => {
  return (
    <section id='eLearning-price-quote' className={styles.section}>
      <div className={styles.container}>
        <div className={styles.background__bottom}></div>
        <div className={styles.background}>
          <div className={styles.block}>
            <h1 className={styles.title}>We Design <br /> Learning.</h1>
            <h3 className={styles.question}>What We Can Do For You?</h3>
            <a href="#instructional-design" className={styles.button}>Know more</a>
          </div>
          <div className={styles.image_wrapper}>
            <img src={man} alt="Man" className={styles.image}/>
          </div>
        </div>
      </div>
    </section>
  );
};
