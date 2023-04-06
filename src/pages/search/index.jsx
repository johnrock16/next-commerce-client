
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Header from '@components/header/header';
import ProductTile from '@components/product/productTile/productTile';
import Footer from '@components/footer/footer';
import styles from './search.module.scss';
import Head from 'next/head';
import Minicart from '@components/cart/minicart';
import { IoOptionsSharp } from 'react-icons/io5';

export async function getStaticProps({ locale }) {
    return {
      props: {...await serverSideTranslations(locale, ['search', 'components', 'common'])},
    }
}

export default function MySearchPage(){
    const { t } = useTranslation('search');
    return (
        <>
            <Head>
                <meta name='description' content='My Data page of Next Ecommerce here you can see and update your personal data'/>
            </Head>
            <Header/>
            <main className={styles.searchPage}>
                <Minicart/>
                <div className='container'>
                    <div className={styles.searchPage__wrapper}>
                        <h1>{t('search.title')}</h1>
                        <div className={styles.searchPage__options}>
                            <div className={styles.searchPage__option}>
                                <button className='button button--iconText'><IoOptionsSharp/>{t('search.buttonFilters')}</button>
                            </div>
                        </div>
                        <div>
                            <h2>{t('search.results')}</h2>
                            <div className={styles.searchPage__products}>
                                <ProductTile pid="ns2017"/>
                                <ProductTile pid="smphone"/>
                                <ProductTile pid="smphone"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}