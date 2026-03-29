import styles from './Insights.module.css';

export default function Insights() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Insights</h1>
          <p className={styles.heroSubtitle}>
            Thought leadership, research, and perspectives on AI and the future of business.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <p className={styles.placeholder}>
            Articles, blog posts, and research — coming soon.
          </p>
        </div>
      </section>
    </div>
  );
}
