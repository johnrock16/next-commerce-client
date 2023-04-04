import { useTranslation } from 'react-i18next';
import SimpleHeader from '../../components/header/simpleHeader';
import Footer from '../../components/footer/footer';
import styles from './register.module.scss';
import Minicart from '../../components/cart/minicart';
import '../../i18n/index.js';

const RegisterPage = () => {
    const { t } = useTranslation();
    return (
    <>
        <SimpleHeader/>
        <Minicart/>
        <main className={styles.registerPage}>
            <div className='container'>
                <div className={styles.registerPage__wrapper}>
                    <h1>Register</h1>
                    <form className='form'>
                        <div className='form__field col-6'>
                            <label>First Name</label>
                            <input className='form__input' type="text" data-rule="name"/>
                            <span className='form__error'></span>
                        </div>
                        <div className='form__field col-6'>
                            <label>Last Name</label>
                            <input className='form__input' type="text"/>
                            <span className='form__error'></span>
                        </div>
                        <div className='form__field col-12'>
                            <label>Email</label>
                            <input className='form__input' type="email"/>
                            <span className='form__error'></span>
                        </div>
                        <div className='form__field col-12'>
                            <label>Phone</label>
                            <input className='form__input' type="tel"/>
                            <span className='form__error'></span>
                        </div>
                        <div className='form__field col-12'>
                            <label>Birthday</label>
                            <input className='form__input' type='date'/>
                            <span className='form__error'></span>
                        </div>
                        <div className='form__field col-12'>
                            <label>Password</label>
                            <input className='form__input' type='password'/>
                            <span className='form__error'></span>
                        </div>
                        <button className='form__button button button--secondary col-12' type='submit'>Register</button>
                    </form>
                    {/* <span className={styles.registerPage__login}>{t('pages.register.login')}<a>login</a></span> */}
                </div>
            </div>
        </main>
        <Footer/>
    </>
  );
}

export default RegisterPage;