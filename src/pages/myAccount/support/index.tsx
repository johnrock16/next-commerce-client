import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './support.module.scss';

export default function SupportPage(){
    return (
        <>
            <SimpleHeader/>
            <main className={styles.supportPage}>
                <div className='container'>
                    <div className={styles.supportPage__wrapper}>
                        <h1>Support</h1>
                        <form className='form'>
                            <div className='form__field col-12'>
                                <label>Order number</label>
                                <input className='form__input' type="text"/>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label>Select a motive</label>
                                <select className='form__input'>
                                    <option>Selecione...</option>
                                    <option>Produto com defeito</option>
                                    <option>Produto não entregue.</option>
                                </select>
                                <span className='form__error'></span>
                            </div>
                            <div className='form__field col-12'>
                                <label>Order number</label>
                                <textarea className='form__input'/>
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