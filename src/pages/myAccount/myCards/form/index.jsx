import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './myCardsForm.module.scss';

export default function AddressFormPage(){
    return (
        <>
            <SimpleHeader/>
            <main className={styles.myCardsFormPage}>
                <div className='container'>
                    <div className={styles.myCardsFormPage__wrapper}>
                        <h1>Cadastre seu cartão</h1>
                        <form className='form'>
                            <div className='form__field col-12'>
                                <label>Nome completo</label>
                                <input className='form__input' type="text"/>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label>Numero do Cartão</label>
                                <input className='form__input' type="text"/>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label>Tipo de cartão</label>
                                <select className='form__input' type="text">
                                    <option value="">Crédito</option>
                                    <option value="">Debito</option>
                                </select>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-6'>
                                <label>Data de validade</label>
                                <input className='form__input' type="text"/>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-6'>
                                <label>CVV</label>
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