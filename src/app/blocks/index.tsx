import TextBlock from './Text/TextBlock';
// import ContentWithMediaBlock from './ContentWithMedia/ContentWithMediaBlock';
import ImageBlock from './Image/ImageBlock';
import { ContentWithMediaBlock } from './ContentWithMedia/ContentWithMediaBlock';
import { Post } from '../../../payload-types';



export default function RenderBlocks({blocks}: { blocks?: Post['blocks'] | null }) {
  if (!blocks) return null;
  return (
    <>
      {blocks?.map((block) => {
        //  console.log("RenderBlocks blockType:", block.blockType);
        switch (block.blockType) {
        case 'contentWithMedia':
          
          return(
            <ContentWithMediaBlock key={block.id} {...block} />
            
          )
        case 'text':
          if (block.content) {}
          return (
            <TextBlock key={block.id} content = {block.content || null}  />
          );
        
        case 'image':
        
          return (
            typeof block.image === 'object' && block.image !== null
              ? <ImageBlock key={block.id} image={block.image}  /> 
              : null
          );
        default:
return null;     
        }
      })}
    </>
  );
}

