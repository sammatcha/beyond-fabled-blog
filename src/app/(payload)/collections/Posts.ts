import { CollectionConfig } from "payload";
import { ContentWithMediaBlock } from "../../blocks/ContentWithMedia/config";
import { ImageBlock } from "../../blocks/Image/config";
import { TextBlock } from "../../blocks/Text/config";
import slugify from "slugify";
// import { Content } from "next/font/google";
export const Posts : CollectionConfig = {
    slug: 'posts',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
          {
            name: 'pubDate',
            type: 'date',
            required: true,
        },
        {
          name: 'featureImage',
          type: 'upload',
          relationTo: 'media',
          required: false
        },
        {
            name: 'blocks',
            type: 'blocks',
            blocks: [ContentWithMediaBlock, TextBlock, ImageBlock],
        },
        {
          name: 'category',
          type: 'select',
          options: [
          'Books', 'Games', 'Travel', 'Lifestyle'
          ],
          required: true,
        },
        {
          name: 'keywords',
          type: 'array',
          fields: [
            {
              name: 'tag',
              type: 'text'
            }
          ]
        },
        {
          name: 'gallery',
          type: 'array',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              hasMany: true
            }
          ]

        },
       
        {
            name: 'slug',
            type: 'text',
            unique: true,
            hooks: {
              beforeValidate: [
                ({ data }) => {
                  console.log('BEFORE VALIDATE: Data before saving post:', data) // Debugging
      
                  if (data && data?.title && !data?.slug) {
                    data.slug = slugify(data.title, {lower: true, strict: true}) //
                
                  }
                 
                  console.log('Generated slug:', data && data.slug) // Check if slug is created
                  return data && data.slug // Return the data
                 
                },
              ],
             
             
            },
          },
    ],
      versions: {
        drafts: {
      autosave: 
      {
      interval: 100, // We set this interval for optimal live preview
    },
    schedulePublish: true,
  },
  maxPerDoc: 50,
    },
}


