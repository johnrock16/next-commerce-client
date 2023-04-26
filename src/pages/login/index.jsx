import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './login.module.scss';
import Head from 'next/head';

export async function getStaticProps({ locale }) {
    return {
      props: {...await serverSideTranslations(locale, ['login', 'common'])},
    }
}

const LoginPage = () => {
    const { t } = useTranslation('login');
    return (
    <>
        <Head>
            <meta name='description' content='Login page of Next Ecommerce here you can login into your account'/>
        </Head>
        <SimpleHeader/>
        <main className={styles.loginPage}>
            <div className='container'>
                <div className={styles.loginPage__wrapper}>
                    <h1>Login</h1>
                    <form className='form'>
                        <div className='form__field col-12'>
                            <label htmlFor="email">
                                Email
                                <input name='email' className='form__input' type="email"/>
                            </label>
                            <span className='form__error'></span>
                        </div>
                        <div className='form__field col-12'>
                            <label htmlFor="password">
                                Password
                                <input name='password' className='form__input' type='password'/>
                            </label>
                            <span className='form__error'></span>
                        </div>
                        <Link href='/myAccount' className='form__button button button--secondary col-12' type='submit'>Login</Link>
                    </form>
                    <span className={styles.loginPage__register}>{t('withoutAccount')}<Link href='/register'>{t('register')}</Link></span>
                </div>
            </div>
        </main>
        <Footer/>
    </>
  );
}

export default LoginPage;