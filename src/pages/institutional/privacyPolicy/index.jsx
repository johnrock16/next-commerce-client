import Header from '@components/header/header';
import Footer from '@components/footer/footer';
import Minicart from '@components/cart/minicart';
import styles from './privacyPolicy.module.scss';
import { restAPI } from '../../../rest/env';
import showdown from 'showdown';

export async function getStaticProps({ locale }) {
    const terms = await restAPI('strapi', 'privacyPolicy');
    const converter = new showdown.Converter()
    return {
      props: {locale, privacyPolicy: converter.makeHtml(terms.data.attributes.privacyPolicy)},
    }
}

export default function privacyPolicyPage({privacyPolicy}) {
    return (
        <>
            <Minicart/>
            <Header/>
            <main className={styles.privacyPolicyPage}>
                <div className='container'>
                    <div className={styles.privacyPolicyPage__wrapper}>
                        <h1>Privacy Policy</h1>
                        <div className='richText' dangerouslySetInnerHTML={{__html: privacyPolicy}}></div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}