import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  title: string;
  accentText?: string;
  subtitle: string;
  ctaLabel?: string;
  ctaTo?: string;
}

export default function HeroSection({
  title,
  accentText,
  subtitle,
  ctaLabel,
  ctaTo,
}: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1 className={styles.title}>
          {title}
          {accentText && <span className={styles.accent}>{accentText}</span>}
        </h1>
        <p className={styles.subtitle}>{subtitle}</p>
        {ctaLabel && ctaTo && (
          <Link to={ctaTo} className={styles.cta}>
            {ctaLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
