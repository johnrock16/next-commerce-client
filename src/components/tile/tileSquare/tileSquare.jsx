import Image from 'next/image';
import Link from 'next/link';
import styles from './tileSquare.module.scss';

export default function TileSquare() {
    return (
        <Link className={styles.tileSquare} href="/category">
            <Image src="/images/category/smartphone.webp" alt="next category" width={120} height={120} loading='lazy'/>
            <span>Category</span>
        </Link>
    );
}