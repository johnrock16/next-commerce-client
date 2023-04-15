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
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import { CUSTOM_RULE } from '@form/formRules/rules';
import { customValidation } from '@form/formRules/validation';
import Form from '@form/formValidator/form';
import { useRouter } from 'next/router';
import Breadcrumb from '@components/breadcrumb/breadcrumb';

export async function getStaticProps({ locale }) {
    return {
      props: {...await serverSideTranslations(locale, ['checkoutPayment','components'])},
    }
}

export default function CheckoutPaymentPage(){
    const [selectedPaymentForm, setSelectedPaymentForm] = useState(null);
    const { t } = useTranslation('checkoutPayment');
    const { register, handleSubmit } = useForm();
    const [errors, setErrors] = useState({});
    const router = useRouter()
    const { fieldFormAttributes } = Form({language: 'en', rules: CUSTOM_RULE, customValidation: customValidation})

    const handleSelectPayment = (e) => {
        setSelectedPaymentForm(e.target.value);
    }

    const onSubmit = (data) => {
        if(data && Object.keys(data).length > 0) {
            router.push('/checkout/confirm');
        }
    };

    return (
        <>
            <Head>
                <meta name='description' content={`Checkout payment page of Next Commerce select a payment method and finish your checkout`}/>
            </Head>
            <SimpleHeader/>
            <main className={styles.paymentPage}>
                <div className='container'>
                    <form className={styles.paymentPage__wrapper} onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.paymentPage__breadcrumbWrapper}>
                            <Breadcrumb/>
                        </div>
                        <h1>{t('checkoutPayment.title')}</h1>
                        <div className={styles.paymentPage__details}>
                            <h2>{t('checkoutPayment.paymentMethod')}</h2>
                            <div className={styles.paymentPage__box} onChange={handleSelectPayment}>
                                <div className='radioField'>
                                    <label htmlFor='address'>
                                        Boleto
                                        <input name="address" type="radio" value="boleto"/>
                                    </label>
                                </div>
                                <div className='radioField'>
                                    <label htmlFor='address'>
                                        Cartão de debito
                                        <input name="address" type="radio" value="debit"/>
                                    </label>
                                </div>
                                <div className='radioField'>
                                    <label htmlFor='address'>
                                        Cartão de crédito
                                        <input name="address" type="radio" value="credit"/>
                                    </label>
                                </div>
                            </div>
                        </div>
                        {
                            (selectedPaymentForm) ?
                                (selectedPaymentForm === 'boleto') ?
                                    <div className={styles.paymentPage__formWrapper}>
                                        <span>{t('checkoutPayment.paymentForm')}</span>
                                        <BoletoForm fieldFormAttributes={fieldFormAttributes} errors={errors} register={register} setErrors={setErrors}/>
                                    </div>
                                :
                                (selectedPaymentForm === 'debit') ?
                                    <div className={styles.paymentPage__formWrapper}>
                                        <span>{t('checkoutPayment.paymentForm')}</span>
                                        <DebitForm fieldFormAttributes={fieldFormAttributes} errors={errors} register={register} setErrors={setErrors}/>
                                    </div>
                                :
                                (selectedPaymentForm === 'credit') ?
                                    <div className={styles.paymentPage__formWrapper}>
                                        <span>{t('checkoutPayment.paymentForm')}</span>
                                        <CreditForm fieldFormAttributes={fieldFormAttributes} errors={errors} register={register} setErrors={setErrors}/>
                                    </div>
                                : null
                            : null

                        }
                        <div className={styles.paymentPage__details}>
                            <h2>{t('checkoutPayment.addressBilling')}</h2>
                            <div className={styles.paymentPage__box}>
                                <Link href='/myAccount/myAddress/form' className={styles.paymentPage__add}>
                                    <IoAddSharp/>
                                    <span>{t('checkoutPayment.addressAdd')}</span>
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
                        <div className={styles.checkoutPage__boxBottom}>
                            <button type='submit' className='button button--secondary'>{t('checkoutPayment.buttonBuy')}</button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer/>
        </>
    )
}