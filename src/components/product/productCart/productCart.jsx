import Image from "next/image";
import styles from './productCart.module.scss';
import ProductCount from '../productCount/productCount';

export default function ProductCart({product}) {
    return (
        <div className={styles.productCart}>
            <Image src={product.image.src} alt={product.image.alt} width={120} height={120}/>
            <div>
                <span>{product.name}</span>
                <span>{product.seller}</span>
                <span>R${product.price.total}</span>
                <span>ou x {product.price.parcel.times} de R${product.price.parcel.value}</span>
                <ProductCount pid={product.id} count={product.count}/>
            </div>
        </div>
    );
}