import { CollectionConfig } from "payload";
import { ContentWithMediaBlock } from "../../blocks/ContentWithMedia/config";
import { ImageBlock } from "../../blocks/Image/config";
import { TextBlock } from "../../blocks/Text/config";
import slugify from "slugify";
import { BlocksFeature, FixedToolbarFeature, LinkFeature, TextStateFeature, defaultColors, lexicalEditor } from "@payloadcms/richtext-lexical";
import axios from "axios";


export const Posts : CollectionConfig = {
    slug: 'posts',
    hooks: {
      afterChange:[
        async ({doc, operation, req}: {doc:any, operation: string, req:any})=> {
          if (operation === 'create' || operation === 'update'){
            if(doc._status === 'published'){
              await axios.post('https://api.vercel.com/v1/integrations/deploy/prj_NcFlS7JP3sZAa9pWTy42VfozmWeb/845h1z8nkG')
               console.log("Post saved:", doc.title, "Operation:", operation);
          }
        }
        console.log("status:", doc._status);
         return doc;
        }
      ]
    },
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
      name: "content",
      type: "richText",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            blocks: [ContentWithMediaBlock, TextBlock, ImageBlock],
          }),
          FixedToolbarFeature(),
          LinkFeature(),
          TextStateFeature({
            state: {
              color: {
                ...defaultColors.text,
              },
              background: {
                ...defaultColors.background
              },
              size: {
                large: {
                  label: "Large Text",
                  css: {
                    "font-size": "large",
                  },
                },
              },
              fontWeight: {
                bolder: {
                  label: "Bolder",
                  css: {
                    "font-weight": "bolder",
                  },
                },
              },
              underline: {
                solid: {
                  label: "Solid",
                  css: {
                    "text-decoration": "underline",
                    "text-underline-offset": "4px",
                  },
                },
                dashed: {
                  label: "Dashed",
                  css: {
                    "text-decoration": "underline dashed",
                    "text-underline-offset": "4px",
                  },
                },
                "red-line-through": {
                  label: "Red Line Through",
                  css: {
                    "text-decoration": "line-through",
                    "text-decoration-style": "dotted",
                    "text-decoration-color": "red",
                  },
                },
              },
            },
          }),
        ],
      }),
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
      schedulePublish: true,
    },
  },
  access: {
    read: () => true,
    update: () => true,
    create: () => true,
  },
}


