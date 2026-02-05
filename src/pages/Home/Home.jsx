import React from 'react';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Bienvenido a Prototipo Dead by Dayligth</h1>
        <div id='box-main-articles-news'>
          <div className='box-main-article-news1'>
            <h2>Noticias última hora</h2>
              <div>
                <a href=""></a>
              </div>
          </div>
          <div className='box-main-article-news2'>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
