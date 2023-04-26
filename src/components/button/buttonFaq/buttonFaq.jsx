import { useState } from 'react';
import { IoAddSharp, IoRemoveSharp } from 'react-icons/io5';
import styles from './buttonFaq.module.scss';

export default function ButtonFaq({attributes: {title, description}}) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);
    return (
        <div className={styles.buttonFaq}>
            <button className='button' onClick={handleShow}>
                {title}
                {(show) ? <IoRemoveSharp/> : <IoAddSharp/>}
            </button>
            {(show)? <p>{description}</p> : null}
        </div>
    );
}