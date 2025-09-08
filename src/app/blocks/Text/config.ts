import { Block } from 'payload'
import {
  lexicalEditor,
  FixedToolbarFeature,
  TextStateFeature,
  defaultColors,
  HeadingFeature,
  UnorderedListFeature,
  OrderedListFeature,
  ChecklistFeature,
  LinkFeature,
} from '@payloadcms/richtext-lexical'

export const TextBlock: Block = {
  slug: 'text',
  interfaceName: 'Text',
  labels: {
    singular: 'Text Block',
    plural: 'Text Blocks',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({defaultFeatures }) => [
            ...defaultFeatures,
          FixedToolbarFeature(),
          HeadingFeature(),
          UnorderedListFeature(),
          OrderedListFeature(),
          ChecklistFeature(),
          LinkFeature({
            fields: ({defaultFields}) => [
              ...defaultFields,
              {
                name: 'rel',
                type:'select',
                options: [
                  {label: 'Special', value: 'special'},
                  {label: 'Sensitive', value: 'sensitive'},
                ]
              },
            ],
          }),
          TextStateFeature({
            state: {
              color: {
                ...defaultColors.text,
              },
              background: {
                ...defaultColors.background,
              },
              size: {
                large: {
                  label: 'Large Text',
                  css: {
                    'font-size': 'large',
                  },
                },
              },
              fontWeight: {
                bolder: {
                  label: 'Bolder',
                  css: {
                    'font-weight': 'bolder',
                  },
                },
              },
              underline: {
                solid: {
                  label: 'Solid',
                  css: {
                    'text-decoration': 'underline',
                    'text-underline-offset': '4px',
                  },
                },
                dashed: {
                  label: 'Dashed',
                  css: {
                    'text-decoration': 'underline dashed',
                    'text-underline-offset': '4px',
                  },
                },
                'red-line-through': {
                  label: 'Red Line Through',
                  css: {
                    'text-decoration': 'line-through',
                    'text-decoration-style': 'dotted',
                    'text-decoration-color': 'red',
                  },
                },
              },
            },
          }),
        ],
      }),
    },
  ],
}



