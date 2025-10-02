import { Image as ImagePayloadType } from "../../../../payload-types";
import Image from "next/image";



export default function ImageBlock(props: {image: ImagePayloadType['image']}) {
     console.log("ImageBlock received image:", props.image);
  
    const image = props.image;
  
    const isMedia = 
    image && typeof image === 'object' && 'url' in image;

    if (!isMedia){
        return null;
    }

    const selectedSize = image?.displaySize ?? "tablet";
    // console.log("Selected image size:", selectedSize);
    const imageURL = image?.sizes?.[selectedSize]?.url ?? image?.url;
    const width = image?.sizes?.[selectedSize]?.width ?? 500;
    const height = image?.sizes?.[selectedSize]?.height ?? 500;

    return(
        <div className="img-container"  >
            {imageURL && (
              <div className="img-container object-contain">
                <Image src={imageURL ?? undefined} 
                alt={image?.alt ?? "Image"} 
                width={width} height={height} 
                className="object-contain" 
                
                />
              </div>
            )}
         
 
        </div>
    )
}