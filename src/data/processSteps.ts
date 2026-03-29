export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 'step-1',
    step: 1,
    title: 'Discover',
    description:
      'We start with deep discovery — understanding your business objectives, data landscape, and the specific challenges AI can address.',
  },
  {
    id: 'step-2',
    step: 2,
    title: 'Design',
    description:
      'We architect the AI solution, define data requirements, and create a delivery plan aligned with your timeline and budget.',
  },
  {
    id: 'step-3',
    step: 3,
    title: 'Build',
    description:
      'Our engineers and data scientists develop, test, and validate the AI models and integration layers using agile delivery practices.',
  },
  {
    id: 'step-4',
    step: 4,
    title: 'Deploy',
    description:
      'We ship to production with confidence, ensuring reliability, security, and performance from day one.',
  },
  {
    id: 'step-5',
    step: 5,
    title: 'Optimise',
    description:
      'Post-launch, we monitor outcomes, iterate on model performance, and help your team scale and maintain the solution independently.',
  },
];
