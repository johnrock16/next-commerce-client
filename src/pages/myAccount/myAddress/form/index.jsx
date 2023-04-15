import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './myAddressForm.module.scss';
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
      props: {...await serverSideTranslations(locale, ['myAddressForm'])},
    }
}

export default function AddressFormPage(){
    const { t } = useTranslation('myAddressForm');
    const { register, handleSubmit } = useForm();
    const [errors, setErrors] = useState({});
    const { fieldFormAttributes } = Form({language: 'en', rules: CUSTOM_RULE, customValidation: customValidation})

    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <>
            <Head>
                <meta name='description' content='My Address Form page of Next Ecommerce here you can create and update your address'/>
            </Head>
            <SimpleHeader/>
            <main className={styles.myAddressFormPage}>
                <div className='container'>
                    <div className={styles.myAddressFormPage__wrapper}>
                        <Breadcrumb/>
                        <h1>{t('myAddressForm.title')}</h1>
                        <form className='form' onSubmit={handleSubmit(onSubmit)}>
                            <div className='form__field col-12'>
                                <label htmlFor='name'>
                                    {t('myAddressForm.form.name')}
                                    <input {...fieldFormAttributes({name: 'name', rule: 'name', register, setErrors})} className='form__input' type="text"/>
                                </label>
                                {(errors?.name) ? <span className='form__error'>{errors.name}</span> : null}
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='zipcode'>
                                    {t('myAddressForm.form.zipcode')}
                                    <input {...fieldFormAttributes({name: 'zipcode', rule: 'zipcode', register, setErrors})} className='form__input' type="text"/>
                                </label>
                                {(errors?.zipcode) ? <span className='form__error'>{errors.zipcode}</span> : null}
                            </div>
                            <div className='form__field col-8'>
                                <label htmlFor='street'>
                                    {t('myAddressForm.form.street')}
                                    <input {...fieldFormAttributes({name: 'street', rule: 'name', register, setErrors})} className='form__input' type="text"/>
                                </label>
                                {(errors?.street) ? <span className='form__error'>{errors.street}</span> : null}
                            </div>
                            <div className='form__field col-4'>
                                <label htmlFor='number'>
                                    {t('myAddressForm.form.number')}
                                    <input {...fieldFormAttributes({name: 'number', rule: 'addressNumber', register, setErrors})} className='form__input' type="text"/>
                                </label>
                                {(errors?.number) ? <span className='form__error'>{errors.number}</span> : null}
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='district'>
                                    {t('myAddressForm.form.district')}
                                    <input {...fieldFormAttributes({name: 'district', rule: 'name', register, setErrors})} className='form__input' type="text"/>
                                </label>
                                {(errors?.district) ? <span className='form__error'>{errors.district}</span> : null}
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='city'>
                                    {t('myAddressForm.form.city')}
                                    <input {...fieldFormAttributes({name: 'city', rule: 'name', register, setErrors})} className='form__input' type="text"/>
                                </label>
                                {(errors?.city) ? <span className='form__error'>{errors.city}</span> : null}
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='state'>
                                    {t('myAddressForm.form.state')}
                                    <input {...fieldFormAttributes({name: 'state', rule: 'name', register, setErrors})} className='form__input' type="text"/>
                                </label>
                                {(errors?.state) ? <span className='form__error'>{errors.state}</span> : null}
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='country'>
                                    {t('myAddressForm.form.country')}
                                    <input {...fieldFormAttributes({name: 'country', rule: 'name', register, setErrors})} className='form__input' type="text"/>
                                </label>
                                {(errors?.country) ? <span className='form__error'>{errors.country}</span> : null}
                            </div>
                            <button className='form__button button button--secondary col-12' type='submit'>{t('myAddressForm.form.buttonRegister')}</button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}