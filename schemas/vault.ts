import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'vault',
  title: 'Vault Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'The Vault',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'buttons',
      title: 'Vault Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Button',
          fields: [
            {name: 'label', type: 'string', title: 'Label'},
            {name: 'url', type: 'url', title: 'Target URL'},
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'url',
            },
          },
        },
      ],
    }),
  ],
})