import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.scss';

export default function SimpleHeader() {
    return (
      <header className={styles.header}>
        <div className='container'>
          <div className={styles.header__wrapper}>
            <div className={styles['header__top--simple']}>
              <Link href='/'>
                <Image src="/next.svg" width={80} height={80} alt="Logo of nc commerce" loading='lazy'/>
              </Link>
             </div>
            </div>
        </div>
      </header>
    )
}