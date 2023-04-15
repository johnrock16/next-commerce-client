import Image from 'next/image';
import Link from 'next/link';
import styles from './tile.module.scss';

export default function Tile({href, image, text}) {
    return (
        <Link href={href} className={styles.tile}>
            <Image src={image.src} alt={image.alt} width={80} height={80} loading='lazy'/>
            <span>{text}</span>
        </Link>
    );
}