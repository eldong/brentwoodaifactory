import styles from './Team.module.css';

export default function Team() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Our Team</h1>
          <p className={styles.heroSubtitle}>
            Meet the people behind Brentwood AI Factory.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <p className={styles.placeholder}>
            Team member profiles — coming soon.
          </p>
        </div>
      </section>
    </div>
  );
}
