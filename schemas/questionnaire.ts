import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'questionnaire',
  title: 'Sign-Up Questionnaire',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'An internal title for this questionnaire (e.g., "V1 Sign-Up Flow").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pages',
      title: 'Pages',
      type: 'array',
      description: 'Add and order the pages for the sign-up flow.',
      of: [
        {type: 'namePage', title: 'Name Page'},
        {type: 'numberPage', title: 'Number Page'},
        {type: 'questionPage', title: 'Question Page'},
      ],
    }),
  ],
})