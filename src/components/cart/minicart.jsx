
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'next-i18next';
import {IoPersonOutline} from 'react-icons/io5';
import Image from 'next/image';
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
            window.removeEventListener('minicart/open', openCart)
        });
    }, []);

    return (
        ((open && cart.items) ? <div className={styles.minicart} onClick={()=>{handleOpen(false)}}>
            <div className={styles.minicart__wrapper}>
                <div className={styles.minicart__top}>
                    <div className={styles.minicart__profile}><p><a>{t('minicart.login.register')}</a>{t('minicart.login.or')}<a>{t('minicart.login.login')}</a></p>
                        <IoPersonOutline className={styles.minicart__icon}/>
                    </div>
                    <a className={styles.minicart__title}>{t('minicart.cart')}</a>
                </div>
                <div className={styles.minicart__body}>
                    <div className={styles.minicart__items}>
                        {
                            Object.keys(cart.items).map((key) => (
                                <div className={styles.minicart__item} key={`minicart-${cart.items[key].id}`}>
                                    <Image src={cart.items[key].image.src} alt={cart.items[key].image.alt} width={120} height={120}/>
                                    <div>
                                        <span>{cart.items[key].name}</span>
                                        <span>{cart.items[key].seller}</span>
                                        <span>R${cart.items[key].price.total}</span>
                                        <span> ou x {cart.items[key].price.parcel.times} de R${cart.items[key].price.parcel.value}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div> : null)
    );
}