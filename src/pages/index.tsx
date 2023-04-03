import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ListNavigate from '../components/list/listNavigate/listNavigate';
import ProductTile from '../components/product/productTile/productTile';
import Tile from '../components/tile/tile';
import TileSquare from '../components/tile/tileSquare/tileSquare';
import Card from '../components/card/card';
import Minicart from '../components/cart/minicart';

export default function Home() {
  return (
    <>
      <Minicart/>
      <Header/>
      <main>
        <div className='container'>
          <section className='section--categoryNavigate'>
            <h2>Navegue por categorias</h2>
            <ListNavigate>
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
