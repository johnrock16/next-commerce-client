import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './myAddressForm.module.scss';
import Head from 'next/head';

export default function AddressFormPage(){
    return (
        <>
            <Head>
                <meta name='description' content='My Address Form page of Next Ecommerce here you can create and update your address'/>
            </Head>
            <SimpleHeader/>
            <main className={styles.myAddressFormPage}>
                <div className='container'>
                    <div className={styles.myAddressFormPage__wrapper}>
                        <h1>Cadastre seu endereço</h1>
                        <form className='form'>
                            <div className='form__field col-12'>
                                <label htmlFor='name'>
                                    Nome do seu endereço
                                    <input name='name' className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='zipcode'>
                                    CEP
                                    <input name='zipcode' className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-8'>
                                <label htmlFor='street'>
                                    Rua
                                    <input name='street' className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-4'>
                                <label htmlFor='number'>
                                    Numero
                                    <input name='number' className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='district'>
                                    Bairro
                                    <input name='district' className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='city'>
                                    Cidade
                                    <input name='city' className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='state'>
                                    Estado
                                    <input name='state' className='form__input' type="text"/>
                                </label>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label htmlFor='country'>
                                    País
                                    <input name='country' className='form__input' type="text"/>
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