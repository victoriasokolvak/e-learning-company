import styles from './Header.module.scss';
import logo from '/src/assets/img/Icons/Logo-dark.svg';
import { NAV_LINKS_HEADER } from '../../constants/navItems';
import { useState } from 'react';
import { BurgerMenu } from '../BurgerMenu';
import menu from '/src/assets/img/Icons/Menu.svg';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo_container}>
            <img src={logo} alt="Logo" className={styles.logo} />
          </div>

          <nav className={styles.nav_container}>
            <ul className={styles.navigation}>
              {NAV_LINKS_HEADER.map((link) => (
                <li key={link.id}>
                  <a href={link.path} className={styles.link}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.burger_icon} onClick={toggleMenu}>
            <img src={menu} alt="Menu" />
          </div>
        </div>
      </header>

      <div className={`${styles.side_menu} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.menu_content}>
          <BurgerMenu onClose={closeMenu} />
        </div>
      </div>
    </>
  );
};
