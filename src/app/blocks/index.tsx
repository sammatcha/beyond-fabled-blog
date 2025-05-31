import TextBlock from './Text/TextBlock';
// import ContentWithMediaBlock from './ContentWithMedia/ContentWithMediaBlock';
import ImageBlock from './Image/ImageBlock';
import { ContentWithMediaBlock } from './ContentWithMedia/ContentWithMediaBlock';
import { Post } from '../../../payload-types';
import { block } from 'sharp';

const blockComponents = {
  contentWithMedia: ContentWithMediaBlock,
  text: TextBlock,
  image: ImageBlock,
}

export default function RenderBlocks({blocks}: { blocks?: Post['blocks'] | null }) {
  if (!blocks) return null;
  return (
    <>
      {blocks?.map((block) => {
        switch (block.blockType) {
        case 'contentWithMedia':
          return(
            <ContentWithMediaBlock key={block.id} {...block} />
          )
        case 'text':
          return (
            <TextBlock key={block.id}  {...block} />
          );
        case 'image':
          return (
            <ImageBlock key={block.id} image={block.image} />
          );
        default:
return null;     
        }
      })}
    </>
  );
}
