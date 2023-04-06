import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './payment.module.scss';
import { IoAddSharp } from 'react-icons/io5';
import Link from 'next/link';
import { useState } from 'react';
import BoletoForm from '../../../components/payment/forms/boletoForm/boletoForm';
import DebitForm from '../../../components/payment/forms/debitForm/debitForm';
import CreditForm from '../../../components/payment/forms/creditForm/creditForm';
import Head from 'next/head';

export default function CheckoutPaymentPage(){
    const [selectedPaymentForm, setSelectedPaymentForm] = useState(null);
    const handleSelectPayment = (e) => {
        setSelectedPaymentForm(e.target.value);
    }
    return (
        <>
            <Head>
                <meta name='description' content={`Checkout payment page of Next Commerce select a payment method and finish your checkout`}/>
            </Head>
            <SimpleHeader/>
            <main className={styles.paymentPage}>
                <div className='container'>
                    <div className={styles.paymentPage__wrapper}>
                        <h1>Payment</h1>
                        <div className={styles.paymentPage__details}>
                            <h2>Escolha um metodo de pagamento</h2>
                            <div className={styles.paymentPage__box} onChange={handleSelectPayment}>
                                <div className='radioField'>
                                    <label htmlFor='boleto'>
                                        Boleto
                                        <input name="boleto" type="radio" value="boleto"/>
                                    </label>
                                </div>
                                <div className='radioField'>
                                    <label htmlFor='debit'>
                                        Cartão de debito
                                        <input name="debit" type="radio" value="debit"/>
                                    </label>
                                </div>
                                <div className='radioField'>
                                    <label htmlFor='credit'>
                                        Cartão de crédito
                                        <input name="credit" type="radio" value="credit"/>
                                    </label>
                                </div>
                            </div>
                        </div>
                        {
                            (selectedPaymentForm) ?
                                (selectedPaymentForm === 'boleto') ?
                                    <div className={styles.paymentPage__formWrapper}>
                                        <span>Formulário de Pagamento</span>
                                        <BoletoForm/>
                                    </div>
                                :
                                (selectedPaymentForm === 'debit') ?
                                    <div className={styles.paymentPage__formWrapper}>
                                        <span>Formulário de Pagamento</span>
                                        <DebitForm/>
                                    </div>
                                :
                                (selectedPaymentForm === 'credit') ?
                                    <div className={styles.paymentPage__formWrapper}>
                                        <span>Formulário de Pagamento</span>
                                        <CreditForm/>
                                    </div>
                                : null
                            : null

                        }
                        <div className={styles.paymentPage__details}>
                            <h2>Escolha um endereço de pagamento</h2>
                            <div className={styles.paymentPage__box}>
                                <Link href='/myAccount/myAddress/form' className={styles.paymentPage__add}>
                                    <IoAddSharp/>
                                    <span>Adicionar Endereço</span>
                                </Link>
                                <div className='radioField'>
                                    <label htmlFor='house'>
                                        Casa
                                        <input name="house" type="radio"/>
                                    </label>
                                </div>
                                <div className='radioField'>
                                    <label htmlFor='work'>
                                        Trabalho
                                        <input name="work" type="radio"/>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <Link href='/checkout/confirm' className={styles.checkoutPage__boxBottom}>
                            <button className='button button--secondary'>Finalizar compra</button>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}