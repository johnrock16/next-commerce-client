import Image from 'next/image';
import styles from './productTile.module.scss';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../store/reducers/cart';
import PRODUCT from '../../../mock/product/products.json';

export default function ProductTile({pid}) {
    const dispatch = useDispatch();
    const {id, name, seller, price, image} = PRODUCT[pid]

    const handleProductAdd = () => {
        dispatch(addProduct(PRODUCT[id]));
    }
    return(
        <div className={styles.productTile} onClick={handleProductAdd}>
            <a>
                <Image src={image.src} alt='next logo' width={200} height={200} loading='lazy'/>
            </a>
            <div className={styles.productTile__description}>
                <h3>{name}</h3>
                <a className={styles.productTile__company} href=''>{seller}</a>
                <span className={styles.productTile__priceTotal}>R$ {price.total}</span>
                <span className={styles.productTile__priceParcel}>em até {price.parcel.times}x de R$ {price.parcel.value} sem juros</span>
            </div>
        </div>
    )
}