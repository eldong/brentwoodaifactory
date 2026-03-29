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
        title="Our Team"
        subtitle="Meet the people behind Brentwood AI Factory — a team of strategists, engineers, and data scientists dedicated to delivering real AI outcomes."
      />

      <SectionWrapper>
        <PageIntro
          title="The People Behind Our Work"
          subtitle="We combine deep AI expertise with commercial pragmatism to help clients succeed."
        />
        <div className={styles.cardGrid}>
          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              title={member.title}
              bio={member.bio}
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
