import Header from '@components/header/header';
import Footer from '@components/footer/footer';
import Minicart from '@components/cart/minicart';
import styles from './termsUse.module.scss';
import { restAPI } from '../../../rest/env';
import showdown from 'showdown';

export async function getStaticProps({ locale }) {
    const terms = await restAPI('strapi', 'termsOfUse');
    const converter = new showdown.Converter()
    return {
      props: {locale, terms: converter.makeHtml(terms.data.attributes.description)},
    }
}

export default function TermsPage({terms}) {
    return (
        <>
            <Minicart/>
            <Header/>
            <main className={styles.termsUsePage}>
                <div className='container'>
                    <div className={styles.termsUsePage__wrapper}>
                        <h1>Terms of Use</h1>
                        <div className='richText' dangerouslySetInnerHTML={{__html: terms}}></div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}