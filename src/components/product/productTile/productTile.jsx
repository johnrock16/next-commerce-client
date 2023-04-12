import Image from 'next/image';
import styles from './productTile.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '@store/reducers/cart';
import { addFavorite, removeFavorite } from '@store/reducers/user';
import PRODUCT from '@mock/product/products.json';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import ButtonFavorite from '@components/button/buttonFavorite/buttonFavorite';
import ProductCount from '../productCount/productCount';

export default function ProductTile({pid}) {
    const dispatch = useDispatch();
    const { t } = useTranslation('common');
    const isFavorite = useSelector((state) => state.user.favorite[pid]);
    const cart = useSelector((state) => state.cart);
    const {id, name, seller, price, image} = PRODUCT[pid];

    const handleProductAdd = () => {
        dispatch(addProduct(PRODUCT[id]));
    }

    const handleFavorite = ([isFavorite, setFavorite]) => {
        if(!isFavorite) {
            dispatch(addFavorite({pid}));
        }
        else {
            dispatch(removeFavorite({pid}));
        }
        setFavorite(!isFavorite);
    }

    return (
        <div className={styles.productTile}>
            <div className={styles.productTile__favorite}>
                <ButtonFavorite className="button button--icon" onClick={handleFavorite} favorited={isFavorite}/>
            </div>
            <Link href={`/product/${id}`}>
                <Image src={image.src} alt='next logo' width={200} height={200} loading='lazy'/>
            </Link>
            <div className={styles.productTile__description}>
                <Link href={`/product/${id}`}><h3>{name}</h3></Link>
                <Link className={styles.productTile__company} href={`/company/vid`}>{seller}</Link>
                <span className={styles.productTile__priceTotal}>R$ {price.total}</span>
                <span className={styles.productTile__priceParcel}>em até {price.parcel.times}x de R$ {(price.total / price.parcel.times).toFixed(2)} sem juros</span>
            </div>
            {
            (cart && cart.items[pid]?.count > 0)
            ?
                <div className={styles.productTile__buttonCountContainer}>
                    <ProductCount pid={id} count={cart.items[pid].count}/>
                </div>
            :
                <div className={styles.productTile__buttonContainer}>
                    <button className="button button--buyTile" onClick={handleProductAdd}>{t('button.buy')}</button>
                </div>
            }
        </div>
    )
}