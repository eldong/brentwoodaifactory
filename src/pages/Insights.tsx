import HeroSection from '../components/HeroSection';
import SectionWrapper from '../components/SectionWrapper';
import PageIntro from '../components/PageIntro';
import CtaSection from '../components/CtaSection';
import styles from './Insights.module.css';

const whyNow = [
  {
    id: 'wn-1',
    stat: '2025',
    heading: 'AI has crossed the threshold',
    body: 'Large language models, cloud APIs, and off-the-shelf AI tooling have matured to the point where deployment is practical and affordable — even for small and mid-sized businesses.',
  },
  {
    id: 'wn-2',
    stat: '3×',
    heading: 'Speed advantage is real',
    body: 'Businesses using AI-driven analytics and automation report decision cycles up to three times faster than competitors still relying on manual processes.',
  },
  {
    id: 'wn-3',
    stat: '40%',
    heading: 'Significant labour savings',
    body: 'Routine tasks — document processing, customer triage, report generation — can be automated at scale, freeing teams for higher-value work that requires human judgement.',
  },
  {
    id: 'wn-4',
    stat: 'Now',
    heading: 'Early movers build compounding advantages',
    body: "AI capabilities improve with use — better data, better models, better outputs. Organisations that start now accumulate an advantage that's expensive for competitors to replicate later.",
  },
];

const useCases = [
  {
    id: 'uc-1',
    title: 'Knowledge Management & Q&A',
    description:
      'Surface answers from internal documents, presentations, and expert knowledge using conversational AI — reducing the time employees spend searching for information.',
  },
  {
    id: 'uc-2',
    title: 'Document Processing & Extraction',
    description:
      'Automate the reading, classification, and data extraction from invoices, contracts, and forms — cutting processing time from hours to seconds with high accuracy.',
  },
  {
    id: 'uc-3',
    title: 'Customer Support Automation',
    description:
      "Handle routine customer enquiries with AI assistants that understand context, escalate intelligently, and maintain your brand's tone — available around the clock.",
  },
  {
    id: 'uc-4',
    title: 'Demand Forecasting & Planning',
    description:
      'Use machine learning to predict sales patterns, inventory needs, and resource demand — reducing waste and improving operational efficiency.',
  },
  {
    id: 'uc-5',
    title: 'Predictive Maintenance',
    description:
      'Monitor equipment sensors in real time and detect early warning signs of failure before they become costly breakdowns — keeping operations running smoothly.',
  },
  {
    id: 'uc-6',
    title: 'Sales & Marketing Intelligence',
    description:
      'Identify high-value prospects, optimise campaign targeting, and personalise outreach using AI models trained on your own customer and behavioural data.',
  },
];

const risks = [
  {
    id: 'r-1',
    title: 'Starting without a clear problem to solve',
    body: "Deploying AI because it feels like the right thing to do — without a specific, measurable business problem — leads to expensive pilots that deliver no real value. Start with the outcome, not the technology.",
  },
  {
    id: 'r-2',
    title: 'Underestimating data quality requirements',
    body: 'AI models are only as good as the data they learn from. Poor data quality, inconsistent formats, and fragmented sources are the most common reasons AI projects stall or fail to deliver expected results.',
  },
  {
    id: 'r-3',
    title: 'Over-automating too early',
    body: 'Automating a broken process just speeds up the mistakes. Before applying AI, understand and improve the underlying workflow. Automation should amplify good process, not encode bad habits.',
  },
  {
    id: 'r-4',
    title: 'Ignoring adoption and change management',
    body: 'Even the most technically sound AI system fails if the people using it do not trust or understand it. User buy-in, clear explainability, and training are as important as the technology itself.',
  },
  {
    id: 'r-5',
    title: 'Choosing the wrong vendor or platform',
    body: "Many AI vendors offer compelling demos that collapse under real-world conditions. Picking a platform without evaluating it against your actual data and use case creates lock-in and difficult migrations later.",
  },
];

const deliverySteps = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'We start by understanding your business — not your technology. Through structured workshops, we identify where AI can create measurable impact and where it cannot.',
  },
  {
    step: '02',
    title: 'Feasibility & Data Review',
    description:
      'Before writing a line of code, we assess your data landscape. We identify gaps, quality issues, and what it will take to make the use case viable.',
  },
  {
    step: '03',
    title: 'Proof of Concept',
    description:
      'We build a focused, time-boxed prototype to validate the core assumption — giving you real evidence before committing to a full build.',
  },
  {
    step: '04',
    title: 'Production Build',
    description:
      'Once validated, we build for the real world — with proper security, observability, integration with your existing systems, and handoff documentation.',
  },
  {
    step: '05',
    title: 'Knowledge Transfer & Support',
    description:
      "We don't hand over a black box. We train your team, document what we've built, and remain available as a partner as your needs evolve.",
  },
];

export default function Insights() {
  return (
    <div>
      <HeroSection
        title="Insights: "
        accentText="Why AI, Why Now"
        subtitle="A practical, grounded perspective on what AI means for local businesses — the opportunity, the risks, and how to approach it sensibly."
      />

      {/* Why AI Matters Now */}
      <SectionWrapper>
        <PageIntro
          title="Why AI Matters Now"
          subtitle="AI has moved from research labs to real business outcomes. Here's what that shift means for organisations like yours."
        />
        <div className={styles.statGrid}>
          {whyNow.map((item) => (
            <div key={item.id} className={styles.statCard}>
              <p className={styles.stat}>{item.stat}</p>
              <h3 className={styles.statHeading}>{item.heading}</h3>
              <p className={styles.statBody}>{item.body}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* The Pressure to Start */}
      <SectionWrapper variant="surface">
        <PageIntro
          title="Why Businesses Feel Pressure to 'Start Using AI'"
          subtitle="The urgency is real — but acting on pressure alone leads to waste. Here's how to think about it clearly."
        />
        <div className={styles.twoCol}>
          <div className={styles.twoColText}>
            <p>
              Every business leader is hearing the same thing from boards, investors,
              and the press: <em>you need to be doing AI</em>. That pressure is
              understandable — AI is reshaping entire industries, and the fear of
              being left behind is legitimate.
            </p>
            <p>
              But urgency without direction is expensive. The businesses that benefit
              most from AI are not the ones that deployed something quickly — they're
              the ones that identified a specific, high-value problem and applied the
              right tool to solve it.
            </p>
            <p>
              The good news is that the window has not closed. Foundational models are
              now accessible via API, deployment costs have fallen dramatically, and
              the tooling ecosystem is mature. You do not need a research team or a
              multimillion-pound infrastructure budget. You need a clear problem,
              decent data, and a delivery partner who has done this before.
            </p>
          </div>
          <div className={styles.twoColHighlight}>
            <h4 className={styles.highlightHeading}>The right questions to ask</h4>
            <ul className={styles.highlightList}>
              <li>What specific decision or task would benefit from AI?</li>
              <li>Do we have the data needed to support it?</li>
              <li>What does success look like — and how would we measure it?</li>
              <li>What's the cost of doing nothing in 12 months?</li>
              <li>Who in our organisation will own and maintain this?</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Common Use Cases */}
      <SectionWrapper>
        <PageIntro
          title="Common Business Use Cases"
          subtitle="These are the AI applications we see delivering real, measurable value across industries today."
        />
        <div className={styles.useCaseGrid}>
          {useCases.map((uc) => (
            <div key={uc.id} className={styles.useCaseCard}>
              <h3 className={styles.useCaseTitle}>{uc.title}</h3>
              <p className={styles.useCaseBody}>{uc.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Risks */}
      <SectionWrapper variant="surface">
        <PageIntro
          title="Risks When Adopting AI Poorly"
          subtitle="Most AI project failures are predictable and avoidable. These are the patterns we see most often."
        />
        <div className={styles.riskList}>
          {risks.map((risk) => (
            <div key={risk.id} className={styles.riskItem}>
              <div className={styles.riskIcon}>!</div>
              <div>
                <h3 className={styles.riskTitle}>{risk.title}</h3>
                <p className={styles.riskBody}>{risk.body}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* How We Help */}
      <SectionWrapper>
        <PageIntro
          title="How We Bridge Strategy and Implementation"
          subtitle="We sit between business leadership and technical delivery — translating what you need into what gets built."
        />
        <div className={styles.twoCol}>
          <div className={styles.twoColText}>
            <p>
              Most AI challenges are not technical problems — they're communication
              problems. The people who understand the business do not speak the
              language of machine learning engineers. The engineers who can build the
              solution do not always understand the business constraints.
            </p>
            <p>
              We work at that intersection. Our team includes people who have led
              business transformation programmes and people who have shipped production
              AI systems. That combination means we can walk into a boardroom and
              explain a RAG pipeline without using the word "RAG".
            </p>
            <p>
              We do not pitch technology for the sake of it. If a simpler solution
              would do the job better, we'll tell you. Our goal is the business
              outcome — not the technical complexity of the solution we leave behind.
            </p>
          </div>
          <div className={styles.twoColHighlight}>
            <h4 className={styles.highlightHeading}>What sets us apart</h4>
            <ul className={styles.highlightList}>
              <li>Business-first framing — we start with outcomes, not tools</li>
              <li>Honest feasibility assessment before any build commitment</li>
              <li>Plain-language communication throughout every engagement</li>
              <li>Local presence and accountability — not an offshore model</li>
              <li>Knowledge transfer so your team is never dependent on us</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Delivery Model */}
      <SectionWrapper variant="surface">
        <PageIntro
          title="Our Practical Delivery Model"
          subtitle="A clear, repeatable approach — from first conversation to a working system your team can own."
        />
        <ol className={styles.deliveryList}>
          {deliverySteps.map((step) => (
            <li key={step.step} className={styles.deliveryStep}>
              <span className={styles.deliveryNumber}>{step.step}</span>
              <div>
                <p className={styles.deliveryTitle}>{step.title}</p>
                <p className={styles.deliveryBody}>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </SectionWrapper>

      <CtaSection
        title="Ready to have a practical conversation about AI?"
        subtitle="No jargon, no sales pitch — just an honest discussion about where AI can add value for your business."
        buttonLabel="Get in Touch"
        buttonTo="/contact"
      />
    </div>
  );
}
