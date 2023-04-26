import { useDispatch } from 'react-redux';
import { addProduct } from '@store/reducers/cart';
import Image from 'next/image';
import Header from '@components/header/header';
import Footer from '@components/footer/footer';
import Minicart from '@components/cart/minicart';
import PRODUCTS from '@mock/product/products.json';
import styles from './product.module.scss';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Breadcrumb from '@components/breadcrumb/breadcrumb';
import { STRAPI_API_URL, STRAPI_URL } from '../../rest/env';

export const getServerSideProps = async ({ query, locale }) => {
    const pid = query.pid;
    const productResolve = await fetch(STRAPI_API_URL+`/products/${pid}?populate=*`,{method: 'GET'})
    const product = await productResolve.json();
    return {
        props: {
            pid: pid,
            product: product.data.attributes,
            ...await serverSideTranslations(locale, ['product','components', 'common'])
        }
    }
}

const ProductPage = ({pid, product}) => {
    const dispatch = useDispatch();
    const { t } = useTranslation('common');

    const handleProductAdd = () => {
        dispatch(addProduct({...product, id: pid}));
    }

    return (
        <>
            <Head>
                <meta name='description' content={`Next Commerce product page of ${product.name}`}/>
            </Head>
            <Header/>
            <Minicart/>
            <main className={styles.productPage}>
                <div className='container'>
                    <div className={styles.productPage__wrapper}>
                        <Breadcrumb isDynamicPage={true}/>
                        <div className={styles.productPage__content}>
                            <div className={styles.productPage__banner}>
                                <Image className='img-fluid' src={STRAPI_URL+product.images.data[0].attributes.url} alt={product.images.data[0].attributes.alternativeText} width={240} height={240}/>
                            </div>
                            <div className={styles.productPage__info}>
                                <h1>{product.name}</h1>
                                <h2>{product.seller.data.attributes.name}</h2>
                                <span className={styles.productPage__price}>R${product.priceTotal}</span>
                                <p>ou em x{product.priceParcelTimes} de {product.priceTotal/product.priceParcelTimes}</p>
                            </div>
                            <button className='button button--buy' onClick={handleProductAdd}>{t('button.buy')}</button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default ProductPage;