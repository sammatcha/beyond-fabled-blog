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
            name: 'layout',
            type: 'select',
            options: [
            {label: 'Grid' , value: 'grid'},
            {label: 'Slider' , value: 'slider'}
            ],
        defaultValue: 'grid'
        },
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
            name: 'layoutSize',
            type: 'select',
            options: [
            {
            label: 'Square',
            value: 'square',
            },
            {
            label: 'Wide',
            value: 'wide',
            },
            {
            label: 'Tall',
            value: 'tall',
            },
            {
            label: 'Full',
            value: 'full',
            },
            ],
            defaultValue: 'square'
        },
       {
        name: 'caption',
        type: 'text',
        },
        ]

    }
    ]
}