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
    name: 'Chris Dawson',
    title: 'Microsoft Cloud Solution Architect',
    bio: 'Chris is a seasoned Microsoft CSA with deep expertise in Azure AI services, Microsoft Copilot, and cloud-native architecture. He helps local businesses unlock the full potential of the Microsoft ecosystem — from Azure OpenAI to Power Platform automation.',
    expertise: ['Azure AI', 'Microsoft Copilot', 'Power Platform', 'Cloud Architecture'],
    linkedIn: '#',
  },
  {
    id: 'tm-2',
    name: 'Priya Nair',
    title: 'Salesforce AI & CRM Expert',
    bio: 'Priya specialises in Salesforce Einstein AI, Sales Cloud, and Service Cloud implementations. She bridges the gap between CRM data and intelligent automation, helping businesses personalise customer experiences and streamline sales operations.',
    expertise: ['Salesforce Einstein', 'Sales Cloud', 'Service Cloud', 'CRM Automation'],
    linkedIn: '#',
  },
  {
    id: 'tm-3',
    name: 'Marcus Webb',
    title: 'AI Data & Analytics Lead',
    bio: 'Marcus brings rigorous data science and analytics expertise to every engagement. From data pipeline architecture to machine learning model development and BI dashboards, he turns raw data into reliable, actionable AI outcomes.',
    expertise: ['Machine Learning', 'Data Engineering', 'Power BI', 'Predictive Analytics'],
    linkedIn: '#',
  },
  {
    id: 'tm-4',
    name: 'Leanne Torres',
    title: 'Business Development & Local Business Connector',
    bio: 'Leanne is the bridge between AI technology and the local business community. With a background in SME consulting and regional economic development, she translates complex AI solutions into practical, relatable business value for owners and operators.',
    expertise: ['SME Strategy', 'Business Development', 'Stakeholder Engagement', 'Change Management'],
    linkedIn: '#',
  },
];
