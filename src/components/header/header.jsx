import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
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
              <button className="button--icon" onClick={()=>{handleMenu(true)}}>
                <IoMenuOutline className={styles.header__icon}/>
              </button>
              <Link href='/'>
                <Image src="/next.svg" width={80} height={80} alt="Logo of nc commerce" loading='lazy'/>
              </Link>
              <div>
                  <button className="button--icon">
                  < IoPersonOutline className={styles.header__icon}/>
                  </button>
                  <button className="button--icon" onClick={handleMiniCart}>
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
          </div>
        </div>
        {(openMenu) ? <Menu onClose={()=>{handleMenu(false)}}/> : ''}
      </header>
    )
}