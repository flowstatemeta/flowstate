import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'marketplaceItem',
  title: 'Marketplace Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      validation: (Rule) => Rule.min(1).required(),
    }),
    defineField({
      name: 'seller',
      title: 'Seller',
      type: 'reference',
      to: {type: 'user'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['active', 'sold'],
        layout: 'radio',
      },
      initialValue: 'active',
    }),
    defineField({
      name: 'isVerified',
      title: 'Verified Post',
      type: 'boolean',
      description: 'DEPRECATED: Verification is now derived directly from the Seller\'s premium status.',
      initialValue: false,
      readOnly: true, // Lock this so it is not manually set incorrectly
    }),
  ],
  preview: {
    select: {
      title: 'title',
      seller: 'seller.name',
      media: 'images.0.asset',
    },
    prepare({title, seller, media}) {
      return {title, subtitle: seller ? `by ${seller}` : 'No seller', media}
    },
  },
})