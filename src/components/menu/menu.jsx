import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import {IoPersonOutline} from 'react-icons/io5';
import styles from './menu.module.scss';

export default function Menu({onClose}) {
    const { t } = useTranslation('components');
    return (
        <div className={styles.menu} onClick={onClose}>
            <div className={styles.menu__wrapper}>
                <div className={styles.menu__top}>
                    <div className={styles.menu__profile}>
                        <p><Link href="/register">{t('menu.login.register')}</Link>{t('menu.login.or')}<Link href="/login">{t('menu.login.login')}</Link></p>
                        <IoPersonOutline className={styles.menu__icon}/>
                    </div>
                    <span className={styles.menu__title}>{t('menu.welcome')}</span>
                </div>
                <div className={styles.menu__body}>
                    <div className={styles.menu__list}>
                        <span>Destaque</span>
                        <span>Novidades</span>
                        <span>Recomendado</span>
                        <span>Mais vendidos</span>
                    </div>
                    <div className={styles.menu__list}>
                        <span>Categorias</span>
                        <span>Computadores</span>
                        <span>Celulares</span>
                        <span>Roupas</span>
                        <span>Instrumentos musicais</span>
                        <span>Movéis</span>
                        <span>Eletrodomesticos</span>
                        <span>Comforto</span>
                        <span>Consoles antigos</span>
                    </div>
                </div>
            </div>
        </div>
    );
}