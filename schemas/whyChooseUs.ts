import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'whyChooseUs',
  title: 'Why Choose Us Section',
  type: 'document',
  fieldsets: [{name: 'callToAction', title: 'Call to Action Card'}],
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'The main headline for the section (e.g., "Why Choose Us?").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'The main paragraph of text on the left side.',
    }),
    defineField({
      name: 'features',
      title: 'Features List',
      description: 'List of key benefits or features to display on the right side.',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'callToActionTitle',
      title: 'Card Title',
      type: 'string',
      description: 'The title inside the card on the right, above the button.',
      fieldset: 'callToAction',
    }),
    defineField({
      name: 'callToActionDescription',
      title: 'Card Description',
      type: 'text',
      description: 'A short description inside the card, below the title.',
      fieldset: 'callToAction',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Get Started',
      fieldset: 'callToAction',
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      description: 'The URL the button should link to (e.g., "/contact").',
      type: 'url',
      validation: (Rule) => Rule.uri({allowRelative: true}),
      fieldset: 'callToAction',
    }),
  ],
})