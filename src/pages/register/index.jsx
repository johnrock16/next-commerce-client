import SimpleHeader from '../../components/header/simpleHeader';
import Footer from '../../components/footer/footer';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import styles from './register.module.scss';

export async function getStaticProps({ locale }) {
  return {
    props: {...await serverSideTranslations(locale, ['register'])},
  }
}

const RegisterPage = () => {
    const { t } = useTranslation('register');
    return (
    <>
        <SimpleHeader/>
        <main className={styles.registerPage}>
            <div className='container'>
                <div className={styles.registerPage__wrapper}>
                    <h1>{t('register.title')}</h1>
                    <form className='form'>
                        <div className='form__field col-6'>
                            <label>{t('register.form.firstName')}</label>
                            <input className='form__input' type="text" data-rule="name"/>
                            <span className='form__error'></span>
                        </div>
                        <div className='form__field col-6'>
                            <label>{t('register.form.lastName')}</label>
                            <input className='form__input' type="text"/>
                            <span className='form__error'></span>
                        </div>
                        <div className='form__field col-12'>
                            <label>{t('register.form.email')}</label>
                            <input className='form__input' type="email"/>
                            <span className='form__error'></span>
                        </div>
                        <div className='form__field col-12'>
                            <label>{t('register.form.phone')}</label>
                            <input className='form__input' type="tel"/>
                            <span className='form__error'></span>
                        </div>
                        <div className='form__field col-12'>
                            <label>{t('register.form.birthday')}</label>
                            <input className='form__input' type='date'/>
                            <span className='form__error'></span>
                        </div>
                        <div className='form__field col-12'>
                            <label>{t('register.form.password')}</label>
                            <input className='form__input' type='password'/>
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