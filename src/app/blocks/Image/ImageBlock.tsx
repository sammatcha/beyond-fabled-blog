import { Media } from "../../../../payload-types";
import Image from "next/image";


type ImageBlockProps = {
  image:string | Media | null | undefined;
};

export default function ImageBlock(props:ImageBlockProps) {
  
    const image = props.image;
  
    const isMedia = 
    image && typeof image === 'object' && 'url' in image;

    if (!isMedia){
        return null;
    }

    const selectedSize = image?.displaySize ?? "tablet";
    const imageURL = image?.sizes?.[selectedSize]?.url ?? image?.url;
    const width = image?.sizes?.[selectedSize]?.width ?? 500;
    const height = image?.sizes?.[selectedSize]?.height ?? 500;

    return(
        <div>
            {imageURL && (
                <Image src={imageURL ?? undefined} 
                alt={image?.alt ?? "Image Block"} 
                width={width} height={height} 
                className=" h-auto mx-auto object-contain" 
                
                />
            )}
         
 
        </div>
    )
}