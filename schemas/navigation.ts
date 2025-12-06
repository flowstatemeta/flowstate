import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'The main logo for the navigation bar.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      description: 'The name of the site, displayed next to the logo.',
    }),
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      description: 'List of links to display in the navigation.',
      of: [
        defineField({
          name: 'navLink',
          title: 'Navigation Link',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Link URL',
              type: 'url',
              validation: (Rule) => Rule.uri({allowRelative: true}),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'loginText',
      title: 'Login Text',
      type: 'string',
      description: 'Text for the login button.',
      initialValue: 'Login',
    }),
    defineField({
      name: 'loginLink',
      title: 'Login Link',
      type: 'string',
      initialValue: '/login',
    }),
    defineField({
      name: 'signUpText',
      title: 'Sign Up Text',
      type: 'string',
      description: 'Text for the sign up button.',
      initialValue: 'Sign Up',
    }),
    defineField({
      name: 'signUpLink',
      title: 'Sign Up Link',
      type: 'string',
      initialValue: '/signup',
    }),
    defineField({
      name: 'contactText',
      title: 'Contact Us Text',
      type: 'string',
      description: 'Text for the contact us button.',
      initialValue: 'Contact Us',
    }),
    defineField({
      name: 'contactLink',
      title: 'Contact Us Link',
      type: 'string',
      initialValue: '/join?tab=contact',
    }),
    defineField({
      name: 'hubButtonText',
      title: 'Hub Button Text',
      type: 'string',
      description: 'Text for the animated hub button in the center of the navigation.',
      initialValue: 'Explore The Hub',
    }),
    defineField({
      name: 'hubButtonLink',
      title: 'Hub Button Link',
      type: 'string',
      description: 'Link for the animated hub button.',
      initialValue: '/hub',
    }),
  ],
})