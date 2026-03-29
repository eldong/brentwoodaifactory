import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/navigation';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoAccent}>Brentwood</span> AI Factory
        </NavLink>

        <nav
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
          aria-label="Main navigation"
        >
          <ul className={styles.navList}>
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                  }
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarTopOpen : ''}`} />
          <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarMidOpen : ''}`} />
          <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarBotOpen : ''}`} />
        </button>
      </div>
    </header>
  );
}
