import {IoPersonOutline} from 'react-icons/io5'
import styles from './menu.module.scss';

export default function Menu() {
    return (
        <div className={styles.menu}>
            <div className={styles.menu__wrapper}>
                <div className={styles.menu__top}>
                    <div className={styles.menu__profile}>
                        <span><a>Cadastre-se</a>ou faça<a>login</a></span>
                        <IoPersonOutline className={styles.menu__icon}/>
                    </div>
                    <a className={styles.menu__title}>Welcome to Next E-commerce</a>
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