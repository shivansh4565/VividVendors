import React from 'react'
import Hero from '../components/Layout/Hero'
import NewArrivals from '../components/Products/NewArrivals'
import GenderCollections from '../components/Products/GenderCollections'
import ProductDetails from '../components/Products/ProductDetails'
import FeaturesCollections from '../components/Products/FeaturesCollections'
const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollections />
      <NewArrivals />
      <ProductDetails />
      <FeaturesCollections />
    </div>
  )
}

export default Home
