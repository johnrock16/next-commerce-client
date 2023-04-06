import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './myCardsForm.module.scss';
import Head from 'next/head';

export default function AddressFormPage(){
    return (
        <>
            <Head>
                <meta name='description' content='My Card Form page of Next Ecommerce here you can create and update your cards'/>
            </Head>
            <SimpleHeader/>
            <main className={styles.myCardsFormPage}>
                <div className='container'>
                    <div className={styles.myCardsFormPage__wrapper}>
                        <h1>Cadastre seu cartão</h1>
                        <form className='form'>
                            <div className='form__field col-12'>
                                <label htmlFor='fullName'>
                                    Nome completo
                                    <input name='fullName' className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='cardNumber'>
                                    Numero do Cartão
                                    <input name='cardNumber' className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='cardType'>
                                    Tipo de cartão
                                    <select name='cardType' className='form__input' type="text">
                                        <option value="">Crédito</option>
                                        <option value="">Debito</option>
                                    </select>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-6'>
                                <label htmlFor='cardValidate'>
                                    Data de validade
                                    <input name='cardValidate' className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-6'>
                                <label htmlFor='cardCVV'>
                                    CVV
                                    <input name='cardCVV' className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <button className='form__button button button--secondary col-12' type='submit'>Cadastrar</button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}