'use client'
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Gallery as GalleryPayloadType } from "../../../../payload-types";
import Image from "next/image";
import { useState } from "react";

export default function GalleryBlock(props: {images: GalleryPayloadType['images']}) {
    const images = props.images;

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

    return (
        <>
        <div className="flex flex-col px-4 py-4 max-w-5xl mx-auto h-screen container relative ">
            <div className="border-2 border-gray-500 shadow-xl h-[300px] md:h-[450px] rounded-xl flex flex-col">
                <div className=" flex flex-1 justify-center items-center ">
                {images[currentIndex] && typeof images[currentIndex].image === 'object' && (

                             <div className="transition duration-300 ease-in-out relative h-full w-full">
                                <Image src={images[currentIndex].image?.url || ''}
                                 alt={images[currentIndex].image?.alt || ''} 
                                 fill
                                 className="object-cover rounded-lg"/>
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
      </>
    )
}