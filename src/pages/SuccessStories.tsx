import styles from './SuccessStories.module.css';

export default function SuccessStories() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Success Stories</h1>
          <p className={styles.heroSubtitle}>
            Real results for real businesses — explore our client success stories.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <p className={styles.placeholder}>
            Client case studies and success stories — coming soon.
          </p>
        </div>
      </section>
    </div>
  );
}
