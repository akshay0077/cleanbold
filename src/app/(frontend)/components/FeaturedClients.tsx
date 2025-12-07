'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Organize brands into 4 rows
const brandRows = [
  // Row 1 - Right to Left
  [
    '/brand/brand-1.png',
    '/brand/brand-2.png',
    '/brand/brand-3.png',
    '/brand/brand-4.png',
    '/brand/brand-5.png',
    '/brand/brand-6.png',
  ],
  // Row 2 - Left to Right
  [
    '/brand/brand-7.png',
    '/brand/brand-8.png',
    '/brand/brand-9.png',
    '/brand/brand-10.png',
    '/brand/brand-11.png',
    '/brand/brand-12.png',
  ],
  // Row 3 - Right to Left
  [
    '/brand/brand-13.png',
    '/brand/brand-14.png',
    '/brand/brand-15.png',
    '/brand/brand-17.png',
    '/brand/brand-18.png',
    '/brand/brand-19.png',
  ],
  // Row 4 - Left to Right
  [
    '/brand/brand-20.png',
    '/brand/brand-21.png',
    '/brand/brand-22.png',
    '/brand/brand-1.png',
    '/brand/brand-2.png',
    '/brand/brand-3.png',
  ],
]

export default function FeaturedClients() {
  return (
    <section className="featured-clients-section">
      <div className="clients-container">
        <motion.div
          className="clients-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label">Featured Clients/Impact</p>
          <h2>
            Brands That Trusted The Bold<span className="dot-accent">.</span>
          </h2>
          <p className="section-description">
            From real estate giants to fashion disruptors, our work powers growth for ambitious
            brands across industries.
          </p>
        </motion.div>

        <div className="clients-marquee-wrapper">
          {brandRows.map((row, rowIndex) => (
            <div key={rowIndex} className="clients-marquee-row">
              <div
                className={`clients-marquee-track ${
                  rowIndex % 2 === 0 ? 'scroll-right-to-left' : 'scroll-left-to-right'
                }`}
              >
                {/* Duplicate images 3 times for seamless loop */}
                {[...row, ...row, ...row].map((brand, index) => (
                  <div key={index} className="client-brand-card">
                    <Image
                      src={brand}
                      alt={`Brand ${index + 1}`}
                      width={200}
                      height={100}
                      className="client-brand-logo"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          className="clients-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button className="see-work-btn">See Our Work</button>
        </motion.div>
      </div>
    </section>
  )
}
