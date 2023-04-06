import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './myCardsForm.module.scss';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }) {
    return {
      props: {...await serverSideTranslations(locale, ['myCardsForm'])},
    }
}

export default function AddressFormPage(){
    const { t } = useTranslation('myCardsForm');
    return (
        <>
            <Head>
                <meta name='description' content='My Card Form page of Next Ecommerce here you can create and update your cards'/>
            </Head>
            <SimpleHeader/>
            <main className={styles.myCardsFormPage}>
                <div className='container'>
                    <div className={styles.myCardsFormPage__wrapper}>
                        <h1>{t('myCardsForm.title')}</h1>
                        <form className='form'>
                            <div className='form__field col-12'>
                                <label htmlFor='fullName'>
                                    {t('myCardsForm.form.fullName')}
                                    <input name='fullName' className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='cardNumber'>
                                    {t('myCardsForm.form.numberCard')}
                                    <input name='cardNumber' className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='cardType'>
                                    {t('myCardsForm.form.typeCard')}
                                    <select name='cardType' className='form__input' type="text">
                                        <option value="">Crédito</option>
                                        <option value="">Debito</option>
                                    </select>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-6'>
                                <label htmlFor='cardValidate'>
                                    {t('myCardsForm.form.validateCard')}
                                    <input name='cardValidate' className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-6'>
                                <label htmlFor='cardCVV'>
                                    {t('myCardsForm.form.cardCVV')}
                                    <input name='cardCVV' className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <button className='form__button button button--secondary col-12' type='submit'>{t('myCardsForm.form.buttonRegister')}</button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}