import path from 'path'
import sharp from 'sharp'
import {  lexicalEditor} from '@payloadcms/richtext-lexical'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload'
import { Media } from '@/app/(payload)/collections/Media'
import { Users } from '@/app/(payload)/collections/Users'
import { Posts } from '@/app/(payload)/collections/Posts'
// import {TextBlock} from '@/app/(frontend)/components/blocks/Text/config'
// import { ImageBlock } from '@/app/blocks/Image/config'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default buildConfig({
  admin: {
    livePreview: {
      url: ({data}) => {
        if (!data?.slug) return '/';
        return `/blog/${data.slug}`;
      },
      collections: ['posts'],
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
      ],
    }
  },


  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor({}),

  // Define and configure your collections in this array
  collections: [
    Media,
    Users,
    Posts
  ],
  
	typescript: {
    outputFile: path.resolve(__dirname, './payload-types.ts'),
  },
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

