'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Large Concrete Panels Left and Right */}
        <motion.div
          className="concrete-panel concrete-panel-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Dots pattern on concrete */}
          <div className="concrete-dots">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="dot" />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="concrete-panel concrete-panel-right"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Dots pattern on concrete */}
          <div className="concrete-dots">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="dot" />
            ))}
          </div>
        </motion.div>

        {/* Left Poster Mockup (Brown/Tan) */}
        <motion.div
          className="poster-frame poster-left"
          initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Image
            src="/hero-image.png"
            alt="Poster Mockup"
            width={280}
            height={400}
            className="poster-image"
          />
        </motion.div>

        {/* Right Poster Mockup (Blue with bottle) */}
        <motion.div
          className="poster-frame poster-right"
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Image
            src="/hero-image.png"
            alt="Poster Mockup"
            width={280}
            height={400}
            className="poster-image"
          />
        </motion.div>

        {/* Sharp Shots Title with Blue Background Badge */}
        <motion.div
          className="hero-title-badge"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h1>Sharp Shots.</h1>
        </motion.div>

        {/* Bold Stories - Left Side */}
        <motion.div
          className="hero-text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <h2>Bold</h2>
          <h2>Stories.</h2>
          <div className="decorative-lines">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="line"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3, delay: 1.1 + i * 0.03 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Brands That Grow - Right Side */}
        <motion.div
          className="hero-text-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <h2>Brands</h2>
          <h2>That Grow.</h2>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start My Brand Journey
          </motion.button>
          <motion.button
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See Our Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
