import Link from 'next/link';
import { IoPersonSharp, IoCubeSharp, IoStarSharp, IoHomeSharp, IoCardSharp, IoChatbubblesSharp } from 'react-icons/io5';
import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './myAccount.module.scss';

export default function MyAccountPage(){
    return (
        <>
            <SimpleHeader/>
            <main className={styles.myAccountPage}>
                <div className='container'>
                    <div className={styles.myAccountPage__wrapper}>
                        <h1>My Account</h1>
                        <div className={styles.myAccountPage__options}>
                            <Link href='/myAccount/myData' className={styles.myAccountPage__option}>
                                <IoPersonSharp className={styles.myAccountPage__icon}/>
                                <div>
                                    <h2>Meus Dados</h2>
                                    <p>Gerencie seus dados pessoais</p>
                                </div>
                            </Link>
                            <Link href='/myAccount/myOrders' className={styles.myAccountPage__option}>
                                <IoCubeSharp className={styles.myAccountPage__icon}/>
                                <div>
                                    <h2>Meus Pedidos</h2>
                                    <p>Gerencie seus pedidos</p>
                                </div>
                            </Link>
                            <Link href='/myAccount/myFavorites' className={styles.myAccountPage__option}>
                                <IoStarSharp className={styles.myAccountPage__icon}/>
                                <div>
                                    <h2>Meus Favoritos</h2>
                                    <p>Gerencie seus favoritos</p>
                                </div>
                            </Link>
                            <Link href='/myAccount/myAddress' className={styles.myAccountPage__option}>
                                <IoHomeSharp className={styles.myAccountPage__icon}/>
                                <div>
                                    <h2>Meus Endereços</h2>
                                    <p>Gerencie seus endereços</p>
                                </div>
                            </Link>
                            <Link href='/myAccount/myCards' className={styles.myAccountPage__option}>
                                <IoCardSharp className={styles.myAccountPage__icon}/>
                                <div>
                                    <h2>Meus Cartões</h2>
                                    <p>Gerencie seus cartões</p>
                                </div>
                            </Link>
                            <Link href='/myAccount/support' className={styles.myAccountPage__option}>
                                <IoChatbubblesSharp className={styles.myAccountPage__icon}/>
                                <div>
                                    <h2>Suporte</h2>
                                    <p>Precisa de ajuda? estamos</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}