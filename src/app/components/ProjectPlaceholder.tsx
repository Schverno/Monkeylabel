import styles from '../styles/projectPlaceholder.module.scss';

export default function ProjectPlaceholder({ title, home = false }: { title: string; home?: boolean }) {
    return (
        <div
            className={`${styles.placeholder} ${home ? styles.home : ''}`}
            role="img"
            aria-label={title}
            data-project-placeholder={title}
        >
            <span className={styles.frame} aria-hidden="true" />
            {home && <p className={styles.title}>{title}</p>}
        </div>
    );
}
