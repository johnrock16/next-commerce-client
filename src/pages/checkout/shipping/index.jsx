import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './shipping.module.scss';
import { IoAddSharp } from 'react-icons/io5';
import Link from 'next/link';
import Head from 'next/head';

export default function CheckoutShippingPage(){
    return (
        <>
            <Head>
                <meta name='description' content={`Checkout shipping page of Next Commerce select a address and a delivery method`}/>
            </Head>
            <SimpleHeader/>
            <main className={styles.shippingPage}>
                <div className='container'>
                    <div className={styles.shippingPage__wrapper}>
                        <h1>Shipping</h1>
                        <div className={styles.shippingPage__details}>
                            <h2>Escolha um endereço de entrega</h2>
                            <div className={styles.shippingPage__box}>
                                <Link href='/myAccount/myAddress/form' className={styles.shippingPage__add}>
                                    <IoAddSharp/>
                                    <span>Adicionar Endereço</span>
                                </Link>
                                <div className='radioField'>
                                    <label>Casa</label>
                                    <input name="address" type="radio"/>
                                </div>
                                <div className='radioField'>
                                    <label>Trabalho</label>
                                    <input name="address" type="radio"/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.shippingPage__details}>
                            <h2>Escolha um serviço de entrega</h2>
                            <div className={styles.shippingPage__box}>
                                <div className='radioField'>
                                    <label>Entrega Express - estimativa 7 dias - <strong>R$24,00</strong></label>
                                    <input name="deliveryService" type="radio"/>
                                </div>
                                <div className='radioField'>
                                    <label>Entrega não tão express - estimativa 30 dias -  <strong>R$12,00</strong></label>
                                    <input name="deliveryService" type="radio"/>
                                </div>
                            </div>
                        </div>
                        <Link href='/checkout/payment' className={styles.checkoutPage__boxBottom}>
                            <button className='button button--secondary'>Continuar para pagamento</button>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}