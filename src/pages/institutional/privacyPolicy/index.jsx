import Header from '@components/header/header';
import Footer from '@components/footer/footer';
import Minicart from '@components/cart/minicart';
import styles from './privacyPolicy.module.scss';
import { restAPI } from '../../../rest/env';
import showdown from 'showdown';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }) {
    const terms = await restAPI('strapi', 'privacyPolicy');
    const converter = new showdown.Converter()
    return {
      props: {
        locale,
        privacyPolicy: converter.makeHtml(terms.data.attributes.privacyPolicy),
        ...await serverSideTranslations(locale, ['components', 'common'])
      }
    }
}

export default function PrivacyPolicyPage({privacyPolicy}) {
    const { t } = useTranslation('common');
    return (
        <>
            <Minicart/>
            <Header/>
            <main className={styles.privacyPolicyPage}>
                <div className='container'>
                    <div className={styles.privacyPolicyPage__wrapper}>
                        <h1>{t('footer.privacyPolicy')}</h1>
                        <div className='richText' dangerouslySetInnerHTML={{__html: privacyPolicy}}></div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}