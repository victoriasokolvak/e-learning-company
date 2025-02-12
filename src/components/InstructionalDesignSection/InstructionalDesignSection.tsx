import styles from './InstructionalDesignSection.module.scss';
import image from '/src/assets/img/designSection.png';
import { CheckIcon } from '../ui/CheckIcon';

export const InstructionalDesignSection = () => {
  return (
    <section id='instructional-design' className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Instructional Design</h2>
          <div className={styles.content}>
            <div className={styles.wrapper}>
              <img src={image} alt="People" className={styles.image}/>
            </div>
          <div className={styles.block}>
            <h3 className={styles.block__title}>We know learning inside and out</h3>
            <p className={styles.block__text}>
              Our instructional design team will work hard
              to align your business goals with your learning
              objectives to ensure the training supports your
              business strategies.
            </p>
            <ul className={styles.block__list}>
                <li className={styles.block__list_item}>
                  <div className={styles.block__check}>
                    <CheckIcon />
                  </div>
                  Each project requires a unique approach,
                  and we are ready for the challenge
                </li>
                <li className={styles.block__list_item}>
                  <div className={styles.block__check}>
                    <CheckIcon />
                  </div>
                  Our expertise in the training and development
                  industry will make your project a success
                </li>
                <li className={styles.block__list_item}>
                  <div className={styles.block__check}>
                    <CheckIcon />
                  </div>
                  Your goals and deadlines are our priority
                </li>
              </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
