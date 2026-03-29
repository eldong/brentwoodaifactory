import HeroSection from '../components/HeroSection';
import SectionWrapper from '../components/SectionWrapper';
import PageIntro from '../components/PageIntro';
import ServiceCard from '../components/ServiceCard';
import CtaSection from '../components/CtaSection';
import { services } from '../data/services';
import { processSteps } from '../data/processSteps';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div>
      <HeroSection
        title="Welcome to "
        accentText="Brentwood AI Factory"
        subtitle="We partner with forward-thinking businesses to design, build, and deploy AI solutions that drive real results."
        ctaLabel="Get In Touch"
        ctaTo="/contact"
      />

      <SectionWrapper>
        <PageIntro
          title="What We Do"
          subtitle="From strategy through to deployment, we cover the full AI lifecycle so you can focus on your business."
        />
        <div className={styles.cardGrid}>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="surface">
        <PageIntro
          title="Our Process"
          subtitle="A clear, repeatable process that takes you from idea to production AI."
        />
        <ol className={styles.stepList}>
          {processSteps.map((step) => (
            <li key={step.id} className={styles.step}>
              <span className={styles.stepNumber}>{step.step}</span>
              <div>
                <p className={styles.stepTitle}>{step.title}</p>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </SectionWrapper>

      <CtaSection
        title="Ready to start your AI journey?"
        subtitle="Let's talk about how AI can unlock new value in your business."
        buttonLabel="Contact Us"
        buttonTo="/contact"
      />
    </div>
  );
}
