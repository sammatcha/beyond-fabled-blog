'use client'
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Gallery as GalleryPayloadType } from "../../../../payload-types";
import Image from "next/image";
import { useState } from "react";
import { mapLayout } from "@/app/components/gallery/layoutMap";

export default function GalleryBlock(props: {images: GalleryPayloadType['images'] , layout?: 'grid' | 'slider' | null}) {
    const {images, layout} = props;

    //slider implementation

    //use state for current index
   const [currentIndex, setCurrentIndex] = useState(0);

   //total image
   const totalImage = images.length

   //next and prev
    const nextImage = () => {
      setCurrentIndex((prev) => {
        if (prev === totalImage-1){
            return prev
        }else{
            return prev + 1
        }
      })
    }
        
  
    const prevImage = () => {
        setCurrentIndex ((prev) => {
        if (prev === 0 ){
            return prev
        }else{
            return prev-1
        }
    })
    }
 

    if (layout === 'slider'){
        return (
        
        <div className="flex flex-col px-4 py-4 w-full max-w-3xl lg:max-w-4xl mx-auto container relative ">
            <div className="border-2 bg-neutral-100 border-gray-500 shadow-xl h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px] rounded-xl flex flex-col overflow-hidden">
                <div className="flex flex-1 justify-center items-center ">
                {images[currentIndex] && typeof images[currentIndex].image === 'object' && (

                             <div className="transition duration-300 ease-in-out relative flex h-full w-full">
                                <Image src={images[currentIndex].image?.url || ''}
                                 alt={images[currentIndex].image?.alt || ''} 
                                 fill
                                 className="object-contain  "/>
                            </div>
                )}
                </div>
                <div className="flex justify-center items-center bottom-2 lg:bottom-3 left-0 right-0 my-3 gap-4">
                        <button onClick={prevImage} className={`cursor-pointer ${currentIndex === 0 ? 'opacity-50 ': 'opacity-100'}`}> 
                            <ArrowLeft/>
                        
                        </button>
                        <button onClick={nextImage} className={`cursor-pointer ${currentIndex === totalImage -1 ? "opacity-50": "opacity-100"}`}>
                            <ArrowRight/>
                        </button>
                </div>
            </div>
            
        </div>
      
    )
    } 
    if (layout === 'grid'){
        return(
                <div className="grid grid-cols-2 md:grid-cols-3 w-full max-w-3xl lg:max-w-4xl mx-auto gap-3">
                    {images.map((item, index) => {
                        const {item:itemCls, ratio} = mapLayout(item.layoutSize || 'square')
                     return(
                    <div key={item.id} className={`flex flex-col ${itemCls}`}>
                        <div className={`relative w-full aspect-square overflow-hidden ${ratio}`}>
                            {item.image && typeof item.image === "object" && (
                            <Image
                            src={item.image?.url || ''}
                            alt={item.image?.alt || 'Image'}
                            fill
                            className="object-cover"
                        />
                        )}
                       </div>
                        {item.caption && 
                        <p className="text-center text-sm text-gray-700">{item.caption}</p>
                        }
                    
                     
                    </div>
                     )
                })}
             </div>
                    
        )
    }
    // return <div>Error: Layout "{layout}" is not supported</div>

}