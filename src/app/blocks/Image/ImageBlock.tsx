import React from "react"
import { Media } from "../../../../payload-types";
import Image from "next/image";


type ImageBlockProps = {
  image:string | Media | null | undefined;
};

export default function ImageBlock(props:ImageBlockProps) {
  
    const image = props.image;
   console.log("Image block:", props);
    const isMedia = 
    image && typeof image === 'object' && 'url' in image;

    if (!isMedia){
        return null;
    }

    const selectedSize = image?.displaySize ?? "tablet";
    console.log("Selected Size:", selectedSize);
    const imageURL = image?.sizes?.[selectedSize]?.url ?? image?.url;
    const width = image?.sizes?.[selectedSize]?.width ?? 500;
    const height = image?.sizes?.[selectedSize]?.height ?? 500;
    return(
        <div className="min-w-width">
          
            <>
            {imageURL && (
                <Image src={imageURL ?? undefined} alt={image?.alt ?? "Image Block"} width={width} height={height} className="w-full max-w-[768px] h-auto mx-auto object-contain" />
            )}
            </>
 
        </div>
    )
}