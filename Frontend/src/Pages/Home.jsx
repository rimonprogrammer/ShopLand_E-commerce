import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import { useFilterContext } from '../ContextAPI/FilterContext';
import FeatureProduct from '../Components/FeatureProduct';
import { useProductContext } from '../ContextAPI/ProductContext';
import TrendingProduct from '../Components/TrendingProduct';
import Hero from '../Components/Hero/Hero';
import Footer from '../Components/Footer/Footer';
import Contact from '../Components/Contact/Contact';

function Home() {
  const { updateFilterValue} = useFilterContext();  // all product's will be come through this custom hooks
  const {featuredProduct, trendingProduct, isLoading} = useProductContext();
 
  document.title = 'ShopLand || Home'
  return (
    <>
        <Navbar/>
        <Hero updateFilterValue={updateFilterValue} />
        <FeatureProduct featuredProduct={featuredProduct} isLoading={isLoading} />
        <TrendingProduct trendingProduct={trendingProduct} />
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home;