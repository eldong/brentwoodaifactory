import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>
            Welcome to <span className={styles.accent}>Brentwood AI Factory</span>
          </h1>
          <p className={styles.heroSubtitle}>
            We partner with forward-thinking businesses to design, build, and deploy
            AI solutions that drive real results.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>What We Do</h2>
          <p className={styles.sectionText}>
            Placeholder content — full details coming soon.
          </p>
        </div>
      </section>
    </div>
  );
}
