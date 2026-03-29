import HeroSection from '../components/HeroSection';
import SectionWrapper from '../components/SectionWrapper';
import PageIntro from '../components/PageIntro';
import TeamCard from '../components/TeamCard';
import CtaSection from '../components/CtaSection';
import { teamMembers } from '../data/team';
import styles from './Team.module.css';

export default function Team() {
  return (
    <div>
      <HeroSection
        title="Meet the "
        accentText="Brentwood AI Factory Team"
        subtitle="A close-knit group of Microsoft, Salesforce, data, and business development specialists — focused on making AI work for local businesses."
      />

      <SectionWrapper>
        <PageIntro
          title="The People Behind Our Work"
          subtitle="We combine deep platform expertise with practical business knowledge to deliver AI outcomes that actually stick."
        />
        <div className={styles.cardGrid}>
          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              title={member.title}
              bio={member.bio}
              expertise={member.expertise}
              linkedIn={member.linkedIn}
            />
          ))}
        </div>
      </SectionWrapper>

      <CtaSection
        title="Want to work with us?"
        subtitle="We're always open to conversations with talented people and ambitious clients."
        buttonLabel="Get In Touch"
        buttonTo="/contact"
      />
    </div>
  );
}
