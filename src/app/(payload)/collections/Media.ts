import { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
    slug: 'media',
  
    access: {
      read: () => true,
    },
    upload: {
      staticDir: 'media',
      mimeTypes: ['image/*'],
      imageSizes: [
        {
          name: 'thumbnail',
          width: 200,
          height: 200, // square thumbnail
          position: 'centre',
        
        },
        {
          name: 'square',
          width: 400,
          height: 400, // square thumbnail
          position: 'centre',
        },
        {
          name: 'card',
          width: 768,
          height: undefined,
        
        },
        {
          name: 'tablet',
          width: 1024,
          // By specifying `undefined` or leaving a height undefined,
          // the image will be sized to a certain width,
          // but it will retain its original aspect ratio
          // and calculate a height automatically.
          height: undefined,
          position: 'centre',
        },
        {
          //full width image
          name: 'large',
          width: 1300,
          height: undefined,
          position: 'centre',
        },
        {
          name: 'wide',
          width: 1200,
          height: 600,
          position: 'centre',
        },
        {
          name: 'full',
          width: 1920,
          height: undefined,
          position: 'centre',
        },
      ],
      crop: false,
      focalPoint: false,
    },
    fields: [
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
    ],
  }
  