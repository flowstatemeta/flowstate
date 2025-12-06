import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'educationCategory',
  title: 'Education Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g., Basic, Intermediate, Advanced',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description of this category.',
    }),
    defineField({
      name: 'orderRank',
      title: 'Order Rank',
      type: 'number',
      description: 'A number to control the display order. Lower numbers appear first.',
      validation: (Rule) => Rule.min(0),
    }),
  ],
})
