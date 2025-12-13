import type { CollectionConfig } from 'payload'

export const CoreOfferings: CollectionConfig = {
  slug: 'core-offerings',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'color', 'imagePosition', 'order'],
  },
  versions: {
    drafts: {
      autosave: false,
    },
    maxPerDoc: 30,
  },
  admin: {
    defaultColumns: ['title', '_status', 'order', 'updatedAt'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Offering Title',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
    },
    {
      name: 'color',
      type: 'select',
      required: true,
      options: [
        { label: 'Dark Blue', value: '#1e3a8a' },
        { label: 'Dark Gray', value: '#1f2937' },
        { label: 'Teal', value: '#0d9488' },
        { label: 'Purple', value: '#7c3aed' },
      ],
      label: 'Background Color',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Offering Image',
    },
    {
      name: 'imagePosition',
      type: 'select',
      required: true,
      defaultValue: 'bottom',
      options: [
        { label: 'Top', value: 'top' },
        { label: 'Bottom', value: 'bottom' },
      ],
      label: 'Image Position',
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      label: 'Display Order',
    },
  ],
}
