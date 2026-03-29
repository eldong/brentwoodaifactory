import HeroSection from '../components/HeroSection';
import SectionWrapper from '../components/SectionWrapper';
import styles from './Insights.module.css';

export default function Insights() {
  return (
    <div>
      <HeroSection
        title="Insights"
        subtitle="Thought leadership, research, and perspectives on AI and the future of business."
      />

      <SectionWrapper>
        <p className={styles.placeholder}>
          Articles, blog posts, and research — coming soon.
        </p>
      </SectionWrapper>
    </div>
  );
}
