import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__links}>
                <Link href='/institutional/about'>Sobre nós</Link>
                <a>Termos de Uso</a>
                <a>Politica de Privacidade</a>
                <a>FAQ</a>
            </div>
        </footer>
    );
}