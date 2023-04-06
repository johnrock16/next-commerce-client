import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './support.module.scss';
import Head from 'next/head';

export default function SupportPage(){
    return (
        <>
            <Head>
                <meta name='description' content='My Support page of Next Ecommerce if you need a help of our support fill this form'/>
            </Head>
            <SimpleHeader/>
            <main className={styles.supportPage}>
                <div className='container'>
                    <div className={styles.supportPage__wrapper}>
                        <h1>Support</h1>
                        <form className='form'>
                            <div className='form__field col-12'>
                                <label htmlFor='orderNumber'>
                                    Order number
                                    <input name='orderNumber' className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='motive'>
                                    Select a motive
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
                                    Description
                                    <textarea name='description' className='form__input'/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <button className='form__button button button--secondary col-12' type='submit'>Enviar</button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}