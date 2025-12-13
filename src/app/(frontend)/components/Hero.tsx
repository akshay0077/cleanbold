'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface HeroProps {
  data: any
}

export default function Hero({ data }: HeroProps) {
  const heroImageUrl = typeof data.heroImage === 'object' ? data.heroImage?.url : data.heroImage

  return (
    <section className="hero" id="hero">
      <div className="hero-wrapper">
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={heroImageUrl || '/hero-image.png'}
            alt="Hero"
            fill
            className="hero-image"
            priority
          />
        </motion.div>
        {data.title && (
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1>{data.title}</h1>
            {data.subtitle && <p>{data.subtitle}</p>}
          </motion.div>
        )}
      </div>
    </section>
  )
}
