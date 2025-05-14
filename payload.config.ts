import sharp from 'sharp'
import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload'
import { Media } from '@/app/collections/Media'
import { Users } from '@/app/collections/Users'
import { Posts } from '@/app/collections/Posts'
import {Text} from '@/app/blocks/Text/config'
import { Image } from '@/app/blocks/Image/config'

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  blocks: [
    {slug: 'textBlock',
      labels: {
        singular: 'Text Block',
        plural: 'Text Blocks'
      },
      fields: [
        {name: 'text',
          type: 'richText',
          editor: lexicalEditor({
            features: [
              BlocksFeature({
                blocks: [Text, Image],
              }),
            ]
          }),
        }
      ]
    }
  ],
  // Define and configure your collections in this array
  collections: [
    Media,
    Users,
    Posts
  ],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || '',
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
})

