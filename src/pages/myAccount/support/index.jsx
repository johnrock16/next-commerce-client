import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './support.module.scss';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Form from '@form/formValidator/form';
import { CUSTOM_RULE } from '@form/formRules/rules';
import { customValidation } from '@form/formRules/validation';
import Breadcrumb from '@components/breadcrumb/breadcrumb';

// @ts-ignore: next-line
export async function getStaticProps({ locale }) {
    return {
      props: {...await serverSideTranslations(locale, ['support'])},
    }
}

export default function SupportPage(){
    const { t } = useTranslation('support');
    const { register, handleSubmit } = useForm();
    const [errors, setErrors] = useState({});
    const { fieldFormAttributes } = Form({language: 'en', rules: CUSTOM_RULE, customValidation: customValidation})

    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <>
            <Head>
                <meta name='description' content='My Support page of Next Ecommerce if you need a help of our support fill this form'/>
            </Head>
            <SimpleHeader/>
            <main className={styles.supportPage}>
                <div className='container'>
                    <div className={styles.supportPage__wrapper}>
                        <Breadcrumb/>
                        <h1>{t('support.title')}</h1>
                        <form className='form' onSubmit={handleSubmit(onSubmit)}>
                            <div className='form__field col-12'>
                                <label htmlFor='orderNumber'>
                                    {t('support.orderNumber')}
                                    <input {...fieldFormAttributes({name: 'orderNumber', rule: 'name', register, setErrors})} className='form__input' type="text"/>
                                </label>
                                {(errors?.orderNumber) ? <span className='form__error'>{errors.orderNumber}</span> : null}
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='motive'>
                                    {t('support.motive')}
                                    <select {...fieldFormAttributes({name: 'motive', rule: 'name', register, setErrors})} className='form__input'>
                                        <option value="">Selecione...</option>
                                        <option value="problem">Produto com defeito</option>
                                        <option value="delivery">Produto não entregue.</option>
                                    </select>
                                </label>
                                {(errors?.motive) ? <span className='form__error'>{errors.motive}</span> : null}
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='description'>
                                    {t('support.description')}
                                    <textarea {...fieldFormAttributes({name: 'description', rule: 'name', register, setErrors})} className='form__input'/>
                                </label>
                                {(errors?.description) ? <span className='form__error'>{errors.description}</span> : null}
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