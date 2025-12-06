import {defineField, defineType} from 'sanity'
import {UsersIcon} from '@sanity/icons'

export default defineType({
  name: 'communityPage',
  title: 'Community Page',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Community Hub',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description to display below the heading.',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})