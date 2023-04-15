import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './myCardsForm.module.scss';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Form from '@form/formValidator/form';
import { CUSTOM_RULE } from '@form/formRules/rules';
import { customValidation } from '@form/formRules/validation';
import Breadcrumb from '@components/breadcrumb/breadcrumb';

export async function getStaticProps({ locale }) {
    return {
      props: {...await serverSideTranslations(locale, ['myCardsForm'])},
    }
}

export default function AddressFormPage(){
    const { t } = useTranslation('myCardsForm');
    const { register, handleSubmit } = useForm();
    const [errors, setErrors] = useState({});
    const { fieldFormAttributes } = Form({language: 'en', rules: CUSTOM_RULE, customValidation: customValidation})

    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <>
            <Head>
                <meta name='description' content='My Card Form page of Next Ecommerce here you can create and update your cards'/>
            </Head>
            <SimpleHeader/>
            <main className={styles.myCardsFormPage}>
                <div className='container'>
                    <div className={styles.myCardsFormPage__wrapper}>
                        <Breadcrumb/>
                        <h1>{t('myCardsForm.title')}</h1>
                        <form className='form' onSubmit={handleSubmit(onSubmit)}>
                            <div className='form__field col-12'>
                                <label htmlFor='fullName'>
                                    {t('myCardsForm.form.fullName')}
                                    <input {...fieldFormAttributes({name: 'fullName', rule: 'name', register, setErrors})} className='form__input' type="text"/>
                                </label>
                                {(errors?.fullName) ? <span className='form__error'>{errors.fullName}</span> : null}
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='cardNumber'>
                                    {t('myCardsForm.form.numberCard')}
                                    <input {...fieldFormAttributes({name: 'cardNumber', rule: 'creditCardNumber', register, setErrors})}  className='form__input' type="text"/>
                                </label>
                                {(errors?.cardNumber) ? <span className='form__error'>{errors.cardNumber}</span> : null}
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='cardType'>
                                    {t('myCardsForm.form.typeCard')}
                                    <select {...fieldFormAttributes({name: 'typeCard', rule: 'name', register, setErrors})} className='form__input' type="text">
                                        <option value="">Select a option</option>
                                        <option value="credit">Crédito</option>
                                        <option value="debit">Debito</option>
                                    </select>
                                </label>
                                {(errors?.typeCard) ? <span className='form__error'>{errors.typeCard}</span> : null}
                            </div>
                            <div className='form__field col-6'>
                                <label htmlFor='cardExpireDate'>
                                    {t('myCardsForm.form.validateCard')}
                                    <input {...fieldFormAttributes({name: 'cardExpireDate', rule: 'creditCardExpiratedDate', register, setErrors})} className='form__input' type="text"/>
                                </label>
                                {(errors?.cardExpireDate) ? <span className='form__error'>{errors.cardExpireDate}</span> : null}
                            </div>
                            <div className='form__field col-6'>
                                <label htmlFor='cardCVV'>
                                    {t('myCardsForm.form.cardCVV')}
                                    <input {...fieldFormAttributes({name: 'cardCVV', rule: 'cvv', register, setErrors})} className='form__input' type="text"/>
                                </label>
                                {(errors?.cardCVV) ? <span className='form__error'>{errors.cardCVV}</span> : null}
                            </div>
                            <button className='form__button button button--secondary col-12' type='submit'>{t('myCardsForm.form.buttonRegister')}</button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}