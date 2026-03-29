import styles from './TeamCard.module.css';

interface TeamCardProps {
  name: string;
  title: string;
  bio: string;
  expertise?: string[];
  linkedIn?: string;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export default function TeamCard({ name, title, bio, expertise, linkedIn }: TeamCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.avatar} aria-hidden="true">
        {getInitials(name)}
      </div>
      <div className={styles.body}>
        <p className={styles.name}>{name}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.bio}>{bio}</p>
        {expertise && expertise.length > 0 && (
          <ul className={styles.tags} aria-label="Areas of expertise">
            {expertise.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}
        {linkedIn && (
          <a
            href={linkedIn}
            className={styles.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on LinkedIn`}
          >
            LinkedIn →
          </a>
        )}
      </div>
    </div>
  );
}
