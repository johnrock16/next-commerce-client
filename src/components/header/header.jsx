import Image from 'next/image';
import {IoMenuOutline, IoCartOutline, IoPersonOutline, IoSearchSharp} from 'react-icons/io5'
import styles from './header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
          <div className={styles.header__top}>
            <button className="button--icon">
              <IoMenuOutline className={styles.header__icon}/>
            </button>
            <Image className={styles.header__logo} src="/next.svg" width={64} height={64} alt="Logo of nc commerce"/>
            <div>
                <button className="button--icon">
                <IoPersonOutline className={styles.header__icon}/>
                </button>
                <button className="button--icon">
                <IoCartOutline className={styles.header__icon}/>
                </button>
            </div>
            <div className={styles.header__search}>
                <input className="" type="text"/>
                <button className="button--icon">
                    <IoSearchSharp className={styles.header__icon}/>
                </button>
            </div>
          </div>
          <div className={styles.header__categories}>
            <a className={styles.header__category} href="">Category</a>
            <a className={styles.header__category} href="">Category</a>
            <a className={styles.header__category} href="">Category</a>
          </div>
        </header>
    )
}