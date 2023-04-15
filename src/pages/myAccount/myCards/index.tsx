import Link from 'next/link';
import { IoAddSharp } from 'react-icons/io5';
import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './myCards.module.scss';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Breadcrumb from '@components/breadcrumb/breadcrumb';

// @ts-ignore: next-line
export async function getStaticProps({ locale }) {
    return {
      props: {...await serverSideTranslations(locale, ['myCards', 'common'])},
    }
}

export default function AddressFormPage(){
    const { t } = useTranslation(['myCards', 'common'])
    return (
        <>
            <Head>
                <meta name='description' content='My Card page of Next Ecommerce here you can manage your cards'/>
            </Head>
            <SimpleHeader/>
            <main className={styles.myCardsPage}>
                <div className='container'>
                    <div className={styles.myCardsPage__wrapper}>
                        <Breadcrumb/>
                        <h1>{t('myCards.title')}</h1>
                        <div className={styles.myCardsPage__addresses}>
                            <Link href='/myAccount/myCards/form' className={styles['myCardsPage__address--add']}>
                                <IoAddSharp/>
                                <h2>{t('myCards.cardAdd')}</h2>
                            </Link>
                            <div className={styles.myCardsPage__address}>
                                <h2>Banco Bacana Diamond GoodCard</h2>
                                <ul>
                                    <li><span>GoodCard Diamond **** 4937</span></li>
                                    <li><span>Cartão de credito</span></li>
                                    <li><span>Jomes Jareg</span></li>
                                </ul>
                                <div className={styles.myCardsPage__addressButtons}>
                                    <Link href='/myAccount/myCards/form'>{t('button.update', {ns:'common'})}</Link>
                                    <Link href='/myAccount/myCards/form'>{t('button.delete', {ns:'common'})}</Link>
                                </div>
                            </div>
                            <div className={styles.myCardsPage__address}>
                                <h2>Banco Bacana Diamond GoodCard</h2>
                                <ul>
                                    <li><span>GoodCard Diamond **** 4937</span></li>
                                    <li><span>Cartão de credito</span></li>
                                    <li><span>Jomes Jareg</span></li>
                                </ul>
                                <div className={styles.myCardsPage__addressButtons}>
                                    <Link href='/myAccount/myCards/form'>{t('button.update', {ns:'common'})}</Link>
                                    <Link href='/myAccount/myCards/form'>{t('button.delete', {ns:'common'})}</Link>
                                </div>
                            </div>
                            <div className={styles.myCardsPage__address}>
                                <h2>Banco Bacana Diamond GoodCard</h2>
                                <ul>
                                    <li><span>GoodCard Diamond **** 4937</span></li>
                                    <li><span>Cartão de credito</span></li>
                                    <li><span>Jomes Jareg</span></li>
                                </ul>
                                <div className={styles.myCardsPage__addressButtons}>
                                    <Link href='/myAccount/myCards/form'>{t('button.update', {ns:'common'})}</Link>
                                    <Link href='/myAccount/myCards/form'>{t('button.delete', {ns:'common'})}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}