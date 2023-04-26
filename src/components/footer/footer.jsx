import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import styles from './footer.module.scss';

export default function Footer() {
    const { t } = useTranslation('common');
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__links}>
                <Link href='/institutional/about'>{t('footer.aboutUs')}</Link>
                <Link href='/institutional/termsUse'>{t('footer.termsUse')}</Link>
                <Link href='/institutional/privacyPolicy'>{t('footer.privacyPolicy')}</Link>
                <Link href='/institutional/faq'>{t('footer.faq')}</Link>
            </div>
        </footer>
    );
}