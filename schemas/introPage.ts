import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'introPage',
  title: 'Intro Page',
  type: 'document',
  // This fieldset will group the button fields together for better organization in the Studio
  fieldsets: [{name: 'callToAction', title: 'Call to Action Button'}],
  fields: [
    defineField({
      name: 'heading',
      title: 'Main Heading',
      description: 'The large text in the top-center of the page.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading2',
      title: 'Secondary Heading (Center)',
      description: 'The text that appears in the center of the page, below the main heading.',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Rotating Descriptions',
      description: 'Add multiple messages to cycle through on the landing page.',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true, // This allows you to define a focal point for the image
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Top Right Logo',
      description: 'The logo image for the top-right corner.',
      type: 'image',
    }),
    defineField({
      name: 'logoTopLeft',
      title: 'Top Left Logo',
      description: 'The logo image for the top-left corner.',
      type: 'image',
    }),
    // --- Call to Action Button Fields ---
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      fieldset: 'callToAction', // Assigns this field to the 'callToAction' fieldset
      initialValue: 'Enter Site',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'backgroundImage',
    },
  },
})