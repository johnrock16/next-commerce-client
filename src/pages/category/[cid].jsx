import Header from '@components/header/header';
import Footer from '@components/footer/footer';
import ListNavigate from '@components/list/listNavigate/listNavigate';
import ProductTile from '@components/product/productTile/productTile';
import Tile from '@components/tile/tile';
import TileSquare from '@components/tile/tileSquare/tileSquare';
import Card from '@components/card/card';
import Minicart from '@components/cart/minicart';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import CATEGORY from '@mock/category/category';
import styles from './category.module.scss';

export const getServerSideProps = async ({ query, locale }) => {
  const cid = query.cid;
  const category = CATEGORY[cid];

  return {
    props: {
      category,
      ...await serverSideTranslations(locale, ['product','components', 'common'])
    }
  }
}

export default function CategoryPage({category}) {
  return (
    <>
      <Head>
        <meta name='description' content='Home page of Next Ecommerce here you can see the most relevant products'/>
      </Head>
      <Header/>
      <main className={styles.categoryPage}>
        <Minicart/>
        <div className='container'>
          <section className={styles.categoryPage__about}>
            <h1>{category.title}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae consequatur tempora ex maiores excepturi, ipsam sapiente officia sint odit, exercitationem iure provident nam culpa, aliquam dignissimos praesentium adipisci repellat vel!</p>
          </section>
          <section className='section--categoryNavigate'>
            <h2>Navegue por categorias</h2>
            <ListNavigate>
              <Tile/>
              <Tile/>
              <Tile/>
              <Tile/>
              <Tile/>
              <Tile/>
              <Tile/>
              <Tile/>
            </ListNavigate>
          </section>
          <section className='section--productNavigate'>
            <h2>Mais vendidos</h2>
            <ListNavigate>
              <ProductTile pid="smphone"/>
              <ProductTile pid="smphone"/>
              <ProductTile pid="smphone"/>
            </ListNavigate>
          </section>
          <section className='section--productNavigate'>
            <h2>Recomendados</h2>
            <ListNavigate>
              <ProductTile pid="smphone"/>
              <ProductTile pid="smphone"/>
              <ProductTile pid="smphone"/>
            </ListNavigate>
          </section>
          <Card>
            <TileSquare/>
          </Card>
          <Card>
            <div className='grid--card'>
              <TileSquare/>
              <TileSquare/>
              <TileSquare/>
              <TileSquare/>
            </div>
          </Card>
          <Card>
            <TileSquare/>
          </Card>
          <Card>
            <TileSquare/>
          </Card>

          <Card>
            <div className='grid--card'>
              <TileSquare/>
              <TileSquare/>
              <TileSquare/>
              <TileSquare/>
              <TileSquare/>
              <TileSquare/>
            </div>
          </Card>
        </div>
      </main>
      <Footer/>
    </>
  )
}
