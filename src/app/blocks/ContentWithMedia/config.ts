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
import { Block } from "payload";

export const ContentWithMediaBlock: Block = {
    slug: 'contentWithMedia',  // required - how to render in front end
    interfaceName: 'ContentWithMedia',
    labels: {
        singular: 'Content With Media Block',
        plural: 'Content With Media Blocks'
    },
    fields: [ //required
        {
            name: 'content',
            type: 'richText',
            editor: lexicalEditor({
                    features: ({ defaultFeatures }) => [
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
                            {label: 'Normal', value: 'normal'},
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
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media', // Specify the related collection
        },
        {
            name: 'textPosition',
            type: 'radio',
            options: ['left', 'right']
        },
        {
        name: 'alt',
        type: 'text',
        required: true,
        },
      
    ]
}