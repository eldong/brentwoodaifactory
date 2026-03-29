export interface Service {
  id: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'svc-1',
    title: 'AI Strategy & Roadmapping',
    description:
      'We assess your business goals and data maturity to build a practical, phased AI adoption roadmap aligned with measurable outcomes.',
  },
  {
    id: 'svc-2',
    title: 'Custom AI & ML Development',
    description:
      'From natural language processing to computer vision, we design and build bespoke AI models tailored to your specific use cases.',
  },
  {
    id: 'svc-3',
    title: 'Data Engineering & Infrastructure',
    description:
      'We architect scalable data pipelines and cloud infrastructure to ensure your AI systems are built on a reliable, production-ready foundation.',
  },
  {
    id: 'svc-4',
    title: 'AI Integration & Deployment',
    description:
      'We embed AI capabilities into your existing workflows and systems, ensuring seamless adoption with minimal disruption.',
  },
  {
    id: 'svc-5',
    title: 'Ongoing Optimisation & Support',
    description:
      'Post-launch, we monitor model performance, retrain on new data, and continuously improve your AI systems as your business evolves.',
  },
  {
    id: 'svc-6',
    title: 'AI Literacy & Enablement',
    description:
      'We upskill your teams with hands-on workshops and training so your organisation can own and extend AI capabilities internally.',
  },
];
