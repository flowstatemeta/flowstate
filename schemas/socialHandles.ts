import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'socialHandles',
  title: 'Social Media Handles',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'The main heading for the social media section.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description for the social media section.',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        defineField({
          name: 'socialLink',
          title: 'Social Link',
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              description: 'Select a social media platform.',
              validation: (Rule) => Rule.required(),
              options: {
                list: ['Twitter', 'Facebook', 'Instagram', 'LinkedIn', 'YouTube', 'TikTok'],
              },
            }),
            defineField({ name: 'url', title: 'URL', type: 'url', description: 'The full URL to your social media profile.', validation: (Rule) => Rule.required() }),
          ],
          preview: {
            select: { title: 'platform', subtitle: 'url' },
          },
        }),
      ],
      description: 'Add links to your social media profiles.',
    }),
  ],
})