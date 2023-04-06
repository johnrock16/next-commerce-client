import Link from 'next/link';
import { IoAddSharp } from 'react-icons/io5';
import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './myCards.module.scss';
import Head from 'next/head';

export default function AddressFormPage(){
    return (
        <>
            <Head>
                <meta name='description' content='My Card page of Next Ecommerce here you can manage your cards'/>
            </Head>
            <SimpleHeader/>
            <main className={styles.myCardsPage}>
                <div className='container'>
                    <div className={styles.myCardsPage__wrapper}>
                        <h1>Meus cartões</h1>
                        <div className={styles.myCardsPage__addresses}>
                            <Link href='/myAccount/myCards/form' className={styles['myCardsPage__address--add']}>
                                <IoAddSharp/>
                                <h2>Adicionar Cartão</h2>
                            </Link>
                            <div className={styles.myCardsPage__address}>
                                <h2>Banco Bacana Diamond GoodCard</h2>
                                <ul>
                                    <li><span>GoodCard Diamond **** 4937</span></li>
                                    <li><span>Cartão de credito</span></li>
                                    <li><span>Jomes Jareg</span></li>
                                </ul>
                                <div className={styles.myCardsPage__addressButtons}>
                                    <Link href='/myAccount/myCards/form'>Alterar</Link>
                                    <Link href='/myAccount/myCards/form'>Excluir</Link>
                                </div>
                            </div>
                            <div className={styles.myCardsPage__address}>
                                <h2>Banco Bacana Diamond GoodCard</h2>
                                <ul>
                                    <li><span>GoodCard Diamond **** 4937</span></li>
                                    <li><span>Cartão de credito</span></li>
                                    <li><span>Jomes Jareg</span></li>
                                </ul>
                                <div className={styles.myCardsPage__addressButtons}>
                                    <Link href='/myAccount/myCards/form'>Alterar</Link>
                                    <Link href='/myAccount/myCards/form'>Excluir</Link>
                                </div>
                            </div>
                            <div className={styles.myCardsPage__address}>
                                <h2>Banco Bacana Diamond GoodCard</h2>
                                <ul>
                                    <li><span>GoodCard Diamond **** 4937</span></li>
                                    <li><span>Cartão de credito</span></li>
                                    <li><span>Jomes Jareg</span></li>
                                </ul>
                                <div className={styles.myCardsPage__addressButtons}>
                                    <Link href='/myAccount/myCards/form'>Alterar</Link>
                                    <Link href='/myAccount/myCards/form'>Excluir</Link>
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