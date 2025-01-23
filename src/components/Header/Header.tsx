import styles from './Header.module.scss';
import logo from '/src/assets/img/Icons/Logo-dark.svg';
import { NAV_LINKS } from '../../constants/navItems';

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Logo" />
          </div>

          <nav className={styles.navContainer}>
            <ul className={styles.navigation}>
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={link.path}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
