import Image from 'next/image';
import styles from './productTile.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '@store/reducers/cart';
import { addFavorite, removeFavorite } from '@store/reducers/user';
import product from '@mock/product/products.json';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import ButtonFavorite from '@components/button/buttonFavorite/buttonFavorite';
import ProductCount from '../productCount/productCount';
import { STRAPI_API_URL, STRAPI_URL } from '@/rest/env';
import { useEffect, useState } from 'react';

export default function ProductTile({pid, productObject}) {
    const [product, setProduct] = useState(productObject);
    const dispatch = useDispatch();
    const { t } = useTranslation('common');
    const isFavorite = useSelector((state) => state.user.favorite[pid]);
    const cart = useSelector((state) => state.cart);

    const handleProductAdd = () => {
        dispatch(addProduct({...product, id: pid}));
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

    useEffect(()=> {
        if(!productObject) {
            console.log('aqui', pid)
            const requestProduct = async () => {
                const productResolve = await fetch(STRAPI_API_URL+`/products/${pid}?populate=*`,{method: 'GET'})
                const productResult = await productResolve.json();
                setProduct(productResult.data.attributes)
            }
            requestProduct();
        }
    },[productObject, pid])

    return (
        (product)
        ?
            <div className={styles.productTile}>
                <div className={styles.productTile__favorite}>
                    <ButtonFavorite className="button button--icon" onClick={handleFavorite} favorited={isFavorite} aria={`Favorite button of product ${product.name}`}/>
                </div>
                <Link href={`/product/${pid}`}>
                    <Image src={STRAPI_URL+product.thumb.data.attributes.url} alt='next logo' width={200} height={200} loading='lazy'/>
                </Link>
                <div className={styles.productTile__description}>
                    <Link href={`/product/${pid}`}><h3>{product.name}</h3></Link>
                    <Link className={styles.productTile__company} href={`/company/vid`}>{product.seller.data.attributes.name}</Link>
                    <span className={styles.productTile__priceTotal}>R$ {product.priceTotal}</span>
                    <span className={styles.productTile__priceParcel}>em até {product.priceParcelTimes}x de R$ {(product.priceTotal / product.priceParcelTimes).toFixed(2)} sem juros</span>
                </div>
                {
                (cart && cart.items[pid]?.count > 0)
                ?
                    <div className={styles.productTile__buttonCountContainer}>
                        <ProductCount pid={pid} count={cart.items[pid].count}/>
                    </div>
                :
                    <div className={styles.productTile__buttonContainer}>
                        <button className="button button--buyTile" onClick={handleProductAdd}>{t('button.buy')}</button>
                    </div>
                }
            </div>
        : null
    )
}