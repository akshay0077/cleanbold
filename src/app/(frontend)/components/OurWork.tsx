'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'

const offerings = [
  {
    id: 1,
    title: 'Branding & Creative',
    description: 'Lorem ipsum dolor sit amet consectetur. Tristique massa consequat rutrum tempus. Lacus aliquam posuere eget et fringilla luctus dictum ac nulla.',
    color: '#1e3a8a', // Dark blue
    image: '/hero-image.png',
  },
  {
    id: 2,
    title: 'Digital & Social Media',
    description: 'Lorem ipsum dolor sit amet consectetur. Tristique massa consequat rutrum tempus. Lacus aliquam posuere eget et fringilla luctus dictum ac nulla.',
    color: '#1f2937', // Dark gray
    image: '/hero-image.png',
  },
  {
    id: 3,
    title: 'Media & PR',
    description: 'Lorem ipsum dolor sit amet consectetur. Tristique massa consequat rutrum tempus. Lacus aliquam posuere eget et fringilla luctus dictum ac nulla.',
    color: '#0d9488', // Teal
    image: '/hero-image.png',
  },
  {
    id: 4,
    title: 'Production & Shoots',
    description: 'Lorem ipsum dolor sit amet consectetur. Tristique massa consequat rutrum tempus. Lacus aliquam posuere eget et fringilla luctus dictum ac nulla.',
    color: '#7c3aed', // Purple
    image: '/hero-image.png',
  },
]

export default function CoreOfferings() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [_currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? offerings.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === offerings.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="core-offerings" ref={ref}>
      <div className="offerings-container">
        <motion.div
          className="offerings-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label">Core Offerings</p>
          <h2>We Turn Ideas Into Impact.</h2>
          <p className="section-description">
            From brand strategy to content production, we deliver creative and
            performance-driven marketing under one roof.
          </p>
        </motion.div>

        <div className="offerings-carousel">
          <button className="carousel-btn prev" onClick={handlePrev}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <div className="offerings-grid">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.id}
                className="offering-card"
                style={{ backgroundColor: offering.color }}
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="card-content">
                  <h3>{offering.title}</h3>
                  <p>{offering.description}</p>
                  
                  <div className="card-image">
                    <Image
                      src={offering.image}
                      alt={offering.title}
                      width={400}
                      height={300}
                      className="offering-img"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="carousel-btn next" onClick={handleNext}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
