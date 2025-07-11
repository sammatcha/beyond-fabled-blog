'use client'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import { JSXConvertersFunction, LinkJSXConverter } from '@payloadcms/richtext-lexical/react'
import { internalDocToHref } from './internalLink'
import { ContentWithMediaBlock } from '@/app/blocks/ContentWithMedia/ContentWithMediaBlock';
import { ContentWithMedia, Image as ImageBlockType } from '../../../../../payload-types';
import ImageBlock from '@/app/blocks/Image/ImageBlock';
import { headingConverter } from './headingConverter';
import { textConverter } from './textConverter';
import TextBlock from '@/app/blocks/Text/TextBlock';
import { listConverter } from './listConverter'

// primary converter

// type ImageProps = {
//   image: {
//     url?: string;
//     alt?: string;
//   }
// }

type TextProps = {
  content: SerializedEditorState
}

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<ImageBlockType> | SerializedBlockNode<TextProps> | SerializedBlockNode<ContentWithMedia>;

// type BlockNode<T> = {
//   fields: T;
// }

export const jsxConverter: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  ...headingConverter,
  ...textConverter,
  ...listConverter,


  blocks: {
      contentWithMedia: ({ node }: { node: SerializedBlockNode<ContentWithMedia> }) => (
      <ContentWithMediaBlock {...node.fields} />
    ),
    image: ({ node }: { node: SerializedBlockNode<ImageBlockType> }) => {
      console.log("Converter received node.fields.image:", node.fields.image);
      const image =
        typeof node.fields.image === 'object' && node.fields.image !== null
          ? node.fields.image
          : undefined;
           console.log("Parsed image to pass to ImageBlock:", image);
      return <ImageBlock image={image} />;
    },
    text: ({ node }: { node: SerializedBlockNode<TextProps> }) => (
    <TextBlock {...node.fields} />),

}

});