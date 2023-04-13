
import SimpleHeader from '@components/header/simpleHeader';
import ProductTile from '@components/product/productTile/productTile';
import Footer from '@components/footer/footer';
import styles from './myFavorites.module.scss';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useSelector } from 'react-redux';

export async function getStaticProps({ locale }) {
    return {
      props: {...await serverSideTranslations(locale, ['myFavorites', 'common'])},
    }
}

export default function MyFavoritePage(){
    const { t } = useTranslation('myFavorites');
    const favoriteProducts = useSelector((state) => state.user.favorite);

    return (
        <>
            <Head>
                <meta name='description' content='My Favorites page of Next Ecommerce here you can manage your favorite products'/>
            </Head>
            <SimpleHeader/>
            <main className={styles.myFavoritesPage}>
                <div className='container'>
                    <div className={styles.myFavoritesPage__wrapper}>
                        <h1>{t('myFavorites.title')}</h1>
                        <h2>{t('myFavorites.products')}</h2>
                            {
                                (favoriteProducts && Object.keys(favoriteProducts).length > 0)
                                ?
                                <div className={styles.myFavoritesPage__products}>
                                    {Object.keys(favoriteProducts).map((favoriteProduct, index) => (
                                        <ProductTile key={`favoriteProduct-${index}`} pid={favoriteProduct}/>
                                    ))}
                                </div>
                                :
                                <p className={styles.myFavoritesPage__paragraph}>{t('myFavorites.noProducts')}</p>
                            }
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}