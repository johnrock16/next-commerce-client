
import SimpleHeader from '@components/header/simpleHeader';
import ProductTile from '@components/product/productTile/productTile';
import Footer from '@components/footer/footer';
import styles from './myFavorites.module.scss';

export default function MyFavoritePage(){
    return (
        <>
            <SimpleHeader/>
            <main className={styles.myFavoritesPage}>
                <div className='container'>
                    <div className={styles.myFavoritesPage__wrapper}>
                        <h1>My Favorites</h1>
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