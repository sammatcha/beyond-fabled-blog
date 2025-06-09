import React from "react"
import { Media } from "../../../../payload-types";


type ImageBlockProps = {
  image: Media | null | undefined;
};

export default function ImageBlock(props:ImageBlockProps) {
  
   console.log("Image block:", props);

    const selectedSize = props?.image?.displaySize ?? "tablet";
    console.log("Selected Size:", selectedSize);
    const imageURL = props?.image?.sizes?.[selectedSize]?.url ?? props?.image?.url;
    const width = props?.image?.sizes?.[selectedSize]?.width ?? 500;
    const height = props?.image?.sizes?.[selectedSize]?.height ?? 500;
    return(
        <div className="min-w-width">
          
            <>
            {props?.image?.url && (
                <img src={imageURL ?? undefined} alt={props.image?.alt ?? "Image Block"} width={width} height={height} className="w-full max-w-[768px] h-auto mx-auto object-contain" />
            )}
            </>
 
        </div>
    )
}