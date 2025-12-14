import type { CollectionConfig } from 'payload'

export const WhyBrandsChoose: CollectionConfig = {
  slug: 'why-brands-choose',
  admin: {
    defaultColumns: ['sectionLabel', 'sectionType', '_status', 'updatedAt'],
    useAsTitle: 'sectionLabel',
  },
  versions: {
    drafts: {
      autosave: false,
    },
    maxPerDoc: 30,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'sectionType',
      type: 'select',
      required: true,
      options: [
        { label: 'Section 1 - Why Brands Choose', value: 'section-1' },
        { label: 'Section 2 - Our Approach', value: 'section-2' },
        { label: 'Section 3 - Creativity Meets Conversion', value: 'section-3' },
      ],
      label: 'Section Type',
    },
    {
      name: 'sectionLabel',
      type: 'text',
      required: true,
      label: 'Section Label',
    },
    {
      name: 'mainHeading',
      type: 'text',
      required: true,
      label: 'Main Heading',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
    },
    {
      name: 'featuresTitle',
      type: 'text',
      label: 'Features Section Title',
      admin: {
        description: 'e.g., "What Sets Us Apart:"',
      },
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features List',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          label: 'Feature Text',
        },
      ],
    },
    {
      name: 'approachSteps',
      type: 'array',
      label: 'Approach Steps (Section 2 only)',
      admin: {
        description: 'Only used for "Our Approach" section',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Step Title',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Step Description',
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 1,
      label: 'Display Order',
    },
  ],
}
