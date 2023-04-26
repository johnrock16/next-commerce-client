import Header from '@components/header/header';
import Footer from '@components/footer/footer';
import Minicart from '@components/cart/minicart';
import styles from './faq.module.scss';
import { restAPI } from '../../../rest/env';
import ButtonFaq from '../../../components/button/buttonFaq/buttonFaq';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export async function getStaticProps({ locale }) {
    const questions = await restAPI('strapi', 'faq');
    return {
      props: {
        locale,
        questions: questions.data,
        ...await serverSideTranslations(locale, ['components', 'common'])
      },
    }
}

export default function FaqPage({questions}) {
    const { t } = useTranslation('common');
    return (
        <>
            <Head>
                <meta name='description' content={`FAQ Page here you can see all Frequent Answers and Questions`}/>
            </Head>
            <Minicart/>
            <Header/>
            <main className={styles.faqPage}>
                <div className='container'>
                    <div className={styles.faqPage__wrapper}>
                        <h1>{t('footer.faq')}</h1>
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