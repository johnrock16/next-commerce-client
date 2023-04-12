import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import ProductCart from '@components/product/productCart/productCart';
import styles from './checkout.module.scss';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }) {
    return {
      props: {...await serverSideTranslations(locale, ['checkout','components'])},
    }
}

export default function CheckoutPage(){
    const cart = useSelector((state) => state.cart);
    const { t } = useTranslation('checkout');
    return (
        <>
            <Head>
                <meta name='description' content='Checkout initial page of Next-Ecommerce in this page user see all products in your cart and can continue your order'/>
            </Head>
            <SimpleHeader/>
            <main className={styles.checkoutPage}>
                <div className='container'>
                    <div className={styles.checkoutPage__wrapper}>
                        <h1>{t('checkout.title')}</h1>
                        <div className={styles.checkoutPage__details}>
                            <h2>{t('checkout.details')}</h2>
                            <div className={styles.checkoutPage__box}>
                                <span><strong>{t('checkout.itemTotal')}:</strong> x{cart.length}</span>
                                <span><strong>{t('checkout.priceParcel')}:</strong> x{cart.price.parcel.times[0]} de R${cart.price.parcel.value}</span>
                                <span><strong>{t('checkout.priceTotal')}:</strong> R${cart.price.total}</span>
                                <Link href='/checkout/shipping' className={styles.checkoutPage__boxBottom}>
                                    <button className='button button--secondary'>{t('checkout.buttonShipment')}</button>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.checkoutPage__listProducts}>
                            <h2>{t('checkout.cart')}:</h2>
                            <div className={styles.checkoutPage__products}>
                            {
                                Object.keys(cart.items).map((key) => (
                                    <ProductCart product={cart.items[key]} key={`cart-${cart.items[key].id}`}/>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}