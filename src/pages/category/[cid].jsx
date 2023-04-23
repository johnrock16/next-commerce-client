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
import styles from './category.module.scss';
import { STRAPI_API_URL } from '../../rest/env';

export const getServerSideProps = async ({ query, locale }) => {
  const cid = query.cid;
  const categoryResolve = await fetch(STRAPI_API_URL+`/categories/${cid}?populate=*`,{method: 'GET'})
  const category = await categoryResolve.json();

  return {
    props: {
      category: category.data,
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
            <h1>{category.attributes.name}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae consequatur tempora ex maiores excepturi, ipsam sapiente officia sint odit, exercitationem iure provident nam culpa, aliquam dignissimos praesentium adipisci repellat vel!</p>
          </section>
          <section className='section--categoryNavigate'>
            <h2>Navegue por categorias</h2>
            <ListNavigate>
              <Tile href={'/category/1'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <Tile href={'/category/1'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <Tile href={'/category/1'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <Tile href={'/category/1'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <Tile href={'/category/1'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <Tile href={'/category/1'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <Tile href={'/category/1'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <Tile href={'/category/1'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
            </ListNavigate>
          </section>
          <section className='section--productNavigate'>
            <h2>Mais vendidos</h2>
            <ListNavigate>
              <ProductTile pid="1"/>
              <ProductTile pid="1"/>
              <ProductTile pid="1"/>
            </ListNavigate>
          </section>
          <section className='section--productNavigate'>
            <h2>Recomendados</h2>
            <ListNavigate>
              <ProductTile pid="1"/>
              <ProductTile pid="1"/>
              <ProductTile pid="1"/>
            </ListNavigate>
          </section>
          <Card>
            <TileSquare href={'/category/1'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
          </Card>
          <Card>
            <div className='grid--card'>
              <TileSquare href={'/category/1'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <TileSquare href={'/category/1'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <TileSquare href={'/category/1'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <TileSquare href={'/category/1'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
            </div>
          </Card>
          <Card>
              <TileSquare href={'/category/1'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
          </Card>
          <Card>
              <TileSquare href={'/category/1'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
          </Card>

          <Card>
            <div className='grid--card'>
              <TileSquare href={'/category/1'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <TileSquare href={'/category/1'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <TileSquare href={'/category/1'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <TileSquare href={'/category/1'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <TileSquare href={'/category/1'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <TileSquare href={'/category/1'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
            </div>
          </Card>
        </div>
      </main>
      <Footer/>
    </>
  )
}
