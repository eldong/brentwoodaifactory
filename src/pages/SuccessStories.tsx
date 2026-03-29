import HeroSection from '../components/HeroSection';
import SectionWrapper from '../components/SectionWrapper';
import PageIntro from '../components/PageIntro';
import CaseStudyCard from '../components/CaseStudyCard';
import CtaSection from '../components/CtaSection';
import { caseStudies } from '../data/caseStudies';
import styles from './SuccessStories.module.css';

export default function SuccessStories() {
  return (
    <div>
      <HeroSection
        title="Success Stories"
        subtitle="Real results for real businesses — explore how we've helped clients unlock measurable value through AI."
      />

      <SectionWrapper>
        <PageIntro
          title="Client Case Studies"
          subtitle="From financial services to manufacturing, here's what we've achieved together."
        />
        <div className={styles.cardList}>
          {caseStudies.map((cs) => (
            <CaseStudyCard
              key={cs.id}
              title={cs.title}
              industry={cs.industry}
              summary={cs.summary}
              outcomes={cs.outcomes}
              tags={cs.tags}
            />
          ))}
        </div>
      </SectionWrapper>

      <CtaSection
        title="Ready to write your own success story?"
        subtitle="Let's explore what's possible for your business."
        buttonLabel="Contact Us"
        buttonTo="/contact"
      />
    </div>
  );
}
