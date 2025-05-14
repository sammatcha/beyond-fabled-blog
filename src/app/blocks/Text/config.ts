import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { Block } from "payload";

export const Text: Block = {
slug: 'text',
interfaceName: 'Text',
labels: {
    singular: 'Text Block',
    plural: 'Text Blocks'
},
fields: [
    {
        type: 'richText',
        name: 'text',
        editor: lexicalEditor(),
    }
]
}
