import type {ContentWithMedia } from "../../../../payload-types";
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html';
import Image from "next/image";
// import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';

// type Props = {
//     className?: string;
// } & ContentWithMediaProps;

export function ContentWithMediaBlock(props: ContentWithMedia) {
    const html = props.content ? convertLexicalToHTML({data:props.content}) : '';
    console.log("ContentWithMediaBlock html", html);
    console.log("ContentWithMediaBlock props", props);

   if (props.textPosition === 'left') {
        return(
            <section>
            {props.content && <div dangerouslySetInnerHTML={{__html: html}}/>}  
            {props.image && typeof props.image === 'object' && <Image src={props.image.url || ""} alt={props.image.alt || ""} width={props.image.width || 360} height={props.image.height || 360}/>}
            </section>
        )
   } else if (props.textPosition === 'right') {
        return(
            <section>
            {props.content && <div dangerouslySetInnerHTML={{__html: html}}/>}  
            {props.image && typeof props.image === 'object' && <Image src={props.image.url || ""} alt={props.image.alt || ""} width={props.image.width || 360} height={props.image.height || 360}  />}
           
            </section>
        )
   }

}
