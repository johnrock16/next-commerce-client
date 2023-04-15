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

// @ts-ignore: next-line
export async function getStaticProps({ locale }) {
  return {
    props: {...await serverSideTranslations(locale, ['components', 'common'])},
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <meta name='description' content='Home page of Next Ecommerce here you can see the most relevant products'/>
      </Head>
      <Header/>
      <main>
        <Minicart/>
        <div className='container'>
          <section className='section--categoryNavigate'>
            <h2>Navegue por categorias</h2>
            <ListNavigate>
              <Tile href={'/category/smartphone'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <Tile href={'/category/smartphone'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <Tile href={'/category/smartphone'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <Tile href={'/category/smartphone'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <Tile href={'/category/smartphone'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <Tile href={'/category/smartphone'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <Tile href={'/category/smartphone'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <Tile href={'/category/smartphone'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
            </ListNavigate>
          </section>
          <section className='section--productNavigate'>
            <h2>Mais vendidos</h2>
            <ListNavigate>
              <ProductTile pid="ps4ctrl"/>
              <ProductTile pid="ns2017"/>
              <ProductTile pid="smphone"/>
              <ProductTile pid="ps4ctrl"/>
              <ProductTile pid="ns2017"/>
              <ProductTile pid="smphone"/>
            </ListNavigate>
          </section>
          <section className='section--productNavigate'>
            <h2>Recomendados</h2>
            <ListNavigate>
              <ProductTile pid="ps4ctrl"/>
              <ProductTile pid="ns2017"/>
              <ProductTile pid="smphone"/>
              <ProductTile pid="ps4ctrl"/>
              <ProductTile pid="ns2017"/>
              <ProductTile pid="smphone"/>
            </ListNavigate>
          </section>
          <Card>
              <TileSquare href={'/category/smartphone'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
          </Card>
          <Card>
            <div className='grid--card'>
              <TileSquare href={'/category/smartphone'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <TileSquare href={'/category/smartphone'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <TileSquare href={'/category/smartphone'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <TileSquare href={'/category/smartphone'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
            </div>
          </Card>
          <Card>
            <TileSquare href={'/category/smartphone'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
          </Card>
          <Card>
            <TileSquare href={'/category/smartphone'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
          </Card>

          <Card>
            <div className='grid--card'>
              <TileSquare href={'/category/smartphone'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <TileSquare href={'/category/smartphone'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <TileSquare href={'/category/smartphone'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <TileSquare href={'/category/smartphone'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <TileSquare href={'/category/smartphone'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
              <TileSquare href={'/category/smartphone'} image={{src:'/images/category/smartphone.webp', alt: 'A smartphone with so much colors in background'}} text="Smartphones"/>
            </div>
          </Card>
        </div>
      </main>
      <Footer/>
    </>
  )
}
