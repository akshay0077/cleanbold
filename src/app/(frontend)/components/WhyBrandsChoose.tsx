'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const approachSteps = [
  {
    id: 'discover',
    title: 'Discover',
    description: 'Understand your brand, goals & audience',
  },
  {
    id: 'define',
    title: 'Define',
    description: 'Develop the strategy and creative direction.',
  },
  {
    id: 'design',
    title: 'Design',
    description: 'Build campaigns that connect emotionally.',
  },
  {
    id: 'deliver',
    title: 'Deliver',
    description: 'Launch, measure, and optimize for growth.',
  },
]

export default function WhyBrandsChoose() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  return (
    <section className="why-brands-scroll-section" ref={containerRef}>
      {/* Section 1: Why Brands Choose */}
      <div className="why-brands-section-1">
        <div className="timeline-container">
          <div className="timeline-line-progress"></div>
          <motion.div
            className="timeline-dot active"
            style={{
              scale: useTransform(scrollYProgress, [0, 0.2], [0, 1]),
            }}
          ></motion.div>
        </div>

        <div className="why-brands-content-wrapper">
          <motion.div
            className="why-brands-content"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label">Why Brands Choose Cleanbold.</p>
            <h2 className="main-heading">One Team. One Vision. Real Results.</h2>
            <p className="description">
              Most agencies separate creativity from performance; we fuse them. At Cleanbold,
              strategy, storytelling, and scaling work together in one cohesive system.
            </p>

            <div className="divider-line"></div>

            <div className="features-section">
              <h3>What Sets Us Apart:</h3>
              <div className="features-grid-two-col">
                <div className="features-column">
                  <div className="feature-item">
                    <span className="feature-bullet"></span>
                    <p>Data-driven storytelling</p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-bullet"></span>
                    <p>In-house content & production studio</p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-bullet"></span>
                    <p>Proven success in real estate, fashion, interiors, D2C & lifestyle</p>
                  </div>
                </div>
                <div className="features-column">
                  <div className="feature-item">
                    <span className="feature-bullet"></span>
                    <p>Brand design with measurable outcomes</p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-bullet"></span>
                    <p>We think creatively and deliver commercially</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 2: Our Approach */}
      <div className="why-brands-section-2">
        <div className="timeline-container">
          <div className="timeline-line-progress"></div>
          <motion.div
            className="timeline-dot active"
            style={{
              scale: useTransform(scrollYProgress, [0.3, 0.5], [0, 1]),
            }}
          ></motion.div>
        </div>

        <div className="why-brands-content-wrapper">
          <motion.div
            className="why-brands-content"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label">Our Approach</p>
            <h2 className="main-heading">Clarity. Creativity. Impact.</h2>
            <p className="description">
              Most agencies separate creativity from performance; we fuse them. At Cleanbold,
              strategy, storytelling, and scaling work together in one cohesive system.
            </p>

            <div className="divider-line"></div>

            <div className="approach-grid">
              {approachSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="approach-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 3: Where Creativity Meets Conversion */}
      <div className="why-brands-section-3">
        <div className="timeline-container">
          <div className="timeline-line-progress"></div>
          <motion.div
            className="timeline-dot active"
            style={{
              scale: useTransform(scrollYProgress, [0.6, 0.8], [0, 1]),
            }}
          ></motion.div>
        </div>

        <div className="why-brands-content-wrapper">
          <motion.div
            className="why-brands-content"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label">Lorem Ipsum Dolar</p>
            <h2 className="main-heading">Where Creativity Meets Conversion.</h2>
            <p className="description">
              Founded in 2025, Cleanbold Advertising was born from one belief advertising should do
              more than look good; it should work. We started as a creative collective helping
              brands find their boldest voice, and evolved into a full-scale agency that blends
              design, storytelling, and performance marketing.
            </p>

            <div className="divider-line"></div>

            <div className="features-grid-two-col">
              <div className="features-column">
                <div className="feature-item">
                  <span className="feature-bullet"></span>
                  <p>We Think Like Brand Builders.</p>
                </div>
                <div className="feature-item">
                  <span className="feature-bullet"></span>
                  <p>Create Like Storytellers</p>
                </div>
              </div>
              <div className="features-column">
                <div className="feature-item">
                  <span className="feature-bullet"></span>
                  <p>From Clean Strategy To Bold Growth .</p>
                </div>
                <div className="feature-item">
                  <span className="feature-bullet"></span>
                  <p>Scale Like Marketers.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
