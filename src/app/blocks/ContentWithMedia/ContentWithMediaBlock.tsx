import type {ContentWithMedia } from "../../../../payload-types";
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html';
import Image from "next/image";
// import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';



export function ContentWithMediaBlock(props: ContentWithMedia) {
    const html = props.content ? convertLexicalToHTML({data:props.content}) : '';
    const image = props.image && typeof props.image === 'object' ? props.image : null ;
    // console.log("ContentWithMediaBlock props", props);
  
    const selectedSize = image?.displaySize ?? "tablet";
    console.log("Selected Size:", selectedSize);
    const imageURL = image?.sizes?.[selectedSize]?.url ?? image?.url;
    console.log("imageURL", imageURL)
    console.log("image.sizes:", image?.sizes);
    const width = image?.sizes?.[selectedSize]?.width ?? 500;
    const height = image?.sizes?.[selectedSize]?.height ?? 500;

   if (props.textPosition === 'left') {
        return(
            <section>
            {props.content && <div dangerouslySetInnerHTML={{__html: html}}/>}  
            {image && 
            (<Image src={imageURL || ""} alt={image.alt || ""} width={width || 360} height={height || 360}/>)
            }
            </section>
        )

   } else if (props.textPosition === 'right') {
        return(
             <section>
            {props.content && <div dangerouslySetInnerHTML={{__html: html}}/>}  
            {image && 
            (<Image src={imageURL || ""} alt={image.alt || ""} width={width || 360} height={height || 360}/>)
            }
            </section>
        )
   }

}
