import styles from './CaseStudyCard.module.css';

interface CaseStudyCardProps {
  title: string;
  industry: string;
  summary: string;
  outcomes: string[];
  tags: string[];
}

export default function CaseStudyCard({
  title,
  industry,
  summary,
  outcomes,
  tags,
}: CaseStudyCardProps) {
  return (
    <div className={styles.card}>
      <p className={styles.industry}>{industry}</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.summary}>{summary}</p>
      {outcomes.length > 0 && (
        <ul className={styles.outcomes}>
          {outcomes.map((outcome) => (
            <li key={outcome} className={styles.outcome}>
              {outcome}
            </li>
          ))}
        </ul>
      )}
      {tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
