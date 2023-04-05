import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import ProductCart from '@components/product/productCart/productCart';
import styles from './checkout.module.scss';
import { useSelector } from 'react-redux';
import Link from 'next/link';

export default function CheckoutPage(){
    const cart = useSelector((state) => state.cart);
    return (
        <>
            <SimpleHeader/>
            <main className={styles.checkoutPage}>
                <div className='container'>
                    <div className={styles.checkoutPage__wrapper}>
                        <h1>Checkout</h1>
                        <div className={styles.checkoutPage__details}>
                            <h2>Detalhes da compra</h2>
                            <div className={styles.checkoutPage__box}>
                                <span><strong>Total de itens no carrinho:</strong> x{cart.length}</span>
                                <span><strong>Valor parcelado:</strong> x10 de R$70,00</span>
                                <span><strong>Preço total:</strong> R$700,00</span>
                                <Link href='/checkout/shipping' className={styles.checkoutPage__boxBottom}>
                                    <button className='button button--secondary'>Continuar para entrega</button>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.checkoutPage__listProducts}>
                            <h2>Produtos no carrinho:</h2>
                            <div className={styles.checkoutPage__products}>
                            {
                                Object.keys(cart.items).map((key) => (
                                    <ProductCart product={cart.items[key]} key={`cart-${cart.items[key].id}`}/>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}