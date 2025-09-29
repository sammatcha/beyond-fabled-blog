import { Block } from "payload";

export const GalleryBlock:Block = {
    slug: 'gallery',
    interfaceName: 'Gallery',
    labels: {
        singular: 'Gallery Block',
        plural: 'Gallery Blocks'
    },
    fields: [
        {
        name: 'images',
        type: 'array',
        label: "Images",
        required: true,
        fields: [
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',

        },
       {
        name: 'caption',
        type: 'text',
        },
    ]

    }
    ]
    
    
}