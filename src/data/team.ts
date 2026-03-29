export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'tm-1',
    name: 'Alex Morgan',
    title: 'CEO & AI Strategist',
    bio: 'Alex brings 15+ years of experience in enterprise AI strategy and digital transformation, helping organisations navigate the shift to AI-first operations.',
  },
  {
    id: 'tm-2',
    name: 'Jordan Lee',
    title: 'Head of Machine Learning',
    bio: 'Jordan leads our ML engineering practice, specialising in large language models, predictive analytics, and production AI deployment at scale.',
  },
  {
    id: 'tm-3',
    name: 'Taylor Reeves',
    title: 'Director of Client Success',
    bio: 'Taylor ensures our clients realise measurable ROI from every AI initiative, managing delivery and long-term partnerships across industries.',
  },
  {
    id: 'tm-4',
    name: 'Sam Okafor',
    title: 'Principal Data Scientist',
    bio: 'Sam designs and validates our AI models, applying rigorous statistical methods and domain expertise to deliver reliable, explainable results.',
  },
];
