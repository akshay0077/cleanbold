import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CoreOfferings from './components/OurWork'
import Projects from './components/Projects'
import FeaturedClients from './components/FeaturedClients'
import WhyBrandsChoose from './components/WhyBrandsChoose'
import StudioSection from './components/StudioSection'
import Footer from './components/Footer'
import { getHomePageData } from '@/lib/payload'
import './styles.css'
import './components-styles.css'

export default async function HomePage() {
  const data = await getHomePageData()

  return (
    <div className="home-page">
      <Header data={data.header} />
      <div id="hero">
        <Hero />
      </div>
      <div id="services">
        <CoreOfferings
          data={data.coreOfferings}
          settings={data.siteSettings.coreOfferingsSection}
        />
      </div>
      <div id="work">
        <Projects
          data={data.projects}
          categories={data.projectCategories}
          settings={data.siteSettings.projectsSection}
        />
      </div>
      <FeaturedClients
        data={data.featuredClients}
        settings={data.siteSettings.featuredClientsSection}
      />
      <div id="about">
        <WhyBrandsChoose data={data.whyBrandsChoose} />
      </div>
      <div id="studio">
        <StudioSection data={data.studioSection} />
      </div>
      <div id="contact">
        <Footer data={data.footer} />
      </div>
    </div>
  )
}
