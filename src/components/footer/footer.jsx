import styles from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__links}>
                <a href='/institutional/about'>Sobre nós</a>
                <a>Termos de Uso</a>
                <a>Politica de Privacidade</a>
                <a>FAQ</a>
            </div>
        </footer>
    );
}