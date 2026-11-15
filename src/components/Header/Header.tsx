import styles from './Header.module.css';
import logoSrc from '../../assets/images/nomadbjj-logo.png';

interface HeaderProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  disabled?: boolean;
}

const Header = ({ isMenuOpen, onMenuToggle, disabled = false }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <img
        src={logoSrc}
        alt="Nomad BJJ"
        className={styles.logo}
      />
      <button
        type="button"
        className={styles.menuButton}
        aria-label={isMenuOpen ? 'Zatvori meni' : 'Otvori meni'}
        aria-expanded={isMenuOpen}
        onClick={onMenuToggle}
        disabled={disabled}
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

