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
          {/* <h2>Breaking news</h2> */}
          <div className='box-main-article-news1'>
            <h2>New DLC Available</h2>
            <div className='text-article-news1'>
              <img src="https://assets.deadbydaylight.com/DBD_STORE_DLCCOLLECTION_CATALOGUE_SCREENSHOTS_DUSTIN_VF_01_f275f1e56e.jpg" alt="news1-DLC" className='imagen-dlc' />
                <div className='text-article'>
                    <h2>STRANGER THINGS CHAPTER 2 COLLECTION</h2>
                </div>
            </div>
          </div>

          <div className='box-main-article-news2'>
            <h2>New Complements shoes</h2>
            <div className='text-article-news2'>
              <img src="https://assets.deadbydaylight.com/DBD_STORE_OMELET_Tortured_Souls_Collection_Catalog_Yun_Jin_VF_da1619cc64.jpg" alt="news2" className='image-crack-pass' />
              <div className='text-article'>
                    <h2>NEW COMPLEMENTS SKINS</h2>
                </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;