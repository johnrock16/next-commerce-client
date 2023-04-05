import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './myAddressForm.module.scss';

export default function AddressFormPage(){
    return (
        <>
            <SimpleHeader/>
            <main className={styles.myAddressFormPage}>
                <div className='container'>
                    <div className={styles.myAddressFormPage__wrapper}>
                        <h1>Cadastre seu endereço</h1>
                        <form className='form'>
                            <div className='form__field col-12'>
                                <label>Nome do seu endereço</label>
                                <input className='form__input' type="text"/>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label>CEP</label>
                                <input className='form__input' type="text"/>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-8'>
                                <label>Rua</label>
                                <input className='form__input' type="text"/>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-4'>
                                <label>Numero</label>
                                <input className='form__input' type="text"/>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label>Bairro</label>
                                <input className='form__input' type="text"/>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label>Cidade</label>
                                <input className='form__input' type="text"/>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label>Estado</label>
                                <input className='form__input' type="text"/>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label>País</label>
                                <input className='form__input' type="text"/>
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