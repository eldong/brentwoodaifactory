import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroSubtitle}>
            Ready to start your AI journey? Get in touch with our team.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <p className={styles.placeholder}>
            Contact form and details — coming soon.
          </p>
        </div>
      </section>
    </div>
  );
}
