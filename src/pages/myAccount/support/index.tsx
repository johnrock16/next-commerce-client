import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './support.module.scss';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

// @ts-ignore: next-line
export async function getStaticProps({ locale }) {
    return {
      props: {...await serverSideTranslations(locale, ['support'])},
    }
}

export default function SupportPage(){
    const { t } = useTranslation('support');
    return (
        <>
            <Head>
                <meta name='description' content='My Support page of Next Ecommerce if you need a help of our support fill this form'/>
            </Head>
            <SimpleHeader/>
            <main className={styles.supportPage}>
                <div className='container'>
                    <div className={styles.supportPage__wrapper}>
                        <h1>{t('support.title')}</h1>
                        <form className='form'>
                            <div className='form__field col-12'>
                                <label htmlFor='orderNumber'>
                                    {t('support.orderNumber')}
                                    <input name='orderNumber' className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='motive'>
                                    {t('support.motive')}
                                    <select name='motive' className='form__input'>
                                        <option>Selecione...</option>
                                        <option>Produto com defeito</option>
                                        <option>Produto não entregue.</option>
                                    </select>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='description'>
                                    {t('support.description')}
                                    <textarea name='description' className='form__input'/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <button className='form__button button button--secondary col-12' type='submit'>{t('support.send')}</button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}