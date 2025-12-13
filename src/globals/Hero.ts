import type { GlobalConfig } from 'payload'

export const Hero: GlobalConfig = {
  slug: 'hero',
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
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Hero Background Image',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Hero Title (Optional)',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Hero Subtitle (Optional)',
    },
  ],
}
