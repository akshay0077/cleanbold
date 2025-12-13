import { getPayload } from 'payload'
import config from '@/payload.config'

// Initialize Payload
let cachedPayload: any = null

export async function getPayloadClient() {
  if (cachedPayload) {
    return cachedPayload
  }

  cachedPayload = await getPayload({ config })
  return cachedPayload
}

// Fetch all data for homepage
export async function getHomePageData() {
  const payload = await getPayloadClient()

  const [
    header,
    hero,
    footer,
    studioSection,
    siteSettings,
    projects,
    projectCategories,
    coreOfferings,
    featuredClients,
    whyBrandsChoose,
  ] = await Promise.all([
    payload.findGlobal({ slug: 'header' }),
    payload.findGlobal({ slug: 'hero' }),
    payload.findGlobal({ slug: 'footer' }),
    payload.findGlobal({ slug: 'studio-section' }),
    payload.findGlobal({ slug: 'site-settings' }),
    payload.find({
      collection: 'projects',
      sort: 'order',
      limit: 100,
    }),
    payload.find({
      collection: 'project-categories',
      limit: 100,
    }),
    payload.find({
      collection: 'core-offerings',
      sort: 'order',
      limit: 100,
    }),
    payload.find({
      collection: 'featured-clients',
      sort: 'row,order',
      limit: 100,
    }),
    payload.find({
      collection: 'why-brands-choose',
      sort: 'order',
      limit: 10,
    }),
  ])

  return {
    header,
    hero,
    footer,
    studioSection,
    siteSettings,
    projects: projects.docs,
    projectCategories: projectCategories.docs,
    coreOfferings: coreOfferings.docs,
    featuredClients: featuredClients.docs,
    whyBrandsChoose: whyBrandsChoose.docs,
  }
}

// Fetch specific global
export async function getGlobal(slug: string) {
  const payload = await getPayloadClient()
  return await payload.findGlobal({ slug })
}

// Fetch collection items
export async function getCollection(collection: string, options = {}) {
  const payload = await getPayloadClient()
  return await payload.find({
    collection,
    ...options,
  })
}
