import Image from 'next/image';
import styles from './productTile.module.scss';
import { useDispatch } from 'react-redux';
import { addProduct } from '@store/reducers/cart';
import PRODUCT from '@mock/product/products.json';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function ProductTile({pid}) {
    const dispatch = useDispatch();
    const { t } = useTranslation('common')
    const {id, name, seller, price, image} = PRODUCT[pid]

    const handleProductAdd = () => {
        dispatch(addProduct(PRODUCT[id]));
    }
    return(
        <div className={styles.productTile}>
            <Link href={`/product/${id}`}>
                <Image src={image.src} alt='next logo' width={200} height={200} loading='lazy'/>
            </Link>
            <div className={styles.productTile__description}>
                <Link href={`/product/${id}`}><h3>{name}</h3></Link>
                <Link className={styles.productTile__company} href={`/company/vid`}>{seller}</Link>
                <span className={styles.productTile__priceTotal}>R$ {price.total}</span>
                <span className={styles.productTile__priceParcel}>em até {price.parcel.times}x de R$ {price.parcel.value} sem juros</span>
            </div>
            <div className={styles.productTile__buttonContainer}>
                <button className="button button--buyTile" onClick={handleProductAdd}>{t('button.buy')}</button>
            </div>
        </div>
    )
}