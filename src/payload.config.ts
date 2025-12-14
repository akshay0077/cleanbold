// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import { seoPlugin } from '@payloadcms/plugin-seo'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Projects } from './collections/Projects'
import { ProjectCategories } from './collections/ProjectCategories'
import { CoreOfferings } from './collections/CoreOfferings'
import { FeaturedClients } from './collections/FeaturedClients'
import { WhyBrandsChoose } from './collections/WhyBrandsChoose'

import { Header } from './globals/Header'
import { Hero } from './globals/Hero'
import { Footer } from './globals/Footer'
import { StudioSection } from './globals/StudioSection'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Projects,
    ProjectCategories,
    CoreOfferings,
    FeaturedClients,
    WhyBrandsChoose,
  ],
  globals: [Header, Hero, Footer, StudioSection, SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // SEO Plugin - adds SEO fields to all collections and globals
    seoPlugin({
      collections: [
        'projects',
        'core-offerings',
        'project-categories',
        'featured-clients',
        'why-brands-choose',
      ],
      globals: ['header', 'hero', 'footer', 'studio-section', 'site-settings'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }: any) =>
        doc?.title || doc?.name || doc?.sectionLabel || 'Cleanbold Advertising',
      generateDescription: ({ doc }: any) =>
        doc?.description || doc?.tagline || 'Where Creativity Converts',
    }),
    // S3 Storage Plugin - stores media files in Cloudflare R2 (S3-compatible)
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET_NAME || '',
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_TOKEN || '',
          secretAccessKey: process.env.S3_SECRET_KEY || '',
        },
        endpoint: process.env.S3_ENDPOINT || '',
        region: process.env.S3_REGION || '',
        forcePathStyle: true,
      },
    }),
  ],
})
