import styles from './WorkWeDoSection.module.scss';
import image from '/src/assets/img/designSection2.png';
import { CheckIcon } from '../ui/CheckIcon';

export const WorkWeDoSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
          <div className={styles.content}>
          <div className={styles.block}>
            <h3 className={styles.block__title}>Our clients love the work we do</h3>
            <p className={styles.block__text}>
              We pride ourselves on developing training
              strategies with the learners in mind, ensuring
              your time and resources are well utilized.
            </p>
            <ul className={styles.block__list}>
                <li className={styles.block__list_item}>
                  <div className={styles.block__check}>
                    <CheckIcon />
                  </div>
                  We start each project with a careful
                  analysiys of your learning needs
                </li>
                <li className={styles.block__list_item}>
                  <div className={styles.block__check}>
                    <CheckIcon />
                  </div>
                  We constantly look for ways to save your time
                  and money while exceeding your expectations
                </li>
                <li className={styles.block__list_item}>
                  <div className={styles.block__check}>
                    <CheckIcon />
                  </div>
                  We don't stop working until you are satisfied
                  with the products we deliver
                </li>
              </ul>
          </div>
          <div className={styles.wrapper}>
            <img src={image} alt="People" className={styles.image}/>
          </div>
        </div>
      </div>
    </section>
  );
};
