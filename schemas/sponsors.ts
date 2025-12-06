import {defineField, defineType} from 'sanity'
import {UsersIcon} from '@sanity/icons'

export default defineType({
  name: 'sponsors',
  title: 'Sponsors Section',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main heading for the sponsors section.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description to display below the title.',
    }),
    defineField({
      name: 'logos',
      title: 'Sponsor Logos',
      type: 'array',
      description: 'Add logos for your sponsors.',
      of: [
        defineField({
          name: 'logo',
          title: 'Logo',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {name: 'alt', title: 'Alternative Text', type: 'string'},
            defineField({
              name: 'url',
              title: 'Sponsor URL',
              type: 'url',
              description: 'The website or social media link for the sponsor.',
            }),
          ],
        }),
      ],
    }),
  ],
})