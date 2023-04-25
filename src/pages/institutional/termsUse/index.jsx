import Header from '@components/header/header';
import Footer from '@components/footer/footer';
import Minicart from '@components/cart/minicart';
import styles from './termsUse.module.scss';
import { restAPI } from '../../../rest/env';
import showdown from 'showdown';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

export async function getStaticProps({ locale }) {
    const terms = await restAPI('strapi', 'termsOfUse');
    const converter = new showdown.Converter();
    const window = new JSDOM('').window;
    const DOMPurify = createDOMPurify(window);
    return {
      props: {
        locale,
        terms: DOMPurify.sanitize(converter.makeHtml(terms.data.attributes.description)),
        ...await serverSideTranslations(locale, ['components', 'common'])
      },
    }
}

export default function TermsPage({terms}) {
    const { t } = useTranslation('common');
    return (
        <>
            <Head>
                <meta name='description' content={`Terms of Use Page here you can see our terms of use`}/>
            </Head>
            <Minicart/>
            <Header/>
            <main className={styles.termsUsePage}>
                <div className='container'>
                    <div className={styles.termsUsePage__wrapper}>
                        <h1>{t('footer.termsUse')}</h1>
                        <div className='richText' dangerouslySetInnerHTML={{__html: terms}}></div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}