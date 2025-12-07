import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CoreOfferings from './components/OurWork'
import Projects from './components/Projects'
import FeaturedClients from './components/FeaturedClients'
import WhyBrandsChoose from './components/WhyBrandsChoose'
import Studio from './components/Studio'
import Contact from './components/Contact'
import StudioSection from './components/StudioSection'
import Footer from './components/Footer'
import './styles.css'
import './components-styles.css'

export default async function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="services">
        <CoreOfferings />
      </div>
      <div id="work">
        <Projects />
      </div>
      <FeaturedClients />
      <div id="about">
        <WhyBrandsChoose />
      </div>
      <div id="studio">
        <StudioSection />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  )
}
