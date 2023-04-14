
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
            <div className={styles.minicart__wrapper} onClick={(e)=>{e.stopPropagation();}}>
                <div className={styles.minicart__top}>
                    <div className={styles.minicart__total}>
                        <span>R$ {cart.price.total}</span>
                    </div>
                    <div className={styles.minicart__action}>
                        <span className={styles.minicart__title}>{t('minicart.cart')}</span>
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
                    {
                        (Object.keys(cart.items).length > 0)
                        ?
                        <Link href="/checkout" className={styles.minicart__checkout}>
                            <button className='button button--secondary'>Checkout</button>
                        </Link>
                        :
                        null
                    }
                </div>
            </div>
        </div> : null)
    );
}