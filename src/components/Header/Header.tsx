import styles from './Header.module.scss';
import logo from '/src/assets/img/Icons/Logo-dark.svg';
import { NAV_LINKS_HEADER } from '../../constants/navItems';

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo_container}>
            <img src={logo} alt="Logo" />
          </div>

          <nav className={styles.nav_container}>
            <ul className={styles.navigation}>
              {NAV_LINKS_HEADER.map((link) => (
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
