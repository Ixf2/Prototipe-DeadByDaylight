import React from 'react';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import './Home.css';
import LoadingScreen from '../../components/loadingscreen/LoadingScreen.jsx';
import { getNews } from '../../services/NewsArticles.js';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import HomeNews from '../../components/home-new/HomeNew.jsx';

const Home = () => {

  
  const { t, i18n } = useTranslation();



  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };



  return (
    <>
      <Header />
      <LoadingScreen/>
      <main>
        <h1>{t('welcome')}</h1> 
        
        <div className="language-buttons" style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button onClick={() => changeLanguage('es')}>🇪🇸 ES</button>
          <button onClick={() => changeLanguage('en')}>🇺🇸 EN</button>
        </div>

        <div id='box-main-articles-news'>
          {/* Article 1 */}
          <div className='box-main-article-news1'>
            <h2>{t('Article1_title')}</h2>
            <div className='text-article-news1'>
              <img 
                src="https://assets.deadbydaylight.com/DBD_STORE_DLCCOLLECTION_CATALOGUE_SCREENSHOTS_DUSTIN_VF_01_f275f1e56e.jpg" 
                alt="news1-DLC" 
                className='imagen-dlc' 
              />
              <div className='text-article'>
                <h2>{t('Article1_desc')}</h2> 
              </div>
            </div>
          </div>



          {/* Article 2 */}
          <div className='box-main-article-news2'>
            <h2>{t('Article2_title')}</h2> 
            <div className='text-article-news2'>
              <img 
                src="https://assets.deadbydaylight.com/DBD_STORE_OMELET_Tortured_Souls_Collection_Catalog_Yun_Jin_VF_da1619cc64.jpg" 
                alt="news2" 
                className='image-crack-pass' 
              />
              <div className='text-article'>
                <h2>{t('Article2_desc')}</h2>
              </div>
            </div>
          </div>
        </div>

       <HomeNews/>



      </main>
      <Footer />
    </>
  );
};

export default Home;