import React from 'react';
import HomePageBanner from './HomePageBanner/HomePageBanner';
import HomePageListProducts from './HomePageListProducts/HomePageListProducts';

import HomePageMenus from './HomePageMenus/HomePageMenus';
import HomePageNews from './HomePageNews/HomePageNews';
import HomePageListImg from './HomePageListImg/HomePageListImg';

const HomePage = () => {
  return (
    <>
      <HomePageBanner />
      <HomePageListProducts />
      
      <HomePageMenus />
      <HomePageNews />
      <HomePageListImg />

    </>
  );
};

export default HomePage;