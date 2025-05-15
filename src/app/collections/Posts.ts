import { CollectionConfig } from "payload";

import { ContentWithMedia } from "../(frontend)/components/blocks/ContentWithMedia/config";
import { Image } from "../(frontend)/components/blocks/Image/config";
import { Text } from "../(frontend)/components/blocks/Text/config";
import slugify from "slugify";
export const Posts : CollectionConfig = {
    slug: 'posts',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'blocks',
            type: 'blocks',
            blocks: [ContentWithMedia, Image, Text],
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
    ]
}

