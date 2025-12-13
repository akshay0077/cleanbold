import { getPayload } from 'payload'
import config from '@/payload.config'
import { NextResponse } from 'next/server'
import path from 'path'

export async function GET() {
  console.log('🚀 Starting content migration to Payload CMS...\n')

  const payload = await getPayload({ config })

  try {
    // ============================================
    // 1. CREATE PROJECT CATEGORIES
    // ============================================
    console.log('📂 Creating Project Categories...')
    const categories = [
      { name: 'All', slug: 'all' },
      { name: 'Real Estate', slug: 'real-estate' },
      { name: 'Fashion', slug: 'fashion' },
      { name: 'FMCG', slug: 'fmcg' },
      { name: 'Health Care', slug: 'health-care' },
      { name: 'Fitness', slug: 'fitness' },
    ]

    const createdCategories: Record<string, string> = {}
    for (const category of categories) {
      const created = await payload.create({
        collection: 'project-categories',
        data: {
          ...category,
          _status: 'published',
        },
      })
      createdCategories[category.slug] = created.id
      console.log(`  ✅ Created category: ${category.name}`)
    }

    // ============================================
    // 2. UPLOAD MEDIA & CREATE PROJECTS
    // ============================================
    console.log('\n📸 Creating Projects...')
    const projectsData = [
      {
        title:
          'Lorem Ipsum Dolor Sit Amet Consectetur. Morbi Ut Elit Amet Amet Tempor Dignissim Quam Feugiat.',
        description:
          'Lorem ipsum dolor sit amet consectetur. Vitae sem amet cras blandit lacus auctor adipiscing et dictum. Mauris arcu in amet sagittis dui dui velit. Sit sit et consequat sed mauris vulputate.',
        category: createdCategories['real-estate'],
        imagePath: '/project/project-1.png',
        size: 'large' as const,
        featured: true,
        order: 1,
      },
      {
        title:
          'Lorem Ipsum Dolor Sit Amet Consectetur. Morbi Ut Elit Amet Amet Tempor Dignissim Quam Feugiat.',
        description: '',
        category: createdCategories['fashion'],
        imagePath: '/project/project-2.png',
        size: 'small' as const,
        featured: false,
        order: 2,
      },
      {
        title:
          'Lorem Ipsum Dolor Sit Amet Consectetur. Morbi Ut Elit Amet Amet Tempor Dignissim Quam Feugiat.',
        description: '',
        category: createdCategories['fmcg'],
        imagePath: '/project/project-3.png',
        size: 'small' as const,
        featured: false,
        order: 3,
      },
    ]

    for (const project of projectsData) {
      const { imagePath, ...projectFields } = project
      const imageName = path.basename(imagePath)

      // Create media entry (reference to existing public image)
      const media = await payload.create({
        collection: 'media',
        data: {
          alt: imageName,
        },
        filePath: path.join(process.cwd(), 'public', imagePath),
      })

      await payload.create({
        collection: 'projects',
        data: {
          ...projectFields,
          image: media.id,
          _status: 'published',
        },
      })
      console.log(`  ✅ Created project with image: ${imageName}`)
    }

    // ============================================
    // 3. CREATE CORE OFFERINGS
    // ============================================
    console.log('\n🎯 Creating Core Offerings...')
    const offerings = [
      {
        title: 'Branding & Creative',
        description:
          'Lorem ipsum dolor sit amet consectetur. Tristique massa consequat rutrum tempus. Lacus aliquam posuere eget et fringilla luctus dictum ac nulla.',
        color: '#1e3a8a',
        imagePath: '/hero-image.png',
        imagePosition: 'bottom' as const,
        order: 1,
      },
      {
        title: 'Digital & Social Media',
        description:
          'Lorem ipsum dolor sit amet consectetur. Tristique massa consequat rutrum tempus. Lacus aliquam posuere eget et fringilla luctus dictum ac nulla.',
        color: '#1f2937',
        imagePath: '/hero-image.png',
        imagePosition: 'top' as const,
        order: 2,
      },
      {
        title: 'Media & PR',
        description:
          'Lorem ipsum dolor sit amet consectetur. Tristique massa consequat rutrum tempus. Lacus aliquam posuere eget et fringilla luctus dictum ac nulla.',
        color: '#0d9488',
        imagePath: '/hero-image.png',
        imagePosition: 'bottom' as const,
        order: 3,
      },
      {
        title: 'Production & Shoots',
        description:
          'Lorem ipsum dolor sit amet consectetur. Tristique massa consequat rutrum tempus. Lacus aliquam posuere eget et fringilla luctus dictum ac nulla.',
        color: '#7c3aed',
        imagePath: '/hero-image.png',
        imagePosition: 'top' as const,
        order: 4,
      },
      {
        title: 'Branding & Creative',
        description:
          'Lorem ipsum dolor sit amet consectetur. Tristique massa consequat rutrum tempus. Lacus aliquam posuere eget et fringilla luctus dictum ac nulla.',
        color: '#1e3a8a',
        imagePath: '/hero-image.png',
        imagePosition: 'bottom' as const,
        order: 5,
      },
      {
        title: 'Digital & Social Media',
        description:
          'Lorem ipsum dolor sit amet consectetur. Tristique massa consequat rutrum tempus. Lacus aliquam posuere eget et fringilla luctus dictum ac nulla.',
        color: '#1f2937',
        imagePath: '/hero-image.png',
        imagePosition: 'top' as const,
        order: 6,
      },
      {
        title: 'Production & Shoots',
        description:
          'Lorem ipsum dolor sit amet consectetur. Tristique massa consequat rutrum tempus. Lacus aliquam posuere eget et fringilla luctus dictum ac nulla.',
        color: '#7c3aed',
        imagePath: '/hero-image.png',
        imagePosition: 'bottom' as const,
        order: 7,
      },
    ]

    for (const offering of offerings) {
      const { imagePath, ...offeringFields } = offering
      const media = await payload.create({
        collection: 'media',
        data: { alt: 'Core offering image' },
        filePath: path.join(process.cwd(), 'public', imagePath),
      })

      await payload.create({
        collection: 'core-offerings',
        data: {
          ...offeringFields,
          image: media.id,
          _status: 'published',
        },
      })
      console.log(`  ✅ Created offering: ${offering.title}`)
    }

    // ============================================
    // 4. CREATE FEATURED CLIENTS
    // ============================================
    console.log('\n👥 Creating Featured Clients...')
    const clientRows = [
      { row: 1, brands: [1, 2, 3, 4, 5, 6] },
      { row: 2, brands: [7, 8, 9, 10, 11, 12] },
      { row: 3, brands: [13, 14, 15, 17, 18, 19] },
      { row: 4, brands: [20, 21, 22, 1, 2, 3] },
    ]

    for (const { row, brands } of clientRows) {
      for (let i = 0; i < brands.length; i++) {
        const brandNum = brands[i]
        const imagePath = `/brand/brand-${brandNum}.png`

        const media = await payload.create({
          collection: 'media',
          data: { alt: `Brand ${brandNum}` },
          filePath: path.join(process.cwd(), 'public', imagePath),
        })

        await payload.create({
          collection: 'featured-clients',
          data: {
            name: `Brand ${brandNum}`,
            logo: media.id,
            row: row,
            order: i + 1,
            _status: 'published',
          },
        })
      }
      console.log(`  ✅ Created Row ${row} clients`)
    }

    // ============================================
    // 5. CREATE WHY BRANDS CHOOSE SECTIONS
    // ============================================
    console.log('\n💡 Creating Why Brands Choose Sections...')
    const whyBrandsData = [
      {
        sectionType: 'section-1',
        sectionLabel: 'Why Brands Choose Cleanbold.',
        mainHeading: 'One Team. One Vision. Real Results.',
        description:
          'Most agencies separate creativity from performance; we fuse them. At Cleanbold, strategy, storytelling, and scaling work together in one cohesive system.',
        featuresTitle: 'What Sets Us Apart:',
        features: [
          { text: 'Data-driven storytelling' },
          { text: 'In-house content & production studio' },
          { text: 'Proven success in real estate, fashion, interiors, D2C & lifestyle' },
          { text: 'Brand design with measurable outcomes' },
          { text: 'We think creatively and deliver commercially' },
        ],
        approachSteps: [],
        order: 1,
      },
      {
        sectionType: 'section-2',
        sectionLabel: 'Our Approach',
        mainHeading: 'Clarity. Creativity. Impact.',
        description:
          'Most agencies separate creativity from performance; we fuse them. At Cleanbold, strategy, storytelling, and scaling work together in one cohesive system.',
        featuresTitle: '',
        features: [],
        approachSteps: [
          { title: 'Discover', description: 'Understand your brand, goals & audience' },
          { title: 'Define', description: 'Develop the strategy and creative direction.' },
          { title: 'Design', description: 'Build campaigns that connect emotionally.' },
          { title: 'Deliver', description: 'Launch, measure, and optimize for growth.' },
        ],
        order: 2,
      },
      {
        sectionType: 'section-3',
        sectionLabel: 'Where Creativity Meets Conversion',
        mainHeading: "We Don't Just Make Ads — We Build Brands.",
        description:
          'At Cleanbold, creativity is a tool for growth, not just aesthetics. Every campaign we design is built to inspire action and deliver measurable results.',
        featuresTitle: 'How We Do It:',
        features: [
          { text: 'Performance-driven content' },
          { text: 'ROI-optimized campaigns' },
          { text: 'End-to-end execution (strategy to delivery)' },
        ],
        approachSteps: [],
        order: 3,
      },
    ]

    for (const section of whyBrandsData) {
      await payload.create({
        collection: 'why-brands-choose',
        data: {
          ...section,
          _status: 'published',
        },
      })
      console.log(`  ✅ Created section: ${section.sectionLabel}`)
    }

    // ============================================
    // 6. CREATE HEADER GLOBAL
    // ============================================
    console.log('\n📋 Creating Header Global...')
    const logoMedia = await payload.create({
      collection: 'media',
      data: { alt: 'Cleanbold Logo' },
      filePath: path.join(process.cwd(), 'public/logo-1.png'),
    })

    await payload.updateGlobal({
      slug: 'header',
      data: {
        logo: logoMedia.id,
        navigation: [
          { label: 'Services', url: '#services', hasDropdown: true },
          { label: 'About', url: '#about', hasDropdown: false },
          { label: 'Studio', url: '#studio', hasDropdown: false },
          { label: 'Our Work', url: '#work', hasDropdown: false },
        ],
        ctaButton: {
          text: "Let's Work Together",
          url: '#contact',
        },
        _status: 'published',
      },
    })
    console.log('  ✅ Header global updated')

    // ============================================
    // 7. CREATE HERO GLOBAL
    // ============================================
    console.log('\n🦸 Creating Hero Global...')
    const heroMedia = await payload.create({
      collection: 'media',
      data: { alt: 'Hero Background' },
      filePath: path.join(process.cwd(), 'public/hero-image.png'),
    })

    await payload.updateGlobal({
      slug: 'hero',
      data: {
        heroImage: heroMedia.id,
        title: '',
        subtitle: '',
        _status: 'published',
      },
    })
    console.log('  ✅ Hero global updated')

    // ============================================
    // 8. CREATE FOOTER GLOBAL
    // ============================================
    console.log('\n📧 Creating Footer Global...')
    await payload.updateGlobal({
      slug: 'footer',
      data: {
        contactSection: {
          title: "Let's Build\nSomething Bold\nAnd Better",
          subtitle:
            "Whether you're launching, scaling, or redefining your brand let's create something extraordinary together.",
          formTitle: 'Start The Conversation',
        },
        companyInfo: {
          brandName: 'Cleanbold',
          tagline: 'Where Creativity Converts.',
          phone: '+91 98765 43210',
          email: 'hello@cleanbold.com',
          location: 'Ahmedabad, Gujarat, India',
        },
        socialLinks: [
          { platform: 'linkedin', url: 'https://linkedin.com/company/cleanbold' },
          { platform: 'instagram', url: 'https://instagram.com/cleanbold' },
          { platform: 'facebook', url: 'https://facebook.com/cleanbold' },
        ],
        copyright: '© 2025 Cleanbold Advertising. All Rights Reserved.',
        _status: 'published',
      },
    })
    console.log('  ✅ Footer global updated')

    // ============================================
    // 9. CREATE STUDIO SECTION GLOBAL
    // ============================================
    console.log('\n🎬 Creating Studio Section Global...')
    const studioImagesData = []
    for (let i = 1; i <= 4; i++) {
      const media = await payload.create({
        collection: 'media',
        data: { alt: `Studio space ${i}` },
        filePath: path.join(process.cwd(), 'public/hero-image.png'),
      })
      studioImagesData.push({ image: media.id })
    }

    await payload.updateGlobal({
      slug: 'studio-section',
      data: {
        title: 'Studio Cleanbold',
        subtitle: 'Where Stories Are Shot.',
        description:
          'Fashion and product shoot studio Ahmedabad with professional lighting and modular sets.',
        studioImages: studioImagesData,
        perfectFor: [
          { item: 'Fashion Shoots' },
          { item: 'Product Photography' },
          { item: 'Brand Videos' },
          { item: 'Social Content' },
          { item: 'E-commerce Shoots' },
          { item: 'Lifestyle Photography' },
        ],
        detailsSection: {
          title: 'A Creative Space Built For Brands That Want To Stand Out.',
          description:
            'Our in-house studio is equipped with professional lighting, modular sets, and a creative team ready to bring your vision to life.',
          locationTitle: 'Location:',
          locationAddress: 'Cleanbold Studio, Ahmedabad, Gujarat',
          bookButtonText: 'Book Studio',
        },
        _status: 'published',
      },
    })
    console.log('  ✅ Studio section global updated')

    // ============================================
    // 10. CREATE SITE SETTINGS GLOBAL
    // ============================================
    console.log('\n⚙️  Creating Site Settings Global...')
    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        siteTitle: 'Cleanbold Advertising',
        siteDescription:
          'Where Creativity Converts. Full-service advertising agency specializing in branding, digital marketing, and creative production.',
        projectsSection: {
          sectionLabel: 'Our Projects',
          mainTitle: 'Lorem Ipsum Dolar Simit.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Habitant rutrum id ornare sit curabitur morbi odio. Tristique tincidunt leo.',
          exploreButtonText: 'Explore More',
        },
        coreOfferingsSection: {
          sectionLabel: 'Core Offerings',
          mainTitle: 'We Turn Ideas Into Impact.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Habitant rutrum id ornare sit curabitur morbi odio.',
        },
        featuredClientsSection: {
          sectionLabel: 'Featured Clients/Impact',
          mainTitle: 'Brands That Trusted The Bold.',
          description:
            'From real estate giants to fashion disruptors, our work powers growth for ambitious brands across industries.',
          ctaButtonText: 'See Our Work',
        },
        _status: 'published',
      },
    })
    console.log('  ✅ Site settings global updated')

    console.log('\n✨ Migration completed successfully!\n')
    console.log('🎉 All content has been migrated to Payload CMS')
    console.log('📝 You can now access the admin panel to view and edit your content\n')

    return NextResponse.json({
      success: true,
      message: 'Content migration completed successfully!',
    })
  } catch (error: any) {
    console.error('❌ Migration failed:', error)
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    )
  }
}
