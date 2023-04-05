import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './login.module.scss';

export async function getStaticProps({ locale }) {
    return {
      props: {...await serverSideTranslations(locale, ['login'])},
    }
}

const LoginPage = () => {
    const { t } = useTranslation('login');
    return (
    <>
        <SimpleHeader/>
        <main className={styles.loginPage}>
            <div className='container'>
                <div className={styles.loginPage__wrapper}>
                    <h1>Login</h1>
                    <form className='form'>
                        <div className='form__field col-12'>
                            <label>Email</label>
                            <input className='form__input' type="email"/>
                            <span className='form__error'></span>
                        </div>
                        <div className='form__field col-12'>
                            <label>Password</label>
                            <input className='form__input' type='password'/>
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