import Header from '@components/header/header';
import Footer from '@components/footer/footer';
import Minicart from '@components/cart/minicart';
import styles from './termsUse.module.scss';

export default function TermsPage() {
    return (
        <>
            <Minicart/>
            <Header/>
            <main className={styles.termsUsePage}>
                <div className='container'>
                    <div className={styles.termsUsePage__wrapper}>
                        <h1>Terms of Use</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloribus recusandae animi accusamus asperiores consequatur praesentium ab, at sint tempora officia, placeat ipsam, nihil quos nobis accusantium excepturi ipsa cupiditate?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quis molestias nihil ipsum fuga cum inventore facilis saepe earum? Animi assumenda amet sunt eius recusandae aspernatur aut placeat, ad eligendi.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi rerum similique molestiae ducimus a natus modi unde fugiat, cum sunt ullam fuga dolor voluptas vitae ipsam, saepe delectus deserunt nihil!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto assumenda ab deserunt, asperiores eaque nihil laborum excepturi fugiat vitae repudiandae, aut cumque voluptatem sapiente sunt porro rerum perferendis fugit adipisci!
                        </p>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}