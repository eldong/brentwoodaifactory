import HeroSection from '../components/HeroSection';
import SectionWrapper from '../components/SectionWrapper';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div>
      <HeroSection
        title="Contact Us"
        subtitle="Ready to start your AI journey? Get in touch with our team."
      />

      <SectionWrapper>
        <p className={styles.placeholder}>
          Contact form and details — coming soon.
        </p>
      </SectionWrapper>
    </div>
  );
}
