import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './login.module.scss';

const LoginPage = () => {
    const { t } = useTranslation();
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
                        <button className='form__button button button--secondary col-12' type='submit'>Login</button>
                    </form>
                    <span className={styles.loginPage__register}>Dont have a account yet? <Link href='/register'>register</Link></span>
                </div>
            </div>
        </main>
        <Footer/>
    </>
  );
}

export default LoginPage;