import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'postQuestionnairePage',
  title: 'Post-Questionnaire Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'The main heading for the page.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'The text that appears below the heading.',
      type: 'text',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      description: 'The link for the button (e.g., /create-password).',
      type: 'string',
    }),
    defineField({
      name: 'finalDescription',
      title: 'Final Description',
      description: 'The final text that appears below the button.',
      type: 'text',
    }),
    defineField({
      name: 'preCopyMessage',
      title: 'Pre-Copy Message',
      type: 'text',
      description: 'Text displayed directly above the copyable message box.',
    }),
    defineField({
      name: 'copyableMessage',
      title: 'Copyable Message',
      type: 'text',
      description: 'A custom message that users can copy with a button click.',
    }),
    defineField({
      name: 'copyButtonText',
      title: 'Copy Button Text',
      type: 'string',
      description: 'The text for the copy button (e.g., "Copy Message").',
      initialValue: 'Copy Message',
    }),
    defineField({
      name: 'video',
      title: 'Locked Video',
      type: 'mux.video',
      description: 'The video that will be locked until the countdown expires.',
    }),
    defineField({
      name: 'countdownTargetDate',
      title: 'Countdown Target Date',
      type: 'datetime',
      description: 'The date and time when the video should become unlocked.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'videoLockedMessage',
      title: 'Video Locked Message',
      type: 'string',
      description: 'A message to display while the video is locked (e.g., "Your video will unlock in...").',
      initialValue: 'Your video will unlock in:',
    }),
  ],
  preview: {
    select: {title: 'heading'},
  },
})
