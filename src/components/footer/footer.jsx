import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__links}>
                <Link href='/institutional/about'>Sobre nós</Link>
                <Link href='/institutional/termsUse'>Termos de Uso</Link>
                <Link href='/institutional/privacyPolicy'>Politica de Privacidade</Link>
                <Link href='/institutional/faq'>FAQ</Link>
            </div>
        </footer>
    );
}