import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'questionPage',
  title: 'Question Page',
  type: 'object',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'options',
      title: 'Multiple Choice Options',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.min(2),
    }),
  ],
  preview: {
    select: {title: 'question'},
  },
})