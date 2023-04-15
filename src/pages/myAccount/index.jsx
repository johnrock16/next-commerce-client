import Link from 'next/link';
import { IoPersonSharp, IoCubeSharp, IoStarSharp, IoHomeSharp, IoCardSharp, IoChatbubblesSharp } from 'react-icons/io5';
import SimpleHeader from '@components/header/simpleHeader';
import Footer from '@components/footer/footer';
import styles from './myAccount.module.scss';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Breadcrumb from '@components/breadcrumb/breadcrumb';

export async function getStaticProps({ locale }) {
    return {
      props: {...await serverSideTranslations(locale, ['myAccount'])},
    }
}

export default function MyAccountPage(){
    const { t } = useTranslation('myAccount');
    return (
        <>
            <Head>
                <meta name='description' content='My Account page of Next Ecommerce here you navigate through myAccount pages like: myData, myOrders, myFavorites, myAddress, myCards and support'/>
            </Head>
            <SimpleHeader/>
            <main className={styles.myAccountPage}>
                <div className='container'>
                    <div className={styles.myAccountPage__wrapper}>
                        <Breadcrumb/>
                        <h1>{t('myAccount.title')}</h1>
                        <div className={styles.myAccountPage__options}>
                            <Link href='/myAccount/myData' className={styles.myAccountPage__option}>
                                <IoPersonSharp className={styles.myAccountPage__icon}/>
                                <div>
                                    <h2>{t('myAccount.myData.title')}</h2>
                                    <p>{t('myAccount.myData.description')}</p>
                                </div>
                            </Link>
                            <Link href='/myAccount/myOrders' className={styles.myAccountPage__option}>
                                <IoCubeSharp className={styles.myAccountPage__icon}/>
                                <div>
                                    <h2>{t('myAccount.myOrders.title')}</h2>
                                    <p>{t('myAccount.myOrders.description')}</p>
                                </div>
                            </Link>
                            <Link href='/myAccount/myFavorites' className={styles.myAccountPage__option}>
                                <IoStarSharp className={styles.myAccountPage__icon}/>
                                <div>
                                    <h2>{t('myAccount.myFavorites.title')}</h2>
                                    <p>{t('myAccount.myFavorites.description')}</p>
                                </div>
                            </Link>
                            <Link href='/myAccount/myAddress' className={styles.myAccountPage__option}>
                                <IoHomeSharp className={styles.myAccountPage__icon}/>
                                <div>
                                    <h2>{t('myAccount.myAddress.title')}</h2>
                                    <p>{t('myAccount.myAddress.description')}</p>
                                </div>
                            </Link>
                            <Link href='/myAccount/myCards' className={styles.myAccountPage__option}>
                                <IoCardSharp className={styles.myAccountPage__icon}/>
                                <div>
                                    <h2>{t('myAccount.myCards.title')}</h2>
                                    <p>{t('myAccount.myCards.description')}</p>
                                </div>
                            </Link>
                            <Link href='/myAccount/support' className={styles.myAccountPage__option}>
                                <IoChatbubblesSharp className={styles.myAccountPage__icon}/>
                                <div>
                                    <h2>{t('myAccount.support.title')}</h2>
                                    <p>{t('myAccount.support.description')}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}