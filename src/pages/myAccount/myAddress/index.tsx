import Link from 'next/link';
import { IoAddSharp } from 'react-icons/io5';
import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './myAddress.module.scss';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

// @ts-ignore: next-line
export async function getStaticProps({ locale }) {
    return {
      props: {...await serverSideTranslations(locale, ['myAddress', 'common'])},
    }
}

export default function AddressFormPage() {
    const { t } = useTranslation(['myAddress', 'common']);

    return (
        <>
            <Head>
                <meta name='description' content='My Address page of Next Ecommerce here you can manage your addresses to delivery and billing'/>
            </Head>
            <SimpleHeader/>
            <main className={styles.myAddressPage}>
                <div className='container'>
                    <div className={styles.myAddressPage__wrapper}>
                        <h1>{t('myAddress.title')}</h1>
                        <div className={styles.myAddressPage__addresses}>
                            <Link href='/myAccount/myAddress/form' className={styles['myAddressPage__address--add']}>
                                <IoAddSharp/>
                                <h2>{t('myAddress.productAdd')}</h2>
                            </Link>
                            <div className={styles.myAddressPage__address}>
                                <h2>Casa</h2>
                                <ul>
                                    <li><span>16000-006</span></li>
                                    <li><span>Rua São Paulo, 321</span></li>
                                    <li><span>Vila Nova São Paulo</span></li>
                                    <li><span>São Paulo, Sâo Paulo, Brasil</span></li>
                                </ul>
                                <div className={styles.myAddressPage__addressButtons}>
                                    <Link href='/myAccount/myAddress/form'>{t('button.update', {ns: 'common'})}</Link>
                                    <Link href='/myAccount/myAddress/form'>{t('button.delete', {ns: 'common'})}</Link>
                                </div>
                            </div>
                            <div className={styles.myAddressPage__address}>
                                <h2>Casa</h2>
                                <ul>
                                    <li><span>16000-006</span></li>
                                    <li><span>Rua São Paulo, 321</span></li>
                                    <li><span>Vila Nova São Paulo</span></li>
                                    <li><span>São Paulo, Sâo Paulo, Brasil</span></li>
                                </ul>
                                <div className={styles.myAddressPage__addressButtons}>
                                    <Link href='/myAccount/myAddress/form'>{t('button.update', {ns: 'common'})}</Link>
                                    <Link href='/myAccount/myAddress/form'>{t('button.delete', {ns: 'common'})}</Link>
                                </div>
                            </div>
                            <div className={styles.myAddressPage__address}>
                                <h2>Casa</h2>
                                <ul>
                                    <li><span>16000-006</span></li>
                                    <li><span>Rua São Paulo, 321</span></li>
                                    <li><span>Vila Nova São Paulo</span></li>
                                    <li><span>São Paulo, Sâo Paulo, Brasil</span></li>
                                </ul>
                                <div className={styles.myAddressPage__addressButtons}>
                                    <Link href='/myAccount/myAddress/form'>{t('button.update', {ns: 'common'})}</Link>
                                    <Link href='/myAccount/myAddress/form'>{t('button.delete', {ns: 'common'})}</Link>
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