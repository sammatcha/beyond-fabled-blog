import React from "react"
import { Media } from "../../../../payload-types";

type ImageBlockProps = {
  image?: string | Media | null;
};

export default function ImageBlock({image}: ImageBlockProps) {
   if (!image || typeof image === 'string') return null;
    return(
        <div>
          
            <>
            {image?.url && (
                <img src={image.url} alt={image.alt ?? "Image Block"} className="w-full h-auto" />
            )}
            </>
 
        </div>
    )
}