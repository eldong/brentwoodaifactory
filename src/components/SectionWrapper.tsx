import { type ReactNode } from 'react';
import styles from './SectionWrapper.module.css';

interface SectionWrapperProps {
  children: ReactNode;
  variant?: 'default' | 'surface';
  className?: string;
}

export default function SectionWrapper({
  children,
  variant = 'default',
  className,
}: SectionWrapperProps) {
  return (
    <section
      className={[
        styles.section,
        variant === 'surface' ? styles.surface : '',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="container">{children}</div>
    </section>
  );
}
