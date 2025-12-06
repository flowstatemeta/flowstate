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
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true,
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'authProviderId',
      title: 'Auth Provider ID',
      type: 'string',
      description:
        'The unique ID from the authentication provider (e.g., NextAuth.js, Clerk).',
      validation: (Rule) => Rule.required(),
      readOnly: true,
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
      type: 'text',
      description: 'The answers submitted by the user from the questionnaire.',
      readOnly: true,
    }),
    defineField({
      name: 'package',
      title: 'Purchased Package',
      type: 'string',
      options: {
        list: [
          {title: 'Standard ($1700)', value: 'standard'},
          {title: 'Premium ($2500)', value: 'premium'},
        ],
        layout: 'radio',
      },
      description:
        'The package level purchased by the user. Premium users can post to the marketplace.',
      // You can set a default value if most users are on a standard plan
      // initialValue: 'standard',
    }),
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
})