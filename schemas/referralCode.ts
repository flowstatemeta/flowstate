import {defineField, defineType} from 'sanity'
import {ReferralExport} from './components/ReferralExport'

export default defineType({
  name: 'referralCode',
  title: 'Referral Code',
  type: 'document',
  fields: [
    defineField({
      name: 'code',
      title: 'Code',
      type: 'string',
      description: 'The unique referral code (e.g., "FRIEND25").',
      validation: (Rule) => Rule.required().uppercase(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'An optional note about who this code is for.',
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Turn this off to disable the code without deleting it.',
      initialValue: true,
    }),
    defineField({
      name: 'pendingCount',
      title: 'Pending Count',
      type: 'number',
      readOnly: true,
      description: 'The number of users who have completed the questionnaire.',
      initialValue: 0,
    }),
    defineField({
      name: 'paidCount',
      title: 'Paid Count',
      type: 'number',
      readOnly: true,
      description: 'The number of users who have become paid customers.',
      initialValue: 0,
    }),
    defineField({
      name: 'pendingUsers',
      title: 'Pending Users',
      type: 'array',
      of: [{type: 'reference', to: {type: 'user'}}],
      readOnly: true,
      description:
        'Users who have completed the questionnaire but have not yet become paid customers.',
    }),
    defineField({
      name: 'paidUsers',
      title: 'Paid Customers',
      type: 'array',
      of: [{type: 'reference', to: {type: 'user'}}],
      readOnly: true,
      description: 'Users who have successfully enrolled and become paid customers.',
    }),
    defineField({
      name: 'exportData',
      title: 'Export Data',
      type: 'string',
      readOnly: true,
      components: {
        input: ReferralExport,
      },
    }),
  ],
  preview: {
    select: {
      title: 'code',
      description: 'description',
      pending: 'pendingCount',
      paid: 'paidCount',
    },
    prepare({title, description, pending, paid}) {
      return {title, subtitle: `${description || ''} | Pending: ${pending || 0}, Paid: ${paid || 0}`}
    },
  },
})