import Link from 'next/link';
import { IoAddSharp } from 'react-icons/io5';
import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './myAddress.module.scss';

export default function AddressFormPage(){
    return (
        <>
            <SimpleHeader/>
            <main className={styles.myAddressPage}>
                <div className='container'>
                    <div className={styles.myAddressPage__wrapper}>
                        <h1>Endereço</h1>
                        <div className={styles.myAddressPage__addresses}>

                            <Link href='/myAccount/myAddress/form' className={styles['myAddressPage__address--add']}>
                                <IoAddSharp/>
                                <h2>Adicionar Endereço</h2>
                            </Link>
                            <div className={styles.myAddressPage__address}>
                                <h2>Casa</h2>
                                <ul>
                                    <li><span>16000-006</span></li>
                                    <li><span>Rua São Paulo, 321</span></li>
                                    <li><span>Vila Nova São Paulo</span></li>
                                    <li><span>São Paulo, Sâo Paulo, Brasil</span></li>
                                </ul>
                                <div className={styles.myAddressPage__addressButtons}>
                                    <Link href='/myAccount/myAddress/form'>Alterar</Link>
                                    <Link href='/myAccount/myAddress/form'>Excluir</Link>
                                </div>
                            </div>
                            <div className={styles.myAddressPage__address}>
                                <h2>Casa</h2>
                                <ul>
                                    <li><span>16000-006</span></li>
                                    <li><span>Rua São Paulo, 321</span></li>
                                    <li><span>Vila Nova São Paulo</span></li>
                                    <li><span>São Paulo, Sâo Paulo, Brasil</span></li>
                                </ul>
                                <div className={styles.myAddressPage__addressButtons}>
                                    <Link href='/myAccount/myAddress/form'>Alterar</Link>
                                    <Link href='/myAccount/myAddress/form'>Excluir</Link>
                                </div>
                            </div>
                            <div className={styles.myAddressPage__address}>
                                <h2>Casa</h2>
                                <ul>
                                    <li><span>16000-006</span></li>
                                    <li><span>Rua São Paulo, 321</span></li>
                                    <li><span>Vila Nova São Paulo</span></li>
                                    <li><span>São Paulo, Sâo Paulo, Brasil</span></li>
                                </ul>
                                <div className={styles.myAddressPage__addressButtons}>
                                    <Link href='/myAccount/myAddress/form'>Alterar</Link>
                                    <Link href='/myAccount/myAddress/form'>Excluir</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}