
import Image from 'next/image';

export default function Hero(){
     return(
      //outer container - centers rectangle
        <div className="flex items-center justify-center min-w-full h-screen z-20"> 
        <div className='relative w-[80vw] max-w-[2200px] min-w-2xs
        h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] 
        bg-white rounded-lg shadow-lg   flex items-center justify-center      '>
           
      
      <Image  
      src = {"/image/bubblex4.png"}
      alt="background image"
      fill
      className={"object-cover w-full h-full"}
      priority
      />


  </div>
      </div>

  )

}



