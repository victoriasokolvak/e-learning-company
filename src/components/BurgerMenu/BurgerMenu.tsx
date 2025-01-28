import styles from './BurgerMenu.module.scss';
import logo from '/src/assets/img/Icons/Logo-dark.svg';
import { NAV_LINKS_HEADER } from '../../constants/navItems';
import { Close } from '../ui/Close';

type BurgerMenuProps = {
  onClose: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ onClose }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.container}>
          <div className={styles.logo_container}>
            <img src={logo} alt="Logo" className={styles.logo} />
          </div>
          <div className={styles.close} onClick={onClose}>
            <Close />
          </div>
        </div>

      <nav className={styles.nav_container}>
        <ul className={styles.navigation}>
          {NAV_LINKS_HEADER.map((link) => (
            <li key={link.id}>
              <a href={link.path} onClick={onClose}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
