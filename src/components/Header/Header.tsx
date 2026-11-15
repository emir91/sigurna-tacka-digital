import type { RefObject } from 'react';
import styles from './Header.module.css';
import logoSrc from '../../assets/images/nomadbjj-logo.png';

interface HeaderProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  menuId: string;
  menuButtonRef: RefObject<HTMLButtonElement | null>;
}

const Header = ({
  isMenuOpen,
  onMenuToggle,
  menuId,
  menuButtonRef,
}: HeaderProps) => {
  return (
    <header className={styles.header}>
      <img
        src={logoSrc}
        alt="Nomad BJJ"
        className={styles.logo}
      />
      <button
        ref={menuButtonRef}
        type="button"
        className={styles.menuButton}
        aria-label={isMenuOpen ? 'Zatvori meni' : 'Otvori meni'}
        aria-expanded={isMenuOpen}
        aria-controls={menuId}
        onClick={onMenuToggle}
      >
        <span className={styles.menuIcon} aria-hidden="true">
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </span>
      </button>
    </header>
  );
};

export default Header;

