import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'lessonComment',
  title: 'Lesson Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'lesson',
      title: 'Lesson',
      type: 'reference',
      to: [{type: 'educationLesson'}],
      readOnly: true,
      description: 'The lesson this comment is attached to. Leave blank for a general community comment.',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'user'}],
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'text',
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      description: 'Comments will appear on the site immediately.',
      initialValue: true,
    }),
    defineField({
      name: 'pinned',
      title: 'Pinned',
      type: 'boolean',
      description: 'Pin this comment to the top of the comments section for everyone to see.',
      initialValue: false,
    }),
    defineField({
      name: 'private',
      title: 'Private',
      type: 'boolean',
      description: 'Mark this comment as private. Only you will be able to see it.',
      initialValue: false,
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      description: 'Add keywords to this comment to improve searchability. (Optional)',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
  ],
})