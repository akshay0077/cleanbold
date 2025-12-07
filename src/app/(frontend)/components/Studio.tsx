'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'

const studioImages = [
  { id: 1, src: '/hero-image.png', alt: 'Studio space 1' },
  { id: 2, src: '/hero-image.png', alt: 'Studio space 2' },
  { id: 3, src: '/hero-image.png', alt: 'Studio space 3' },
  { id: 4, src: '/hero-image.png', alt: 'Studio space 4' },
]

export default function Studio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [_currentIndex, setCurrentIndex] = useState(0)

  const _handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? studioImages.length - 1 : prev - 1))
  }

  const _handleNext = () => {
    setCurrentIndex((prev) => (prev === studioImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="studio-section" ref={ref}>
      <div className="studio-container">
        <motion.div
          className="studio-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="studio-title-area">
            <h2>Studio Cleanbold</h2>
            <h3>Where Stories Are Shot.</h3>
          </div>
          <p className="studio-info">
            Fashion and product shoot studio Ahmedabad with
            professional lighting and modular sets.
          </p>
        </motion.div>

        <div className="studio-carousel">
          <div className="studio-images-wrapper">
            {studioImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="studio-image-card"
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="studio-img"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
