'use client'
import {  SerializedBlockNode } from '@payloadcms/richtext-lexical'
import { JSXConvertersFunction, LinkJSXConverter } from '@payloadcms/richtext-lexical/react'
import { internalDocToHref } from './internalLink'
import { ContentWithMediaBlock } from '@/app/blocks/ContentWithMedia/ContentWithMediaBlock';
import { ContentWithMedia, Image as ImagePayloadType, Text as TextPayloadType, Gallery as GalleryPayloadType } from '../../../../../payload-types';
import ImageBlock from '@/app/blocks/Image/ImageBlock';
import { headingConverter } from './headingConverter';
import { textConverter } from './textConverter';
import TextBlock from '@/app/blocks/Text/TextBlock';
import { listConverter } from './listConverter'
import GalleryBlock from '@/app/blocks/Gallery/GalleryBlock';


// PRIMARY CONVERTERS


const base = LinkJSXConverter({ internalDocToHref })
type RelType = 'normal' | 'special' | 'sensitive';
const Preset: Record<RelType, string[]> = {
  normal: [],
  special: ['sponsored', 'noreferrer', 'nofollow'],
  sensitive: ['noreferrer'],
}
export const converters : JSXConvertersFunction = ({ defaultConverters }) => ({
    ...defaultConverters,
    ...base,
    ...headingConverter,
    ...textConverter,
    ...listConverter,

    link: ({ node, nodesToJSX }) => {
      const { url, newTab, rel } = node.fields || {};
      const jsxChildren = nodesToJSX({ nodes: node.children });

      // Always start with clean security attributes
      const relSet = new Set(['noopener']);
      
      if (typeof rel === 'string' && rel.trim()) {
        const relValue = rel.trim();
        
        const relType = relValue as RelType;
        if(relType in Preset) {
          Preset[relType].forEach(rel => relSet.add(rel));
          
 
        }
      }
      
      const relAttributes = [...relSet].join(' ');
     
      return (
        <a
          href={url}
          target={newTab ? '_blank' : undefined}
          rel={relAttributes}
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
      gallery: ({ node }: { node: SerializedBlockNode<GalleryPayloadType> }) => (
        <GalleryBlock {...node.fields} />
      ),
    }
  });
