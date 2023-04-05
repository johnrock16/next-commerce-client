import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './payment.module.scss';
import { IoAddSharp } from 'react-icons/io5';
import Link from 'next/link';
import { useState } from 'react';
import BoletoForm from '../../../components/payment/forms/boletoForm/boletoForm';
import DebitForm from '../../../components/payment/forms/debitForm/debitForm';
import CreditForm from '../../../components/payment/forms/creditForm/creditForm';

export default function CheckoutPaymentPage(){
    const [selectedPaymentForm, setSelectedPaymentForm] = useState(null);
    const handleSelectPayment = (e) => {
        setSelectedPaymentForm(e.target.value);
    }
    return (
        <>
            <SimpleHeader/>
            <main className={styles.paymentPage}>
                <div className='container'>
                    <div className={styles.paymentPage__wrapper}>
                        <h1>Payment</h1>
                        <div className={styles.paymentPage__details}>
                            <h2>Escolha um metodo de pagamento</h2>
                            <div className={styles.paymentPage__box} onChange={handleSelectPayment}>
                                <div className='radioField'>
                                    <label>Boleto</label>
                                    <input name="address" type="radio" value="boleto"/>
                                </div>
                                <div className='radioField'>
                                    <label>Cartão de debito</label>
                                    <input name="address" type="radio" value="debit"/>
                                </div>
                                <div className='radioField'>
                                    <label>Cartão de crédito</label>
                                    <input name="address" type="radio" value="credit"/>
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
                                    <label>Casa</label>
                                    <input name="deliveryService" type="radio"/>
                                </div>
                                <div className='radioField'>
                                    <label>Trabalho</label>
                                    <input name="deliveryService" type="radio"/>
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