import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './myData.module.scss';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Form from '@form/formValidator/form';
import { CUSTOM_RULE } from '@form/formRules/rules';
import { customValidation } from '@form/formRules/validation';
import Breadcrumb from '@components/breadcrumb/breadcrumb';

export async function getStaticProps({ locale }) {
    return {
      props: {...await serverSideTranslations(locale, ['myData', 'common'])},
    }
}

export default function MyAccountPage(){
    const { t } = useTranslation('myData');
    const { register, handleSubmit } = useForm();
    const [errors, setErrors] = useState({});
    const { fieldFormAttributes } = Form({language: 'en', rules: CUSTOM_RULE ,customValidation: customValidation})

    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <>
            <Head>
                <meta name='description' content='My Data page of Next Ecommerce here you can see and update your personal data'/>
            </Head>
            <SimpleHeader/>
            <main className={styles.myDataPage}>
                <div className='container'>
                    <div className={styles.myDataPage__wrapper}>
                        <Breadcrumb/>
                        <h1>{t('myData.title')}</h1>
                        <form className='form' onSubmit={handleSubmit(onSubmit)}>
                            <div className='form__field col-6'>
                                <label htmlFor='firstName'>
                                    {t('myData.form.firstName')}
                                    <input {...fieldFormAttributes({name: 'firstName', rule: 'name', register, setErrors})} className='form__input' type="text" data-rule="name"/>
                                </label>
                                {(errors?.firstName) ? <span className='form__error'>{errors.firstName}</span> : null}
                            </div>
                            <div className='form__field col-6'>
                                <label htmlFor='lastName'>
                                    {t('myData.form.lastName')}
                                    <input {...fieldFormAttributes({name: 'lastName', rule: 'name', register, setErrors})} className='form__input' type="text"/>
                                </label>
                                {(errors?.lastName) ? <span className='form__error'>{errors.lastName}</span> : null}
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='email'>
                                    {t('myData.form.email')}
                                    <input {...fieldFormAttributes({name: 'email', rule: 'email', register, setErrors})} className='form__input' type="email"/>
                                </label>
                                {(errors?.email) ? <span className='form__error'>{errors.email}</span> : null}
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='phone'>
                                    {t('myData.form.phone')}
                                    <input {...fieldFormAttributes({name: 'phone', rule: 'phone', register, setErrors})} className='form__input' type="tel"/>
                                </label>
                                {(errors?.phone) ? <span className='form__error'>{errors.phone}</span> : null}
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='birthdate'>
                                    {t('myData.form.birthdate')}
                                    <input {...fieldFormAttributes({name: 'birthdate', rule: 'date--age', register, setErrors})}  className='form__input' type='date'/>
                                </label>
                                {(errors?.birthdate) ? <span className='form__error'>{errors.birthdate}</span> : null}
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='password'>
                                    {t('myData.form.password')}
                                    <input {...fieldFormAttributes({name: 'password', rule: 'password', register, setErrors})} className='form__input' type='password'/>
                                </label>
                                {(errors?.password) ? <span className='form__error'>{errors.password}</span> : null}
                            </div>
                            <button className='form__button button button--secondary col-12' type='submit'>{t('myData.form.button')}</button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}