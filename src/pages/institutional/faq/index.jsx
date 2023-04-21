import Header from '@components/header/header';
import Footer from '@components/footer/footer';
import Minicart from '@components/cart/minicart';
import styles from './faq.module.scss';
import { restAPI } from '../../../rest/env';
import ButtonFaq from '../../../components/button/buttonFaq/buttonFaq';

export async function getStaticProps({ locale }) {
    const questions = await restAPI('strapi', 'faq');
    return {
      props: {locale, questions: questions.data},
    }
}

export default function FaqPage({questions}) {
    return (
        <>
            <Minicart/>
            <Header/>
            <main className={styles.faqPage}>
                <div className='container'>
                    <div className={styles.faqPage__wrapper}>
                        <h1>FAQ</h1>
                        <div className={styles.faqPage__questions}>
                            {
                                (questions.map(({attributes, id})=>(
                                    <ButtonFaq attributes={attributes} key={`faq-${id}`}/>
                                )))
                            }
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}