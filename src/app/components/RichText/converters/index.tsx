'use client'
import {  SerializedBlockNode } from '@payloadcms/richtext-lexical'
import { JSXConvertersFunction, LinkJSXConverter } from '@payloadcms/richtext-lexical/react'
import { internalDocToHref } from './internalLink'
import { ContentWithMediaBlock } from '@/app/blocks/ContentWithMedia/ContentWithMediaBlock';
import { ContentWithMedia, Image as ImagePayloadType, Text as TextPayloadType } from '../../../../../payload-types';
import ImageBlock from '@/app/blocks/Image/ImageBlock';
import { headingConverter } from './headingConverter';
import { textConverter } from './textConverter';
import TextBlock from '@/app/blocks/Text/TextBlock';
import { listConverter } from './listConverter'


// PRIMARY CONVERTERS


const base = LinkJSXConverter({ internalDocToHref })

export const converters : JSXConvertersFunction = ({ defaultConverters }) => ({
    ...defaultConverters,
    ...base,
    ...headingConverter,
    ...textConverter,
    ...listConverter,

    link: ({ node, nodesToJSX }) => {

      const { url, newTab, rel } = node.fields || {};
      const jsxChildren = nodesToJSX({ nodes: node.children });

      const relSet = new Set (['noopener', 'noreferrer']);
      if (typeof rel === 'string' && rel.trim()){
        const relValue = rel.trim();
        relSet.add(relValue);

        if (relValue === 'sponsored'){
        relSet.add('nofollow');
        }
      }
      const relAttributes = [...relSet];
     

      return (
        <a
          href={url}
          target={newTab ? '_blank' : undefined}
          rel={relAttributes.join(' ')}
          className='underline text-sky-600 hover:text-sky-800'
         
        >
           {jsxChildren}
        </a>
      );
    },

    blocks: {
      contentWithMedia: ({ node }: { node: SerializedBlockNode<ContentWithMedia> }) => (
        <ContentWithMediaBlock {...node.fields} />
      ),
      image: ({ node }: { node: SerializedBlockNode<ImagePayloadType> }) => {
        const image =
          typeof node.fields.image === 'object' && node.fields.image !== null
            ? node.fields.image
            : undefined;
        return <ImageBlock image={image} />;
      },
      text: ({ node }: { node: SerializedBlockNode<TextPayloadType> }) => (
        <TextBlock content={node.fields.content} />
      ),
    }
  }
  

)
