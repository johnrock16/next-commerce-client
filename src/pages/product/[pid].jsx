
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/reducers/cart';
import Image from 'next/image';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Minicart from '../../components/cart/minicart';
import PRODUCTS from '../../mock/product/products.json';
import styles from './product.module.scss';
import '../../i18n/index.js';

export const getServerSideProps = async ({ query }) => {
    const pid = query.pid;
    const product = PRODUCTS[pid];

    return {
        props: {
            product: product,
        }
    }
}

const ProductPage = ({product}) => {
    const dispatch = useDispatch();

    const handleProductAdd = () => {
        dispatch(addProduct(product));
    }
  return (
    <>
        <Header/>
        <Minicart/>
        <main className={styles.productPage}>
            <div className='container'>
                <div className={styles.productPage__wrapper}>
                    <div className={styles.productPage__banner}>
                        <Image className='img-fluid' src={product.image.src} alt={product.image.alt} width={240} height={240}/>
                    </div>
                    <div className={styles.productPage__info}>
                        <h1>{product.name}</h1>
                        <h2>{product.seller}</h2>
                        <span className={styles.productPage__price}>R${product.price.total}</span>
                        <p>ou em x{product.price.parcel.times} de {product.price.parcel.value}</p>
                    </div>
                    <button className='button button--buy' onClick={handleProductAdd}>Comprar</button>
                </div>
            </div>
        </main>
        <Footer/>
    </>
  );
}

export default ProductPage;