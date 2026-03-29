export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  expertise: string[];
  linkedIn?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'tm-1',
    name: 'Eldon Gormsen',
    title: 'Founder & AI Strategy Lead',
    bio: 'Eldon is the driving force behind Brentwood AI Factory, bringing together community leadership and a passion for making AI practical and accessible for local businesses. He guides strategic direction and keeps the team focused on real outcomes.',
    expertise: ['AI Strategy', 'Business Leadership', 'Community Engagement', 'Change Management'],
    linkedIn: 'https://www.linkedin.com/in/eldongormsen/',
  },
  {
    id: 'tm-2',
    name: 'Luke Gormsen',
    title: 'Technology & Development Lead',
    bio: 'Luke leads the technical side of Brentwood AI Factory, turning AI concepts into working solutions. With a sharp eye for emerging technologies and a knack for hands-on problem solving, he bridges the gap between innovation and implementation.',
    expertise: ['Software Development', 'AI Implementation', 'Technical Architecture', 'Automation'],
    linkedIn: 'https://www.linkedin.com/in/luke-gormsen/',
  },
  {
    id: 'tm-3',
    name: 'Aidan Snider',
    title: 'AI Solutions & Data Specialist',
    bio: 'Aidan brings analytical rigour and a data-first mindset to every project. He specialises in designing AI-powered workflows and data solutions that deliver measurable results, helping local businesses make smarter decisions faster.',
    expertise: ['Data Analysis', 'AI Workflows', 'Process Automation', 'Business Intelligence'],
    linkedIn: 'https://www.linkedin.com/in/aidan-snider-680369226/',
  },
  {
    id: 'tm-4',
    name: 'Andrew Fischer',
    title: 'Business Development & Partnerships',
    bio: 'Andrew connects Brentwood AI Factory with the broader business community, identifying opportunities and building lasting partnerships. His focus on client relationships ensures that every engagement starts — and ends — with the right outcomes in mind.',
    expertise: ['Business Development', 'Client Relations', 'Partnerships', 'Strategic Growth'],
    linkedIn: 'https://www.linkedin.com/in/andrewfischertn/',
  },
];
