import React from 'react'
import Hero from '../../Components/Hero/Hero'
import OfferCard from '../../Components/OfferCard'
import OfferCarousel from '../../Components/OfferCarousel'
import './Home.css'
const Home = () => {
  return (
    <>
        <div className="home-container">
            <Hero/>
            <OfferCarousel/>
        </div>
    </>
  )
}

export default Home