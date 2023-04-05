
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './myData.module.scss';

export async function getStaticProps({ locale }) {
    return {
      props: {...await serverSideTranslations(locale, ['myData'])},
    }
}

export default function MyAccountPage(){
    const { t } = useTranslation('myData');
    return (
        <>
            <SimpleHeader/>
            <main className={styles.myDataPage}>
                <div className='container'>
                    <div className={styles.myDataPage__wrapper}>
                        <h1>{t('myData.title')}</h1>
                        <form className='form'>
                            <div className='form__field col-6'>
                                <label>{t('myData.form.firstName')}</label>
                                <input className='form__input' type="text" data-rule="name"/>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-6'>
                                <label>{t('myData.form.lastName')}</label>
                                <input className='form__input' type="text"/>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label>{t('myData.form.email')}</label>
                                <input className='form__input' type="email"/>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label>{t('myData.form.phone')}</label>
                                <input className='form__input' type="tel"/>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label>{t('myData.form.birthday')}</label>
                                <input className='form__input' type='date'/>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label>{t('myData.form.password')}</label>
                                <input className='form__input' type='password'/>
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