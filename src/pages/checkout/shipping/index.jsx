import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './shipping.module.scss';
import { IoAddSharp } from 'react-icons/io5';
import Link from 'next/link';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Breadcrumb from '@components/breadcrumb/breadcrumb';

export async function getStaticProps({ locale }) {
    return {
      props: {...await serverSideTranslations(locale, ['checkoutShipping','components', 'common'])},
    }
}

export default function CheckoutShippingPage(){
    const { t } = useTranslation('checkoutShipping');
    return (
        <>
            <Head>
                <meta name='description' content={`Checkout shipping page of Next Commerce select a address and a delivery method`}/>
            </Head>
            <SimpleHeader/>
            <main className={styles.shippingPage}>
                <div className='container'>
                    <div className={styles.shippingPage__wrapper}>
                        <div className={styles.shippingPage__breadcrumbWrapper}>
                            <Breadcrumb/>
                        </div>
                        <h1>{t('checkoutShipping.title')}</h1>
                        <div className={styles.shippingPage__details}>
                            <h2>{t('checkoutShipping.addressChoose')}</h2>
                            <div className={styles.shippingPage__box}>
                                <Link href='/myAccount/myAddress/form' className={styles.shippingPage__add}>
                                    <IoAddSharp/>
                                    <span>{t('checkoutShipping.addressAdd')}</span>
                                </Link>
                                <div className='radioField'>
                                    <label htmlFor='house'>
                                        Casa
                                        <input name="address" type="radio"/>
                                    </label>
                                </div>
                                <div className='radioField'>
                                    <label htmlFor='work'>
                                        Trabalho
                                        <input name="work" type="radio"/>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.shippingPage__details}>
                            <h2>{t('checkoutShipping.addressDeliver')}</h2>
                            <div className={styles.shippingPage__box}>
                                <div className='radioField'>
                                    <label htmlFor='express'>
                                        Entrega Express - estimativa 7 dias - R$24,00
                                        <input name="express" type="radio"/>
                                    </label>
                                </div>
                                <div className='radioField'>
                                    <label htmlFor='notExpress'>
                                        Entrega não tão express - estimativa 30 dias - R$12,00
                                        <input name="notExpress" type="radio"/>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <Link href='/checkout/payment' className={styles.checkoutPage__boxBottom}>
                            <button className='button button--secondary'>{t('checkoutShipping.buttonPayment')}</button>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}