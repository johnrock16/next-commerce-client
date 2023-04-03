import Image from 'next/image';
import styles from './tileSquare.module.scss';

export default function TileSquare() {
    return (
        <a className={styles.tileSquare}>
            <Image src="/images/category/smartphone.webp" alt="next category" width={120} height={120} loading='lazy'/>
            <span>Category</span>
        </a>
    );
}