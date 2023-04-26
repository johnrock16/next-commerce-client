import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './confirm.module.scss';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
    return {
      props: {...await serverSideTranslations(locale, ['checkoutConfirm','components', 'common'])},
    }
}

export default function CheckoutConfirmPage() {
    const { t } = useTranslation('checkoutConfirm');
    const cart = useSelector((state) => state.cart);
    return (
        <>
            <Head>
                <meta name='description' content={`Confirm payment page of Next Commerce`}/>
            </Head>
            <SimpleHeader/>
            <main className={styles.confirmPage}>
                <div className='container'>
                    <div className={styles.confirmPage__wrapper}>
                        <h1>{t('checkoutConfirm.title')}</h1>
                        <h2>{t('checkoutConfirm.success')}</h2>
                        {
                            (cart && cart.length > 0) ?
                                <div className={styles.confirmPage__box}>
                                    <p>{t('checkoutConfirm.paymentItems')}{Object.keys(cart.items).map((key => <strong key={`confirm-product-${key}`}>{`${cart.items[key].name} `}</strong>))}</p>
                                </div>
                            : null
                        }
                        <Link href='/'>
                            <button className='button button--secondary'>{t('checkoutConfirm.buttonHome')}</button>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}