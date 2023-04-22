import Image from "next/image";
import styles from './productCart.module.scss';
import ProductCount from '../productCount/productCount';
import Link from "next/link";
import { STRAPI_URL } from "@/rest/env";

export default function ProductCart({product}) {
    const {id, name, price, seller} = product
    return (
        <div className={styles.productCart}>
            <Image src={STRAPI_URL+product.image.url} alt={product.image.alternativeText} width={120} height={120}/>
            <div className={styles.productCart__description}>
                <div className={styles.productCart__info}>
                    <Link href={`/product/${id}`} className={styles.productCart__title}>{name}</Link>
                    <Link className={styles.productCart__company} href={`/company/vid`}>{seller}</Link>
                </div>
                <div className={styles.productCart__prices}>
                    <span>R${product.price.total}</span>
                    <span>ou x {product.price.parcel.times} de R${(price.total / price.parcel.times).toFixed(2)}</span>
                </div>
                <ProductCount pid={product.id} count={product.count}/>
            </div>
        </div>
    );
}