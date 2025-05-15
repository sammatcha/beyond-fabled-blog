import { Block } from "payload";

export const Image: Block = {
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
            relationTo: 'media'
        }
    ]
}