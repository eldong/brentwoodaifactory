import HeroSection from '../components/HeroSection';
import SectionWrapper from '../components/SectionWrapper';
import PageIntro from '../components/PageIntro';
import CaseStudyCard from '../components/CaseStudyCard';
import CtaSection from '../components/CtaSection';
import { caseStudies, featuredCaseStudy } from '../data/caseStudies';
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
          title="Featured Case Study"
          subtitle="A closer look at a real engagement — the challenge, what we built, and the outcomes delivered."
        />
        <div className={styles.featured}>
          <div className={styles.featuredHeader}>
            <span className={styles.featuredIndustry}>
              {featuredCaseStudy.industry}
            </span>
            <h3 className={styles.featuredClient}>{featuredCaseStudy.client}</h3>
          </div>
          <div className={styles.featuredGrid}>
            <div className={styles.featuredBlock}>
              <h4 className={styles.featuredBlockTitle}>Challenge</h4>
              <p className={styles.featuredBlockBody}>
                {featuredCaseStudy.challenge}
              </p>
            </div>
            <div className={styles.featuredBlock}>
              <h4 className={styles.featuredBlockTitle}>Solution</h4>
              <p className={styles.featuredBlockBody}>
                {featuredCaseStudy.solution}
              </p>
            </div>
            <div className={styles.featuredBlock}>
              <h4 className={styles.featuredBlockTitle}>Outcomes</h4>
              <ul className={styles.featuredList}>
                {featuredCaseStudy.outcomes.map((o) => (
                  <li key={o} className={styles.featuredListItem}>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.featuredBlock}>
              <h4 className={styles.featuredBlockTitle}>Technologies Used</h4>
              <div className={styles.featuredTags}>
                {featuredCaseStudy.technologies.map((t) => (
                  <span key={t} className={styles.featuredTag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="surface">
        <PageIntro
          title="More Case Studies"
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
