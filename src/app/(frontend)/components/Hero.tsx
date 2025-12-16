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
      <div className="hero-wrapper" style={{ position: 'relative', width: 1210, height: 671 }}>
        {/* 1️⃣ FULL IMAGE (INITIAL) */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            delay: 3, // wait 3 seconds
            duration: 1, // fade out duration
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
          }}
        >
          <Image
            src={heroImageUrl}
            alt="Hero Full"
            fill
            priority
            style={{ objectFit: 'cover', borderRadius: '48px' }}
          />
        </motion.div>

        {/* 2️⃣ MASKED IMAGE (AFTER DELAY) */}
        <motion.svg
          width="1210"
          height="671"
          viewBox="0 0 1210 671"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 3.2, // starts slightly after fade out
            duration: 1,
            ease: 'easeOut',
          }}
          style={{ position: 'absolute', inset: 0, zIndex: 1 }}
        >
          <mask
            id="mask0_18775_29159"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1321"
            height="685"
          >
            <path
              d="M473.793 38.5C473.793 59.763 491.03 77 512.293 77H808.354C829.617 77 846.854 59.763 846.854 38.5C846.854 17.237 864.092 0 885.354 0H1279.48C1301.78 0 1319.85 18.0747 1319.85 40.371V126.999C1319.85 127 1319.85 127 1319.85 127C1319.85 127 1319.85 127 1319.85 127.001V163.5C1319.85 183.658 1303.51 200 1283.35 200H1099.26C1076.96 200 1058.89 218.075 1058.89 240.371V241.629C1058.89 263.925 1040.81 282 1018.52 282H1001.21C978.916 282 960.841 300.075 960.841 322.371V347.629C960.841 369.925 978.916 388 1001.21 388H1279.72C1302.02 388 1320.09 406.075 1320.09 428.371V644.629C1320.09 666.925 1302.02 685 1279.72 685H956.461C934.165 685 916.09 666.925 916.09 644.629V632.371C916.09 610.075 898.015 592 875.719 592H441.633C419.336 592 401.262 610.075 401.262 632.371V644.629C401.262 666.925 383.187 685 360.891 685H40.6327C18.3364 685 0.261719 666.925 0.261719 644.629V559.115C0.261719 559.052 0.210127 559 0.146484 559C0.0828422 559 0.03125 558.948 0.03125 558.885V390.371C0.03125 368.075 18.106 350 40.4023 350H164.703C186.999 350 205.074 331.925 205.074 309.629V295.535C205.074 279.776 192.299 267 176.539 267C160.78 267 148.004 254.224 148.004 238.465V202.371C148.004 180.075 129.929 162 107.633 162H41.164C18.8677 162 0.792969 143.925 0.792969 121.629V40.371C0.792969 18.0747 18.8677 0 41.164 0H435.293C456.556 0 473.793 17.237 473.793 38.5Z"
              fill="#D9D9D9"
            />
          </mask>

          <g mask="url(#mask0_18775_29159)">
            <path
              d="M0.03125 0L1319.03 0V697H0.03125L0.03125 0Z"
              fill="url(#pattern0_18775_29159)"
            />
          </g>
          <defs>
            <pattern
              id="pattern0_18775_29159"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_18775_29159"
                transform="matrix(0.00159744 0 0 0.003023 0 -0.130295)"
              />
            </pattern>
            <image
              id="image0_18775_29159"
              width="626"
              height="417"
              preserveAspectRatio="none"
              xlinkHref={'/hero-image.png'}
            />
          </defs>
        </motion.svg>

        {/* 3️⃣ TEXT OVERLAYS */}
        {/* 3️⃣ TEXT OVERLAYS */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 3,
          }}
        >
          {/* TEXT (non-clickable) */}
          <div className="hero-text-layer">
            {/* TOP CENTER */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.2, duration: 0.6, ease: 'easeOut' }}
              className="hero-text top-center"
            >
              Sharp Shots.
            </motion.div>

            {/* LEFT CENTER */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4.6, duration: 0.6, ease: 'easeOut' }}
              className="hero-text left-center"
            >
              Bold <br /> Stories.
            </motion.div>

            {/* RIGHT CENTER */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 5.0, duration: 0.6, ease: 'easeOut' }}
              className="hero-text right-center"
            >
              <h3 className="brand-right">Brands</h3>
              <h3 className="brand-second">That Grow.</h3>
            </motion.div>
          </div>

          {/* 4️⃣ CTA BUTTONS (clickable & bottom) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5.6, duration: 0.6, ease: 'easeOut' }}
            className="hero-cta-a"
          >
            <button className="btn-primary">Start My Brand Journey</button>
            <button className="btn-secondary">See Our Work</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
