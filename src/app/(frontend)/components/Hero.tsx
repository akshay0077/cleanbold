'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import OverlappingHero from './OverlayImage'
import { Button } from '@payloadcms/ui'

interface HeroProps {
  data: any
}

export default function Hero({ data }: HeroProps) {
  const heroImageUrl = typeof data.heroImage === 'object' ? data.heroImage?.url : data.heroImage
  console.log(data)
  return (
    <section className="hero" id="hero">
      <div className="hero-wrapper">
        <OverlappingHero
          imageSrc={'/hero-image.png'}
          // topOverlay={
          //   <div style={{ fontSize: '45px', fontStyle: 'Biennale', fontWeight: '600' }}>
          //     Sharp Shots.
          //   </div>
          // }
          // leftOverlay={
          //   <div style={{ fontSize: '45px', fontStyle: 'Biennale', fontWeight: '600' }}>
          //     Bold Stories.
          //   </div>
          // }
          // rightOverlay={
          //   <div style={{ fontSize: '22px', fontStyle: 'Biennale', fontWeight: '400' }}>
          //     Brands That Grow.
          //   </div>
          // }
          // bottomOverlay={
          //   <div style={{ fontSize: '22px', fontStyle: 'Biennale', fontWeight: '400' }}>
          //     <Button>Let&apos;s Work</Button>
          //   </div>
          // }
        />
      </div>
    </section>
  )
}
