import type {ContentWithMedia } from "../../../../payload-types";
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html';
import { RichText } from '../../components/RichText';
import Image from "next/image";
// import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';

// type Props = {
//     className?: string;
// } & ContentWithMediaProps;

export function ContentWithMediaBlock(block: ContentWithMedia) {
    const content = block.content ? convertLexicalToHTML({data:block.content}) : '';

   if (block.textPosition === 'left') {
        return(
            <section>
            {block.content && <div dangerouslySetInnerHTML={{__html: block.content}}/>}  
            {block.image && typeof block.image === 'object' && <Image src={block.image.url || ""} alt={block.image.alt || ""} />}
            </section>
        )
   } else if (block.textPosition === 'right') {
        return(
            <section>
            {block.content && <div dangerouslySetInnerHTML={{__html: block.content}}/>}  
            {block.image && typeof block.image === 'object' && <Image src={block.image.url || ""} alt={block.image.alt || ""} />}
           
            </section>
        )
   }

}
