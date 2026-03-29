export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  summary: string;
  outcomes: string[];
  tags: string[];
}

export interface FeaturedCaseStudy {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  technologies: string[];
}

export const featuredCaseStudy: FeaturedCaseStudy = {
  id: 'featured-1',
  client: 'Meridian Partners',
  industry: 'Professional Services',
  challenge:
    'Meridian Partners had accumulated years of valuable domain knowledge through executive talks, leadership presentations, and internal training sessions. That knowledge was locked inside recordings and documents that employees struggled to navigate. Finding a specific answer meant hunting through hours of video or scanning lengthy transcripts — an approach that was slow, inconsistent, and rarely successful.',
  solution:
    'We built a chatbot-style knowledge assistant backed by a Retrieval-Augmented Generation (RAG) pipeline. All prior executive talks and presentations were ingested into a searchable vector knowledge base. Users can now ask questions in plain language and receive precise, grounded answers — each response citing the specific talk or document it drew from, so employees always know where the information came from.',
  outcomes: [
    'Average time-to-answer reduced from 30+ minutes to under 60 seconds',
    'Employees self-serve knowledge that previously required scheduling time with executives',
    'Source citations in every response build trust and allow follow-up exploration',
    'Knowledge base continuously updated as new talks and materials are added',
  ],
  technologies: [
    'Azure OpenAI (GPT-4)',
    'Azure AI Search (vector + semantic)',
    'LangChain RAG pipeline',
    'Python',
    'SharePoint integration',
  ],
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs-1',
    title: 'AI-Powered Demand Forecasting for a National Retailer',
    industry: 'Retail',
    summary:
      'We built a machine learning forecasting system that reduced inventory waste by 23% and improved on-shelf availability across 400+ locations.',
    outcomes: [
      '23% reduction in inventory waste',
      '14% improvement in on-shelf availability',
      'Deployed across 400+ stores',
    ],
    tags: ['Machine Learning', 'Retail', 'Forecasting'],
  },
  {
    id: 'cs-2',
    title: 'Intelligent Document Processing for a Financial Services Firm',
    industry: 'Financial Services',
    summary:
      'We automated the extraction and classification of documents using NLP, cutting processing time from 4 hours to under 10 minutes per batch.',
    outcomes: [
      '97% reduction in manual processing time',
      '99.1% extraction accuracy',
      '£1.2M annual cost savings',
    ],
    tags: ['NLP', 'Automation', 'Finance'],
  },
  {
    id: 'cs-3',
    title: 'Predictive Maintenance for a Manufacturing Group',
    industry: 'Manufacturing',
    summary:
      'A real-time sensor data pipeline and anomaly detection model enabled proactive maintenance, reducing unplanned downtime by 41%.',
    outcomes: [
      '41% reduction in unplanned downtime',
      '18% lower maintenance costs',
      'Real-time alerting across 6 facilities',
    ],
    tags: ['IoT', 'Predictive Analytics', 'Manufacturing'],
  },
];
