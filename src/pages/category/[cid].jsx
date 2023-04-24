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
import { restAPI, STRAPI_URL } from '../../rest/env';

export const getServerSideProps = async ({ query, locale }) => {
  const cid = query.cid;
  const category = await restAPI('strapi', 'categories', {findOne: cid, config: {method: 'GET'}});
  const subcategoriesShowcase = await restAPI('strapi', 'pageCategories/subcategories', {findOne: category.data.attributes.page_category.data.id, config: {method: 'GET'}});
  const productsShowcase = await restAPI('strapi', 'pageCategories/products', {findOne: category.data.attributes.page_category.data.id, config: {method: 'GET'}});
  const cardsShowcase = await restAPI('strapi', 'pageCategories/cards', {findOne: category.data.attributes.page_category.data.id, config: {method: 'GET'}});

  return {
    props: {
      category: category.data,
      subcategoriesShowcase: subcategoriesShowcase.data.attributes,
      productsShowcase: productsShowcase.data.attributes.productsShowcase,
      cardsShowcase: cardsShowcase.data.attributes.cardsShowcase,
      ...await serverSideTranslations(locale, ['product','components', 'common'])
    }
  }
}

export default function CategoryPage({category, subcategoriesShowcase, productsShowcase, cardsShowcase}) {
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
            <p>{subcategoriesShowcase.description}</p>
          </section>
          <section className='section--categoryNavigate'>
            <h2>{subcategoriesShowcase.subcategoriesShowcase.title}</h2>
            <ListNavigate>
              {
                (subcategoriesShowcase.subcategoriesShowcase.subcategories.data && subcategoriesShowcase.subcategoriesShowcase.subcategories.data.length > 0)
                ?
                  subcategoriesShowcase.subcategoriesShowcase.subcategories.data.map((subcategory) => (
                    <Tile href={`/search?subCategory=${subcategory.id}`} image={{src: STRAPI_URL+subcategory.attributes.thumb.data.attributes.url, alt: subcategory.attributes.thumb.data.attributes.alternativeText}} text={subcategory.attributes.name} key={`subCategory-${category.id}-${subcategory.id}`}/>
                  ))
                :
                  null
              }
            </ListNavigate>
          </section>
          {
            (productsShowcase.length > 0)
            ?
              productsShowcase.map((productShowcase, index) => (
                <section className='section--productNavigate' key={`productShowCase-${productShowcase.id}-${index}`}>
                  <h2>{productShowcase.title}</h2>
                  <ListNavigate>
                    {
                      (productShowcase.products.data && productShowcase.products.data.length > 0)
                      ?
                        productShowcase.products.data.map((product, index) => (
                          <ProductTile pid={product.id} productObject={product.attributes} key={`productTile-${productShowcase.id}-${product.id}-${index}`}/>
                        ))
                      : null
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
              cardsShowcase.map((cardShowcase, index) => (
                <Card title={cardShowcase.title} key={`cardsShowcase-home-${cardShowcase.id}`}>
                  {
                    (cardShowcase.cards)?
                      (cardShowcase.cards.length > 1)
                      ?
                        <div className='grid--card'>
                          {
                            cardShowcase.cards.map((card, index) => (
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
