import React from 'react';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import './Home.css'

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Bienvenido a Prototipo Dead by Dayligth</h1>
        <div id='box-main-articles-news'>
          {/* <h2>Noticias de última hora</h2> */}
          <div className='box-main-article-news1'>

            <h2>Nuevo DLC Disponible</h2>
            <div className='text-article-new'>
              <img src="https://assets.deadbydaylight.com/DBD_STORE_DLCCOLLECTION_CATALOGUE_SCREENSHOTS_DUSTIN_VF_01_f275f1e56e.jpg" alt="news1-DLC" className='imagen-dlc' />

            </div>

          </div>
          <div className='box-main-article-news2'>
            <h2>Nuevo Pase de Grieta Desbloqueada</h2>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;