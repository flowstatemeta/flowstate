import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactMessage',
  title: 'Contact Messages',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the person submitting the form',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Email of the person submitting the form',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      description: 'The message submitted by the user',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'email'},
  },
})