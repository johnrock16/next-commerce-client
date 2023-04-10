import { calculateCount } from '@store/reducers/cart';
import { useDispatch } from 'react-redux';
import styles from './productCount.module.scss';

export default function ProductCount({pid, count}) {
    const dispatch = useDispatch();
    const handleProductCount = (quantity) => {
        dispatch(calculateCount({id: pid, quantity}));
    }

    return (
        <div className={styles.productCount}>
            <button className='button button--secondary' onClick={()=>{handleProductCount(-1)}}>-</button>
            <input type='number' value={count} readOnly/>
            <button className='button button--secondary' onClick={()=>{handleProductCount(+1)}}>+</button>
        </div>
    );
}