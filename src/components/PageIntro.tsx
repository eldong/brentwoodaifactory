import styles from './PageIntro.module.css';

interface PageIntroProps {
  title: string;
  subtitle?: string;
}

export default function PageIntro({ title, subtitle }: PageIntroProps) {
  return (
    <div className={styles.intro}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
