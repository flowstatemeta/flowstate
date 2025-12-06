import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'educationLesson',
  title: 'Education Lesson',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'educationCategory'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'video',
      title: 'Lesson Video',
      type: 'mux.video',
      description: 'The video content for this lesson.',
    }),
    defineField({
      name: 'content',
      title: 'Lesson Content',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Optional text content to appear below the video.',
    }),
  ],
})