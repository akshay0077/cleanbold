import type { CollectionConfig } from 'payload'

export const ProjectCategories: CollectionConfig = {
  slug: 'project-categories',
  admin: {
    defaultColumns: ['name', '_status', 'updatedAt'],
    useAsTitle: 'name',
  },
  versions: {
    drafts: {
      autosave: false,
    },
    maxPerDoc: 20,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Category Name',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug',
      admin: {
        description: 'URL-friendly version of the name',
      },
    },
  ],
}
