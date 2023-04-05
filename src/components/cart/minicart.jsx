
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import ProductCart from '../product/productCart/productCart';
import styles from './minicart.module.scss';

export default function Minicart() {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation("components");
    const cart = useSelector((state) => state.cart);

    const handleOpen = (open) => {
        setOpen(open);
    }

    useEffect(() => {
        const openCart = function () {
            setOpen(true);
        }
        window.addEventListener('minicart/open', openCart);
        return(() => {
            window.removeEventListener('minicart/open', openCart);
        });
    }, []);

    return (
        ((open && cart.items) ? <div className={styles.minicart} onClick={()=>{handleOpen(false)}}>
            <div className={styles.minicart__wrapper}>
                <div className={styles.minicart__top}>
                    <div className={styles.minicart__total}>
                        <span>R$ 700,00</span>
                    </div>
                    <div className={styles.minicart__action}>
                        <a className={styles.minicart__title}>{t('minicart.cart')}</a>
                    </div>
                </div>
                <div className={styles.minicart__body}>
                    <div className={styles.minicart__items}>
                        {
                            Object.keys(cart.items).map((key) => (
                                <ProductCart product={cart.items[key]} key={`minicart-${cart.items[key].id}`}/>
                            ))
                        }
                    </div>
                    <Link href="/checkout" className={styles.minicart__checkout}>
                        <button className='button button--secondary'>Checkout</button>
                    </Link>
                </div>
            </div>
        </div> : null)
    );
}