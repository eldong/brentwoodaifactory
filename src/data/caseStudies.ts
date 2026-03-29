export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  summary: string;
  outcomes: string[];
  tags: string[];
}

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
