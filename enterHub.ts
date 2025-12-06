import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'enterHub',
  title: 'Enter Hub Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Text for the call-to-action button (e.g., "Enter the Hub").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url',
      description: 'URL for the call-to-action button (e.g., "/hub").',
      validation: (Rule) => Rule.required().uri({ allowRelative: true }),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})