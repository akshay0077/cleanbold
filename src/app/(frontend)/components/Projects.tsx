'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const categories = ['All', 'Real Estate', 'Fashion', 'FMCG', 'Health Care', 'Fitness']

const projects = [
  {
    id: 1,
    title:
      'Lorem Ipsum Dolor Sit Amet Consectetur. Morbi Ut Elit Amet Amet Tempor Dignissim Quam Feugiat.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Vitae sem amet cras blandit lacus auctor adipiscing et dictum. Mauris arcu in amet sagittis dui dui velit. Sit sit et consequat sed mauris vulputate.',
    category: 'Real Estate',
    image: '/project/project-1.png',
    size: 'large',
  },
  {
    id: 2,
    title:
      'Lorem Ipsum Dolor Sit Amet Consectetur. Morbi Ut Elit Amet Amet Tempor Dignissim Quam Feugiat.',
    category: 'Fashion',
    image: '/project/project-2.png',
    size: 'small',
  },
  {
    id: 3,
    title:
      'Lorem Ipsum Dolor Sit Amet Consectetur. Morbi Ut Elit Amet Amet Tempor Dignissim Quam Feugiat.',
    category: 'Category Tag',
    image: '/project/project-3.png',
    size: 'small',
  },
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  return (
    <section className="projects-section">
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label-projects">Our Projects</p>
          <h2 className="projects-main-title">Lorem Ipsum Dolar Simit.</h2>
          <p className="projects-description">
            Lorem ipsum dolor sit amet consectetur. Habitant rutrum id ornare sit curabitur morbi
            odio. Tristique tincidunt leo.
          </p>
        </motion.div>

        <motion.div
          className="category-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="projects-grid-layout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card-item ${project.size === 'large' ? 'project-large' : 'project-small'}`}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <div className="project-card-inner">
                <div className="project-image-container">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="project-image"
                  />
                  <span className="project-category-badge">{project.category}</span>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  {project.description && <p className="project-desc">{project.description}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="explore-more-btn">Explore More</button>
        </motion.div>
      </div>
    </section>
  )
}
