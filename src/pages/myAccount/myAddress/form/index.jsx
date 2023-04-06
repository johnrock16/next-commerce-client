import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './myAddressForm.module.scss';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }) {
    return {
      props: {...await serverSideTranslations(locale, ['myAddressForm'])},
    }
}

export default function AddressFormPage(){
    const { t } = useTranslation('myAddressForm')
    return (
        <>
            <Head>
                <meta name='description' content='My Address Form page of Next Ecommerce here you can create and update your address'/>
            </Head>
            <SimpleHeader/>
            <main className={styles.myAddressFormPage}>
                <div className='container'>
                    <div className={styles.myAddressFormPage__wrapper}>
                        <h1>{t('myAddressForm.title')}</h1>
                        <form className='form'>
                            <div className='form__field col-12'>
                                <label htmlFor='name'>
                                    {t('myAddressForm.form.name')}
                                    <input name='name' className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='zipcode'>
                                    {t('myAddressForm.form.zipcode')}
                                    <input name='zipcode' className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-8'>
                                <label htmlFor='street'>
                                    {t('myAddressForm.form.street')}
                                    <input name='street' className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-4'>
                                <label htmlFor='number'>
                                    {t('myAddressForm.form.number')}
                                    <input name='number' className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='district'>
                                    {t('myAddressForm.form.district')}
                                    <input name='district' className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='city'>
                                    {t('myAddressForm.form.city')}
                                    <input name='city' className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='state'>
                                    {t('myAddressForm.form.state')}
                                    <input name='state' className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='country'>
                                    {t('myAddressForm.form.country')}
                                    <input name='country' className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <button className='form__button button button--secondary col-12' type='submit'>{t('myAddressForm.form.buttonRegister')}</button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}