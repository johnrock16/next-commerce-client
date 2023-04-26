import SimpleHeader from '../../components/header/simpleHeader';
import Footer from '../../components/footer/footer';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import styles from './register.module.scss';
import Head from 'next/head';
import { useState } from 'react';
import { customValidation } from '../../form/formRules/validation';
import { CUSTOM_RULE } from '../../form/formRules/rules';
import { useForm } from 'react-hook-form';
import Form from '../../form/formValidator/form';

export async function getStaticProps({ locale }) {
  return {
    props: {...await serverSideTranslations(locale, ['register', 'common'])},
  }
}

const RegisterPage = () => {
    const { t } = useTranslation('register');
    const { register, handleSubmit } = useForm();
    const [errors, setErrors] = useState({});
    const { fieldFormAttributes } = Form({language: 'en', rules: CUSTOM_RULE ,customValidation: customValidation})

    const onSubmit = (data) => {
        console.log(data)
    };

    return (
    <>
        <Head>
            <meta name='description' content='Register page of Next Ecommerce here you can create a new account'/>
        </Head>
        <SimpleHeader/>
        <main className={styles.registerPage}>
            <div className='container'>
                <div className={styles.registerPage__wrapper}>
                    <h1>{t('register.title')}</h1>
                    <form className='form' onSubmit={handleSubmit(onSubmit)}>
                        <div className='form__field col-6'>
                            <label htmlFor='firstName'>
                                {t('register.form.firstName')}
                                <input {...fieldFormAttributes({name: 'firstName', rule: 'name', register, setErrors})} className='form__input' type="text"/>
                            </label>
                            {(errors?.firstName) ? <span className='form__error'>{errors.firstName}</span> : null}
                        </div>
                        <div className='form__field col-6'>
                            <label htmlFor='lastName'>
                                {t('register.form.lastName')}
                                <input {...fieldFormAttributes({name: 'lastName', rule: 'name', register, setErrors})} className='form__input' type="text"/>
                            </label>{(errors?.lastName) ? <span className='form__error'>{errors.lastName}</span> : null}
                        </div>
                        <div className='form__field col-12'>
                            <label htmlFor='email'>
                                {t('register.form.email')}
                                <input {...fieldFormAttributes({name: 'email', rule: 'email', register, setErrors})} className='form__input' type="email"/>
                            </label>
                            {(errors?.email) ? <span className='form__error'>{errors.email}</span> : null}
                        </div>
                        <div className='form__field col-12'>
                            <label htmlFor='phone'>
                                {t('register.form.phone')}
                                <input {...fieldFormAttributes({name: 'phone', rule: 'phone', register, setErrors})} className='form__input' type="tel"/>
                            </label>
                            {(errors?.phone) ? <span className='form__error'>{errors.phone}</span> : null}
                        </div>
                        <div className='form__field col-12'>
                            <label htmlFor='birthdate'>
                                {t('register.form.birthdate')}
                                <input {...fieldFormAttributes({name: 'birthdate', rule: 'date--age', register, setErrors})}  className='form__input' type="date"/>
                            </label>
                            {(errors?.birthdate) ? <span className='form__error'>{errors.birthdate}</span> : null}
                        </div>
                        <div className='form__field col-12'>
                            <label htmlFor='password'>
                                {t('register.form.password')}
                                <input {...fieldFormAttributes({name: 'password', rule: 'password', register, setErrors})} name='password' className='form__input' type='password'/>
                            </label>
                            {(errors?.password) ? <span className='form__error'>{errors.password}</span> : null}
                        </div>
                        <button className='form__button button button--secondary col-12' type='submit'>{t('register.form.button')}</button>
                    </form>
                    <span className={styles.registerPage__login}>{t('register.login.text')}<Link href='/login'>{t('register.login.login')}</Link></span>
                </div>
            </div>
        </main>
        <Footer/>
    </>
  );
}

export default RegisterPage;