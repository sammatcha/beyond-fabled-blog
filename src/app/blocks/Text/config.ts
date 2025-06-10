import { Block } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";


export const TextBlock: Block = {
slug: 'text',
interfaceName: 'Text',
labels: {
    singular: 'Text Block',
    plural: 'Text Blocks'
},
fields: [
    {
        name: 'content',
        type: 'richText',
        editor: lexicalEditor(),
        required: true
    },
]
}

