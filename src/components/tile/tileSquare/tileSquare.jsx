import Image from 'next/image';
import Link from 'next/link';
import styles from './tileSquare.module.scss';

export default function TileSquare({text, image, href}) {
    return (
        <Link className={styles.tileSquare} href={href}>
            <Image src={image.src} alt={image.alt} width={120} height={120} loading='lazy'/>
            <span>{text}</span>
        </Link>
    );
}