import type { CollectionConfig } from 'payload'

export const FeaturedClients: CollectionConfig = {
  slug: 'featured-clients',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'row', 'order'],
  },
  versions: {
    drafts: {
      autosave: false,
    },
    maxPerDoc: 20,
  },
  admin: {
    defaultColumns: ['name', 'row', '_status', 'updatedAt'],
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Client Name',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Client Logo',
    },
    {
      name: 'row',
      type: 'select',
      required: true,
      defaultValue: 1,
      options: [
        { label: 'Row 1 (Right to Left)', value: 1 },
        { label: 'Row 2 (Left to Right)', value: 2 },
        { label: 'Row 3 (Right to Left)', value: 3 },
        { label: 'Row 4 (Left to Right)', value: 4 },
      ],
      label: 'Marquee Row',
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      label: 'Order in Row',
    },
  ],
}
