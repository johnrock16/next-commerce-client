import styles from './card.module.scss';

export default function Card({children}) {
    return (
        <div className={styles.card}>
            <h2>Celulares e Comunicação</h2>
            <div className={styles.body}>
                {children}
            </div>
        </div>
    );
}