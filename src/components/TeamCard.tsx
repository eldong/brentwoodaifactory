import styles from './TeamCard.module.css';

interface TeamCardProps {
  name: string;
  title: string;
  bio: string;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export default function TeamCard({ name, title, bio }: TeamCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.avatar} aria-hidden="true">
        {getInitials(name)}
      </div>
      <div className={styles.body}>
        <p className={styles.name}>{name}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.bio}>{bio}</p>
      </div>
    </div>
  );
}
