import { Link } from 'react-router-dom';
import styles from './CtaSection.module.css';

interface CtaSectionProps {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  buttonTo: string;
}

export default function CtaSection({
  title,
  subtitle,
  buttonLabel,
  buttonTo,
}: CtaSectionProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          <Link to={buttonTo} className={styles.button}>
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
