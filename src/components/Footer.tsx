import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/navigation';
import styles from './Footer.module.css';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <p className={styles.brandName}>
            <span className={styles.brandAccent}>Brentwood</span> AI Factory
          </p>
          <p className={styles.tagline}>
            Transforming businesses through the power of artificial intelligence.
          </p>
        </div>

        <nav className={styles.nav} aria-label="Footer navigation">
          <p className={styles.navTitle}>Quick Links</p>
          <ul className={styles.navList}>
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'} className={styles.navLink}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.copyright}>
            &copy; {currentYear} Brentwood AI Factory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
