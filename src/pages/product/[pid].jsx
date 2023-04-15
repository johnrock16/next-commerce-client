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

export const getServerSideProps = async ({ query, locale }) => {
    const pid = query.pid;
    const product = PRODUCTS[pid];

    return {
        props: {
            product: product,
            ...await serverSideTranslations(locale, ['product','components', 'common'])
        }
    }
}

const ProductPage = ({product}) => {
    const dispatch = useDispatch();
    const { t } = useTranslation('common');

    const handleProductAdd = () => {
        dispatch(addProduct(product));
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
                                <Image className='img-fluid' src={product.image.src} alt={product.image.alt} width={240} height={240}/>
                            </div>
                            <div className={styles.productPage__info}>
                                <h1>{product.name}</h1>
                                <h2>{product.seller}</h2>
                                <span className={styles.productPage__price}>R${product.price.total}</span>
                                <p>ou em x{product.price.parcel.times} de {product.price.parcel.value}</p>
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