import { Media } from "../../../../payload-types";
import Image from "next/image";




type ImageBlockType = {
  image?: Media & {
    displaySize?: 'thumbnail' | 'card' | 'banner' | 'square' | 'tablet' | 'large' | 'wide' | 'full' | null | undefined;
    sizes?: {
      [key: string]: {
        url?: string | null;
        width?: number | null;
        height?: number | null;
      };
    };
  };
};

export default function ImageBlock(props: ImageBlockType) {
     console.log("ImageBlock received image:", props.image);
  
    const image = props.image;
  
    const isMedia = 
    image && typeof image === 'object' && 'url' in image;

    if (!isMedia){
        return null;
    }

    const selectedSize = image?.displaySize ?? "tablet";
    console.log("Selected image size:", selectedSize);
    const imageURL = image?.sizes?.[selectedSize]?.url ?? image?.url;
    const width = image?.sizes?.[selectedSize]?.width ?? 500;
    const height = image?.sizes?.[selectedSize]?.height ?? 500;

    return(
        <div className="img-container"  >
            {imageURL && (
              <div className="img-container object-contain">
                <Image src={imageURL ?? undefined} 
                alt={image?.alt ?? "Image Block"} 
                width={width} height={height} 
                className="object-contain" 
                
                />
              </div>
            )}
         
 
        </div>
    )
}