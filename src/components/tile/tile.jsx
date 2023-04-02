import Image from 'next/image';
import styles from './tile.module.scss';

export default function Tile() {
    return (
        <a className={styles.tile}>
            <Image src="/vercel.svg" alt="next category" width={80} height={80}/>
            <span>Category</span>
        </a>
    );
}