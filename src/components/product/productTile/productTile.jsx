import Image from 'next/image';
import styles from './productTile.module.scss';

export default function ProductTile({image}) {
    return(
        <div className={styles.productTile}>
            <a>
                <Image src={image.src} alt='next logo' width={200} height={200} loading='lazy'/>
            </a>
            <div className={styles.productTile__description}>
                <h3>Console Nintendo Switch Azul e Vermelho + Joy-Con Neon + Mario Kart 8 Deluxe + 3 Meses de Assinatura Nintendo Switch Online</h3>
                <a className={styles.productTile__company} href=''>Nintendo Switch</a>
                <span className={styles.productTile__priceTotal}>R$ 2.291,00</span>
                <span className={styles.productTile__priceParcel}>em até 10x de R$ 229,18 sem juros</span>
            </div>
        </div>
    )
}