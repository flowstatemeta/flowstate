import {defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons'

export default defineType({
  name: 'footer',
  title: 'Footer Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'mainTitle',
      title: 'Main Title',
      type: 'string',
      description: 'A large title displayed at the top of the footer.',
    }),
    defineField({
      name: 'logo',
      title: 'Footer Logo',
      type: 'image',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'A short phrase that appears below the logo.',
    }),
    defineField({
      name: 'linkColumns',
      title: 'Link Columns',
      type: 'array',
      of: [
        defineField({
          name: 'column',
          title: 'Column',
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                defineField({
                  name: 'link',
                  title: 'Link',
                  type: 'object',
                  fields: [
                    defineField({name: 'title', title: 'Title', type: 'string'}),
                    defineField({name: 'url', title: 'URL', type: 'string'}),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.max(4),
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
              options: {
                list: ['Twitter', 'Facebook', 'Instagram', 'LinkedIn', 'YouTube', 'TikTok'],
              },
            }),
            defineField({name: 'url', title: 'URL', type: 'string'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'securityNotice',
      title: 'Security Notice',
      type: 'string',
      description: 'A short notice about security, e.g., "All transactions are secure and encrypted."',
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      initialValue: 'FlowState Meta. All rights reserved.',
    }),
    defineField({
      name: 'privacyPolicyText',
      title: 'Privacy Policy Text',
      type: 'string',
    }),
    defineField({
      name: 'privacyPolicyLink',
      title: 'Privacy Policy Link',
      type: 'string',
      initialValue: '/privacy',
    }),
    defineField({
      name: 'termsOfServiceText',
      title: 'Terms of Service Text',
      type: 'string',
      initialValue: 'Terms of Service',
    }),
    defineField({
      name: 'termsOfServiceLink',
      title: 'Terms of Service Link',
      type: 'string',
      initialValue: '/terms',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Footer Settings'}
    },
  },
})