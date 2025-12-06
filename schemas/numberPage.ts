import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'numberPage',
  title: 'Number Page',
  type: 'object',
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
  ],
  preview: {
    select: {title: 'heading'},
  },
})