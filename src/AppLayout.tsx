import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from './components/Header/Header';
import Menu, { MENU_PANEL_ID } from './components/Menu/Menu';
import styles from './AppLayout.module.css';

const AppLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      <Header
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen((isOpen) => !isOpen)}
        menuId={MENU_PANEL_ID}
        menuButtonRef={menuButtonRef}
      />
      <Menu
        id={MENU_PANEL_ID}
        isOpen={isMenuOpen}
        onNavigate={() => setIsMenuOpen(false)}
      />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
