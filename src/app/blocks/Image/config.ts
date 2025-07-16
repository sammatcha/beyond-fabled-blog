import { Block } from "payload";

export const ImageBlock: Block = {
    slug: 'image',
    interfaceName: 'Image',
    labels: {
        singular: 'Image Block',
        plural: 'Image Blocks'
    },
    fields: [
        {
            type: 'upload',
            name: 'image',
            relationTo: 'media',
         
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
            label: 'Banner',
            value: 'banner',
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
        ],
        defaultValue: 'tablet',
      },
    ]
}