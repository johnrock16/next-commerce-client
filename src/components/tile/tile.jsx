import Image from 'next/image';
import Link from 'next/link';
import styles from './tile.module.scss';

export default function Tile() {
    return (
        <Link href="/category/smartphone" className={styles.tile}>
            <Image src="/images/category/smartphone.webp" alt="next category" width={80} height={80} loading='lazy'/>
            <span>Category</span>
        </Link>
    );
}