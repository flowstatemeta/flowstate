import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export default defineType({
  name: 'officialRegisterPage',
  title: 'Official Register Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'The main heading for the registration page.',
    }),
    defineField({
      name: 'passwordWarning',
      title: 'Password Warning',
      type: 'text',
      description:
        'A warning message displayed near the password field to guide users (e.g., "Password must be at least 8 characters long").',
    }),
    // You can add other fields for this page here
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})