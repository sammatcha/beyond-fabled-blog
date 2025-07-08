import { JSXConverters } from '@payloadcms/richtext-lexical/react'

import type {
    SerializedListNode,
    SerializedListItemNode,
} from '@payloadcms/richtext-lexical'

export const listConverter: JSXConverters<SerializedListNode | SerializedListItemNode> = {
    list: ({ node, nodesToJSX }) => {
        const jsxChildren = nodesToJSX({ nodes: node.children });
        const Tag = node.listType === 'number' ? 'ol' : 'ul';
        const className = Tag ===  'ol' ? 'list-decimal ml-4 list-inside': 'list-disc ml-4 list-inside';
        return <Tag className={className}>{jsxChildren}</Tag>;
    },
    listItem: ({ node, nodesToJSX }) => {
        const jsxChildren = nodesToJSX({ nodes: node.children });
        return <li className='ml-4'>{jsxChildren}</li>;
    },
}