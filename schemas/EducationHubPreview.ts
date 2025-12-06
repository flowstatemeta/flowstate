import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'educationHubPreview',
  title: 'Education Hub Preview',
  type: 'document',
  icon: BookIcon,
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
      name: 'hubItems',
      title: 'Hub Items',
      type: 'array',
      of: [
        {
          name: 'hubItem',
          title: 'Hub Item',
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Select an icon that represents this item.',
              options: {
                list: [
                  {title: 'Book', value: 'book'},
                  {title: 'Science', value: 'science'},
                  {title: 'Art', value: 'art'},
                  {title: 'Code', value: 'code'},
                  {title: 'Business', value: 'business'},
                  {title: 'Math', value: 'math'},
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})
