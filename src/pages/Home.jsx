import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'

import FoodExperienceSection from '../components/FoodExperienceSection';
import { foodExperienceImagesTop, foodExperienceImagesBottom } from '../assets/assets';
import AIDealWidget from '../components/AIDealWidget'
  const Home = () => {

  return (
    <>
      <Hero />
      <FeaturedDestination />
      <FoodExperienceSection
    imagesTop={foodExperienceImagesTop}
    imagesBottom={foodExperienceImagesBottom}
    intervalMs={2000}   // 2 seconds
  />
      <ExclusiveOffers />
      <Testimonial />
      <NewsLetter />
      <AIDealWidget />
    </>
  )
}

export default Home
