import {defineField, defineType} from 'sanity'
import {UsersIcon} from '@sanity/icons'

export default defineType({
  name: 'joinPreview',
  title: 'Join Preview',
  type: 'document',
  icon: UsersIcon,
  fieldsets: [
    {name: 'secondaryActions', title: 'Secondary Actions'},
  ],
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'The main title for the join section.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description to display above the form.',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'The text for the submit button.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'textBelowButton',
      title: 'Text Below Button',
      type: 'text',
      description: 'Optional text to display between the main button and the secondary buttons.',
      fieldset: 'secondaryActions',
    }),
    defineField({
      name: 'signUpButtonText',
      title: 'Sign Up Button Text',
      type: 'string',
      fieldset: 'secondaryActions',
    }),
    defineField({
      name: 'signUpButtonLink',
      title: 'Sign Up Button Link',
      type: 'string',
      fieldset: 'secondaryActions',
    }),
    defineField({
      name: 'loginButtonText',
      title: 'Login Button Text',
      type: 'string',
      fieldset: 'secondaryActions',
    }),
    defineField({
      name: 'loginButtonLink',
      title: 'Login Button Link',
      type: 'string',
      fieldset: 'secondaryActions',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})