import SimpleHeader from '../../components/header/simpleHeader';
import Footer from '../../components/footer/footer';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import styles from './register.module.scss';
import Head from 'next/head';

export async function getStaticProps({ locale }) {
  return {
    props: {...await serverSideTranslations(locale, ['register'])},
  }
}

const RegisterPage = () => {
    const { t } = useTranslation('register');
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
                    <form className='form'>
                        <div className='form__field col-6'>
                            <label htmlFor='firstName'>
                                {t('register.form.firstName')}
                                <input name="firstName" className='form__input' type="text" data-rule="name"/>
                            </label>
                            <span className='form__error'></span>
                        </div>
                        <div className='form__field col-6'>
                            <label htmlFor='lastName'>
                                {t('register.form.lastName')}
                                <input name="lastName" className='form__input' type="text"/>
                            </label>
                            <span className='form__error'></span>
                        </div>
                        <div className='form__field col-12'>
                            <label htmlFor='email'>
                                {t('register.form.email')}
                                <input name='email' className='form__input' type="email"/>
                            </label>
                            <span className='form__error'></span>
                        </div>
                        <div className='form__field col-12'>
                            <label htmlFor='phone'>
                                {t('register.form.phone')}
                                <input name='phone' className='form__input' type="tel"/>
                            </label>
                            <span className='form__error'></span>
                        </div>
                        <div className='form__field col-12'>
                            <label htmlFor='birthday'>
                                {t('register.form.birthday')}
                                <input name='birthday' className='form__input' type='date'/>
                            </label>
                            <span className='form__error'></span>
                        </div>
                        <div className='form__field col-12'>
                            <label htmlFor='password'>
                                {t('register.form.password')}
                                <input name='password' className='form__input' type='password'/>
                            </label>
                            <span className='form__error'></span>
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