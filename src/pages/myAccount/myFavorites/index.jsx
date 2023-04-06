
import SimpleHeader from '@components/header/simpleHeader';
import ProductTile from '@components/product/productTile/productTile';
import Footer from '@components/footer/footer';
import styles from './myFavorites.module.scss';
import Head from 'next/head';

export default function MyFavoritePage(){
    return (
        <>
            <Head>
                <meta name='description' content='My Favorites page of Next Ecommerce here you can manage your favorite products'/>
            </Head>
            <SimpleHeader/>
            <main className={styles.myFavoritesPage}>
                <div className='container'>
                    <div className={styles.myFavoritesPage__wrapper}>
                        <h1>My Favorites</h1>
                        <h2>Products</h2>
                        <div className={styles.myFavoritesPage__products}>
                            <ProductTile pid="ps4ctrl"/>
                            <ProductTile pid="ns2017"/>
                            <ProductTile pid="smphone"/>
                            <ProductTile pid="smphone"/>
                            <ProductTile pid="smphone"/>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}