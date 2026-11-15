import { NavLink } from 'react-router';
import styles from './Menu.module.css';

export const MENU_PANEL_ID = 'main-navigation';

interface MenuProps {
  id: string;
  isOpen: boolean;
  onNavigate: () => void;
}

const Menu = ({ id, isOpen, onNavigate }: MenuProps) => {
  return (
    <nav
      id={id}
      className={styles.navigation}
      aria-label="Glavna navigacija"
      hidden={!isOpen}
    >
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.activeLink}` : styles.link
        }
        onClick={onNavigate}
      >
        Početna
      </NavLink>
      <NavLink
        to="/moduli"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.activeLink}` : styles.link
        }
        onClick={onNavigate}
      >
        Edukativni moduli
      </NavLink>
      <NavLink
        to="/podrska"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.activeLink}` : styles.link
        }
        onClick={onNavigate}
      >
        Treba mi podrška
      </NavLink>
    </nav>
  );
};

export default Menu;
