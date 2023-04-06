import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {IoMenuOutline, IoCartOutline, IoPersonOutline, IoSearchSharp} from 'react-icons/io5'
import Menu from '../menu/menu';
import styles from './header.module.scss';

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenu = (openMenu) => {
      setOpenMenu(openMenu);
    }
    const handleMiniCart = () => {
      const eventMinicartOpen = new CustomEvent('minicart/open');
      window.dispatchEvent(eventMinicartOpen);
    }
    return (
      <header className={styles.header}>
        <div className='container'>
          <div className={styles.header__wrapper}>
            <div className={styles.header__top}>
              <button className="button--icon" onClick={()=>{handleMenu(true)}} aria-label="Category Menu open button">
                <IoMenuOutline className={styles.header__icon}/>
              </button>
              <Link href='/' aria-label='Button to go back to the homepage'>
                <Image src="/next.svg" width={80} height={80} alt="Logo of nc commerce" loading='lazy'/>
              </Link>
              <div>
                  <Link href='/login' className="button--icon" aria-label='Button to Login screen'>
                    <IoPersonOutline className={styles.header__icon}/>
                  </Link>
                  <button className="button--icon" onClick={handleMiniCart} aria-label="Minicart Menu open button">
                    <IoCartOutline className={styles.header__icon}/>
                  </button>
              </div>
              <div className={styles.header__search}>
                <div></div>
                  <input name="search" type="text" placeholder='Search your product here'/>
                  <button className="button--icon" aria-label="button to search products">
                      <IoSearchSharp className={styles.header__icon}/>
                  </button>
              </div>
            </div>
            <div className={styles.header__categories}>
              <Link className={styles.header__category} href="/category">Category</Link>
              <Link className={styles.header__category} href="/category">Category</Link>
              <Link className={styles.header__category} href="/category">Category</Link>
            </div>
          </div>
        </div>
        {(openMenu) ? <Menu onClose={()=>{handleMenu(false)}}/> : ''}
      </header>
    )
}