import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './myData.module.scss';
import Head from 'next/head';

export async function getStaticProps({ locale }) {
    return {
      props: {...await serverSideTranslations(locale, ['myData'])},
    }
}

export default function MyAccountPage(){
    const { t } = useTranslation('myData');
    return (
        <>
            <Head>
                <meta name='description' content='My Data page of Next Ecommerce here you can see and update your personal data'/>
            </Head>
            <SimpleHeader/>
            <main className={styles.myDataPage}>
                <div className='container'>
                    <div className={styles.myDataPage__wrapper}>
                        <h1>{t('myData.title')}</h1>
                        <form className='form'>
                            <div className='form__field col-6'>
                                <label htmlFor='firstName'>
                                    {t('myData.form.firstName')}
                                    <input name='firstName' className='form__input' type="text" data-rule="name"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-6'>
                                <label htmlFor='lastName'>
                                    {t('myData.form.lastName')}
                                    <input name="lastName" className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='email'>
                                    {t('myData.form.email')}
                                    <input name='email' className='form__input' type="email"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='phone'>
                                    {t('myData.form.phone')}
                                    <input name='phone' className='form__input' type="tel"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='birthday'>
                                    {t('myData.form.birthday')}
                                    <input name='birthday' className='form__input' type='date'/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='password'>
                                    {t('myData.form.password')}
                                    <input name='password' className='form__input' type='password'/>
                                </label>
                                <span className='form__error'></span>
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