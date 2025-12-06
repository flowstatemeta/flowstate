import {defineField, defineType} from 'sanity'
import {ClockIcon} from '@sanity/icons'

export default defineType({
  name: 'countdown',
  title: 'Countdown Timer',
  type: 'document',
  icon: ClockIcon,
  fieldsets: [
    {name: 'videoSection', title: 'Video Section'},
    {name: 'referral', title: 'Referral Section'},
  ],
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'The main title for the countdown section.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description to display below the heading.',
    }),
    defineField({
      name: 'targetDate',
      title: 'Target Date and Time',
      type: 'datetime',
      description: 'The date and time the countdown should end.',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
      },
    }),
    defineField({
      name: 'expiredMessage',
      title: 'Expired Message',
      type: 'string',
      description: 'Optional: A message to display after the countdown finishes.',
    }),
    defineField({
      name: 'videoHeading',
      title: 'Video Heading',
      type: 'string',
      description: 'A heading for the video section.',
      fieldset: 'videoSection',
    }),
    defineField({
      name: 'videoDescription',
      title: 'Video Description',
      type: 'text',
      description: 'A description to display below the video heading.',
      fieldset: 'videoSection',
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'mux.video',
      fieldset: 'videoSection',
    }),
    defineField({
      name: 'referralDescription',
      title: 'Referral Description',
      description: 'Text to display above the referral code input (e.g., "Have a referral code?").',
      type: 'text',
      fieldset: 'referral',
    }),
    defineField({
      name: 'referralInputPlaceholder',
      title: 'Referral Input Placeholder',
      description: 'Placeholder text for the referral code input field.',
      type: 'string',
      fieldset: 'referral',
    }),
    defineField({
      name: 'referralButtonText',
      title: 'Referral Button Text',
      description: 'Text for the referral submission button.',
      type: 'string',
      fieldset: 'referral',
    }),
  ],
})