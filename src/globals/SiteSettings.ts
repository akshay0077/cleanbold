import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  versions: {
    drafts: {
      autosave: false,
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteTitle',
      type: 'text',
      required: true,
      defaultValue: 'Cleanbold Advertising',
      label: 'Site Title',
    },
    {
      name: 'siteDescription',
      type: 'textarea',
      required: true,
      label: 'Site Description (SEO)',
    },
    {
      name: 'ogImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Open Graph Image (Social Sharing)',
    },
    {
      name: 'projectsSection',
      type: 'group',
      label: 'Projects Section Settings',
      fields: [
        {
          name: 'sectionLabel',
          type: 'text',
          defaultValue: 'Our Projects',
          label: 'Section Label',
        },
        {
          name: 'mainTitle',
          type: 'text',
          defaultValue: 'Lorem Ipsum Dolar Simit.',
          label: 'Main Title',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
        },
        {
          name: 'exploreButtonText',
          type: 'text',
          defaultValue: 'Explore More',
          label: 'Button Text',
        },
      ],
    },
    {
      name: 'coreOfferingsSection',
      type: 'group',
      label: 'Core Offerings Section Settings',
      fields: [
        {
          name: 'sectionLabel',
          type: 'text',
          defaultValue: 'Core Offerings',
          label: 'Section Label',
        },
        {
          name: 'mainTitle',
          type: 'text',
          defaultValue: 'We Turn Ideas Into Impact.',
          label: 'Main Title',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
        },
      ],
    },
    {
      name: 'featuredClientsSection',
      type: 'group',
      label: 'Featured Clients Section Settings',
      fields: [
        {
          name: 'sectionLabel',
          type: 'text',
          defaultValue: 'Featured Clients/Impact',
          label: 'Section Label',
        },
        {
          name: 'mainTitle',
          type: 'text',
          defaultValue: 'Brands That Trusted The Bold.',
          label: 'Main Title',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
        },
        {
          name: 'ctaButtonText',
          type: 'text',
          defaultValue: 'See Our Work',
          label: 'CTA Button Text',
        },
      ],
    },
  ],
}
