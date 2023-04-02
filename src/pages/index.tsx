import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ListNavigate from '../components/list/listNavigate/listNavigate';
import ProductTile from '../components/product/productTile/productTile';
import Tile from '../components/tile/tile';

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <div className='container'>
          <section className='section--categoryNavigate'>
            <h2>Navegue por categorias</h2>
            <ListNavigate>
              <Tile/>
              <Tile/>
              <Tile/>
            </ListNavigate>
          </section>
          <section className='section--productNavigate'>
            <h2>Mais vendidos</h2>
            <ListNavigate>
              <ProductTile/>
              <ProductTile/>
              <ProductTile/>
            </ListNavigate>
          </section>
          <section className='section--productNavigate'>
            <h2>Recomendados</h2>
            <ListNavigate>
              <ProductTile/>
              <ProductTile/>
              <ProductTile/>
            </ListNavigate>
          </section>
        </div>
      </main>
      <Footer/>
    </>
  )
}
