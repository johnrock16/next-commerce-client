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
import { STRAPI_URL, restAPI } from '../rest/env';

// @ts-ignore: next-line
export async function getStaticProps({ locale }) {
  const categoriesShowcase = await restAPI('strapi', 'homepage/categories');
  const productsShowcase = await restAPI('strapi', 'homepage/products');
  const cardsShowcase = await restAPI('strapi', 'homepage/cards');

  return {
    props: {
      categoriesShowcase: categoriesShowcase.data.attributes.categoriesShowcase,
      productsShowcase: productsShowcase.data.attributes.productsShowcase,
      cardsShowcase: cardsShowcase.data.attributes.cardsShowcase,
      ...await serverSideTranslations(locale, ['components', 'common'])
    },
  }
}

// @ts-ignore: next-line
export default function Home({categoriesShowcase, productsShowcase, cardsShowcase}) {
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
            <h2>{categoriesShowcase.title}</h2>
            <ListNavigate>
              {
                (categoriesShowcase.categories && categoriesShowcase.categories.data.length > 0)
                ?
                  categoriesShowcase.categories.data.map((category: any, index: any) => (
                    <Tile href={'/category/'+category.id} image={{src: STRAPI_URL+category.attributes.thumb.data.attributes.formats.thumbnail.url, alt: category.attributes.thumb.data.attributes.alternativeText}} text={category.attributes.name} key={`categories-home-${categoriesShowcase.title}-${category.id}`}/>
                  ))
                :
                  null
              }
            </ListNavigate>
          </section>
          {
            (productsShowcase && productsShowcase.length > 0)
            ?
            productsShowcase.map((productShowcase : any, index : Number) => (
                <section className='section--productNavigate' key={`productNavigate-${index}`}>
                  <h2>{productShowcase.title}</h2>
                  <ListNavigate>
                    {
                      (productShowcase.products && productShowcase.products.data.length > 0)
                      ?
                        productShowcase.products.data.map((product: any, index: any) => (
                          <ProductTile pid={product.id} productObject={product.attributes} key={`productItem-${productShowcase.title}-${index}`}/>
                        ))
                      :
                        null
                    }
                  </ListNavigate>
                </section>
              ))
            :
              null
          }
          {
            (cardsShowcase && cardsShowcase.length > 0)
            ?
              cardsShowcase.map((cardShowcase: any, index: Number) => (
                <Card title={cardShowcase.title} key={`cardsShowcase-home-${cardShowcase.id}`}>
                  {
                    (cardShowcase.cards)?
                      (cardShowcase.cards.length > 1)
                      ?
                        <div className='grid--card'>
                          {
                            cardShowcase.cards.map((card : any, index : Number) => (
                              <TileSquare href={card.redirect} image={{src: STRAPI_URL+card.thumb.data.attributes.url, alt: card.thumb.data.attributes.alternativeText}} text={card.title} key={`cardShowcase-card-${cardShowcase.id}-${card.id}-${index}`}/>
                            ))
                          }
                        </div>
                      :
                        <TileSquare href={cardShowcase.cards[0].redirect} image={{src: STRAPI_URL+cardShowcase.cards[0].thumb.data.attributes.url, alt: cardShowcase.cards[0].thumb.data.attributes.alternativeText}} text={cardShowcase.cards[0].title}/>
                    :
                      null
                  }
                </Card>
              ))
            :
              null
          }
        </div>
      </main>
      <Footer/>
    </>
  )
}
