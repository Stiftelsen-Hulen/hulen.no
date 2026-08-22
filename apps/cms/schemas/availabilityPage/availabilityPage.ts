import { Rule } from 'sanity'

export default {
  title: 'Tilgjengelighet (Availability)',
  name: 'availabilityPage',
  type: 'document',
  description:
    'Availability page content. Translations are document-level: create one document per language (Norwegian and English).',
  fields: [
    {
      name: 'language',
      type: 'string',
      title: 'Språk (Language)',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'title',
      type: 'string',
      title: 'Tittel (Title)',
      description: 'Page heading shown on the site',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'content',
      type: 'array',
      title: 'Innhold (Content)',
      description: 'Rich text for this language. Render with Portable Text in Next.js.',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'altText',
              type: 'string',
              title: 'Alternativ Tekst (Alt Text)',
              description:
                'Accessibility text describing the image if it is missing or does not render',
            },
          ],
        },
      ],
      validation: (rule: Rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
    },
    prepare({ title, language }: { title?: string; language?: string }) {
      return {
        title: title || 'Tilgjengelighet (Availability)',
        subtitle: language ? language.toUpperCase() : undefined,
      }
    },
  },
}
