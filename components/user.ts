import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'authProviderId',
      title: 'Auth Provider ID',
      type: 'string',
      description:
        'The unique ID from the authentication provider (e.g., NextAuth.js, Clerk).',
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hashedPassword',
      title: 'Hashed Password',
      type: 'string',
      description: 'The securely hashed password.',
      readOnly: true,
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      readOnly: true,
    }),
    defineField({
      name: 'questionnaireAnswers',
      title: 'Questionnaire Answers',
      type: 'object',
      fields: [], // This is required for a flexible object type
      description: 'The answers submitted by the user from the questionnaire.',
      readOnly: true,
    }),
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
})