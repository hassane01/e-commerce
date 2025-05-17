import React from 'react'
import HomeSlider from '../components/home/HomeSlider'
import CategorieIcons from '../components/Categorie/CategorieIcons'
import DealSection from '../components/Deal_section/DealSection'
import ProductSlider from '../components/ProductsSlider/ProductSlider'

const Home = () => {
  return (
    <>
      <HomeSlider/>
      <CategorieIcons/>
      <DealSection/>
      <ProductSlider/>
    </>
  )
}

export default Home 