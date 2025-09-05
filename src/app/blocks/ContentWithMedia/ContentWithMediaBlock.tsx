import type {ContentWithMedia } from "../../../../payload-types";
import Image from "next/image";
import { RichText } from "@/app/components/RichText/RichText";



export function ContentWithMediaBlock(props: ContentWithMedia) {

    const image = props.image && typeof props.image === 'object' ? props.image : null ;
    const selectedSize = image?.displaySize ?? "tablet";
    const imageURL = image?.sizes?.[selectedSize]?.url ?? image?.url;
    const width = image?.sizes?.[selectedSize]?.width ?? 500;
    const height = image?.sizes?.[selectedSize]?.height ?? 500;

   if (props.textPosition === 'left') {
        return(
           <section>
          
            {props.content && <RichText data={props.content!}/>}  
            {image && 
            <div className="img-container object-contain">
            <Image src={imageURL || ""} alt={image.alt || ""} width={width || 360} height={height || 360}/>
            </div>
            }
           </section>
          
        )

   } else if (props.textPosition === 'right') {
        return(
            <section>
               {props.content && <RichText data={props.content!}/>}   
               {image && 
                <div className="img-container object-contain">
                    <Image src={imageURL || ""} alt={image.alt || ""} width={width || 360} height={height || 360}/>
               </div>
               }
            </section>
        )
   }

}
