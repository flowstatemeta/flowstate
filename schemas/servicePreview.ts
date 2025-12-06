import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'servicePreview',
  title: 'Service Preview Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      description: 'The main title for the services section.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Main Description',
      type: 'text',
      description: 'A short description that appears under the main heading.',
    }),
    defineField({
      name: 'serviceCards',
      title: 'Service Cards',
      type: 'array',
      description: 'The list of services to display as cards.',
      of: [
        defineField({
          name: 'card',
          title: 'Service Card',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Card Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Card Description',
              type: 'text',
            }),
            defineField({
              name: 'backgroundImage',
              title: 'Background Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              initialValue: 'Learn More',
            }),
            defineField({
              name: 'buttonLink',
              title: 'Button Link',
              type: 'url',
              validation: (Rule) =>
                Rule.uri({
                  scheme: ['http', 'https', 'mailto', 'tel'],
                }),
            }),
          ],
        }),
      ],
    }),
  ],
})