'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <motion.header
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="header-container">
        <a
          href="#hero"
          className="logo-link"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <motion.div
            className="logo-text"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Clean<span className="logo-bold">bold</span>
            <span className="logo-dot">.</span>
          </motion.div>
        </a>

        <nav className="nav-center">
          <motion.div
            className="nav-item services-dropdown"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')}>
              Services
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={isServicesOpen ? 'dropdown-arrow open' : 'dropdown-arrow'}
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>

          <motion.a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, 'about')}
            className="nav-link"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            About
          </motion.a>

          <motion.a
            href="#studio"
            onClick={(e) => handleSmoothScroll(e, 'studio')}
            className="nav-link"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Studio
          </motion.a>

          <motion.a
            href="#work"
            onClick={(e) => handleSmoothScroll(e, 'work')}
            className="nav-link"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Our Work
          </motion.a>
        </nav>

        <motion.div
          className="header-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <a
            href="#contact"
            className="lets-work-btn"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </motion.header>
  )
}
