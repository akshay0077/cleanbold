import type { GlobalConfig } from 'payload'

export const StudioSection: GlobalConfig = {
  slug: 'studio-section',
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
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Studio Cleanbold',
      label: 'Studio Title',
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
      defaultValue: 'Where Stories Are Shot.',
      label: 'Subtitle',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
    },
    {
      name: 'studioImages',
      type: 'array',
      label: 'Studio Images (Auto-scrolling)',
      minRows: 3,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Image',
        },
      ],
    },
    {
      name: 'perfectFor',
      type: 'array',
      label: 'Perfect For (Marquee Items)',
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
          label: 'Item Name',
        },
      ],
    },
    {
      name: 'detailsSection',
      type: 'group',
      label: 'Details Section',
      fields: [
        {
          name: 'title',
          type: 'textarea',
          required: true,
          label: 'Details Title',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Details Description',
        },
        {
          name: 'locationTitle',
          type: 'text',
          required: true,
          defaultValue: 'Location:',
          label: 'Location Label',
        },
        {
          name: 'locationAddress',
          type: 'textarea',
          required: true,
          label: 'Location Address',
        },
        {
          name: 'bookButtonText',
          type: 'text',
          required: true,
          defaultValue: 'Book Studio',
          label: 'Book Button Text',
        },
      ],
    },
  ],
}
