import styles from './Footer.module.scss';
import Logo from '/src/assets/img/Icons/Logo-footer.svg';
import { NAV_LINKS_FOOTER } from '../../constants/navItems';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logo_wrapper}>
            <img src={Logo} alt="Logo" className={styles.logo} />
            <p className={styles.logo__text}>
              Taking learning to the next level
            </p>
          </div>
          <div className={styles.navigation}>
            {NAV_LINKS_FOOTER.map((list, index) => (
              <ul key={index} className={styles.list}>
                {list.map((item, id) => (
                  <li key={id} className={styles.list__item}>
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.bottom__text}>
          Copyright © 2016 eLearning Company
        </p>
      </div>
    </footer>
  );
};
