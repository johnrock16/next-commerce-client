import Header from '@components/header/header';
import Footer from '@components/footer/footer';
import Minicart from '@components/cart/minicart';
import styles from './about.module.scss';
import { restAPI } from '../../../rest/env';
import showdown from 'showdown';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }) {
    const aboutUs = await restAPI('strapi', 'aboutUS');
    const converter = new showdown.Converter()
    return {
      props: {
        locale,
        aboutUs: converter.makeHtml(aboutUs.data.attributes.about),
        ...await serverSideTranslations(locale, ['components', 'common'])
      },
    }
}

export default function AboutPage({aboutUs}) {
    const { t } = useTranslation('common');
    return (
        <>
            <Minicart/>
            <Header/>
            <main className={styles.aboutPage}>
                <div className='container'>
                    <div className={styles.aboutPage__wrapper}>
                        <h1>{t('footer.aboutUs')}</h1>
                        <div className='richText' dangerouslySetInnerHTML={{__html: aboutUs}}></div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}