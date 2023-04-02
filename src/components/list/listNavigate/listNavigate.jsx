import styles from './listNavigate.module.scss';

export default function ListNavigate({children}) {
    return(
        <div className={styles.listNavigate}>
            <div className={styles.listNavigate__list}>
                {children}
            </div>
        </div>
    )
}