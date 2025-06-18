import { lexicalEditor } from "@payloadcms/richtext-lexical";
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
            editor: lexicalEditor(),
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
      {
        name: 'displaySize',
        type: 'select',
        options: [
          {
            label: 'Thumbnail',
            value: 'thumbnail',
          },
         {
            label: 'Card',
            value: 'card',
          },
          {
            label: 'Square',
            value: 'square',
          },
         
          {
            label: 'Tablet',
            value: 'tablet',
          },
          {
            label: 'Large',
            value: 'large',
          },
          {
            label: 'Wide',
            value: 'wide',
          }, 
          {
            label: 'Full',
            value: 'full',
          },
        ],
        defaultValue: 'tablet',
      },
    ]
}