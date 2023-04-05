import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './confirm.module.scss';
import { useSelector } from 'react-redux';
import Link from 'next/link';

export default function CheckoutConfirmPage() {
    const cart = useSelector((state) => state.cart);
    return (
        <>
            <SimpleHeader/>
            <main className={styles.confirmPage}>
                <div className='container'>
                    <div className={styles.confirmPage__wrapper}>
                        <h1>Confirm payment</h1>
                        <h2>Pagamento concluído com sucesso!</h2>
                        {
                            (cart && cart.length > 0) ?
                                <div className={styles.confirmPage__box}>
                                    <p>Seu pagamento foi concluido com sucesso dos seguintes itens: {Object.keys(cart.items).map((key => <strong key={`confirm-product-${key}`}>{`${cart.items[key].name} `}</strong>))}</p>
                                </div>
                            : null
                        }
                        <Link href='/'>
                            <button className='button button--secondary'>Voltar a tela inicial</button>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}