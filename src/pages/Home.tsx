import HeroSection from '../components/HeroSection';
import SectionWrapper from '../components/SectionWrapper';
import PageIntro from '../components/PageIntro';
import ServiceCard from '../components/ServiceCard';
import CtaSection from '../components/CtaSection';
import { services } from '../data/services';
import { processSteps } from '../data/processSteps';
import styles from './Home.module.css';

const whyAiReasons = [
  {
    id: 'reason-1',
    stat: '3×',
    heading: 'Faster decision-making',
    body: 'Businesses using AI-driven analytics report up to 3× faster insight-to-action cycles, giving them a clear edge over slower-moving competitors.',
  },
  {
    id: 'reason-2',
    stat: '40%',
    heading: 'Reduction in manual effort',
    body: 'Routine tasks — data entry, report generation, customer triage — can be automated at scale, freeing your team to focus on higher-value work.',
  },
  {
    id: 'reason-3',
    stat: 'Now',
    heading: 'AI is accessible to every business',
    body: 'The tools have matured. Off-the-shelf models, cloud APIs, and proven frameworks mean you no longer need a research lab to benefit from AI.',
  },
  {
    id: 'reason-4',
    stat: '2025',
    heading: 'The window is open — but closing',
    body: 'Early adopters are already building competitive moats with AI. Waiting means catching up costs more. The best time to start is right now.',
  },
];

export default function Home() {
  return (
    <div>
      <HeroSection
        title="Practical AI for "
        accentText="Local Business"
        subtitle="We partner with forward-thinking businesses to design, build, and deploy AI solutions that drive real results — not just demos."
        ctaLabel="Get Started"
        ctaTo="/contact"
        secondaryCtaLabel="Meet the Team"
        secondaryCtaTo="/team"
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
          title="Why AI — and Why Now"
          subtitle="AI is no longer a luxury for large enterprises. It's a practical, affordable lever that local businesses can pull today."
        />
        <div className={styles.reasonGrid}>
          {whyAiReasons.map((reason) => (
            <div key={reason.id} className={styles.reasonCard}>
              <p className={styles.reasonStat}>{reason.stat}</p>
              <h3 className={styles.reasonHeading}>{reason.heading}</h3>
              <p className={styles.reasonBody}>{reason.body}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <PageIntro
          title="Our Process"
          subtitle="A clear, repeatable delivery model — from idea to production AI — built for the pace of real business."
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
        title="Ready to turn your AI idea into a business outcome?"
        subtitle="Let's talk about where AI can unlock the most value in your business — no jargon, no pressure."
        buttonLabel="Contact Us"
        buttonTo="/contact"
      />
    </div>
  );
}
