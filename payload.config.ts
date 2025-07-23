import path from 'path'
import sharp from 'sharp'
import {  lexicalEditor} from '@payloadcms/richtext-lexical'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload'
import { Media } from '@/app/(payload)/collections/Media'
import { Users } from '@/app/(payload)/collections/Users'
import { Posts } from '@/app/(payload)/collections/Posts'
import { fileURLToPath } from 'url';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default buildConfig({
  admin: {
    livePreview: {
      url: ({ data }: { data: { slug?: string } }): string => {
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
    plugins: [
    vercelBlobStorage({
      enabled: true, // Optional, defaults to true
      // Specify which collections should use Vercel Blob
      collections: {
        media: true,
        
      },
      clientUploads: true, // Optional, defaults to true
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
	typescript: {
    outputFile: path.resolve(__dirname, './payload-types.ts'),
  },
  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || '',
  
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
})

