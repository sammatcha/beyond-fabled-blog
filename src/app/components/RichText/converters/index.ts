import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import { JSXConvertersFunction, LinkJSXConverter } from '@payloadcms/richtext-lexical/react'
import React from 'react';
import { internalDocToHref } from './internalLink'

type ContentWithMediaProps = {
  block: {
    image: {
      url?: string;
      alt?: string;
      caption?: string;
    };
    textPosition?: string;
  }
}

type ImageProps = {
  image: {
    url?: string;
    alt?: string;
  }
}

type TextProps = {
  content: SerializedEditorState
}

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<ImageProps | TextProps | ContentWithMediaProps>

type BlockNode<T> = {
  fields: T;
}

export const jsxConverter: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  blocks: {
    // contentWithMedia: ({ node }: { node: BlockNode<ContentWithMediaProps> }) => React.createElement(ContentWithMediaBlock, node.fields),
    image: ({ node }: { node: BlockNode<ImageProps> }) => React.createElement('img', { src: node.fields.image?.url, alt: node.fields.image?.alt ?? '' }),
    text: ({ node }: { node: BlockNode<TextProps> }) => React.createElement('div', { dangerouslySetInnerHTML: { __html: node.fields.content } }),
  },
})