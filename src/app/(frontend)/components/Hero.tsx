
import Image from 'next/image';

export default function Hero(){
     return(
      //outer container - centers rectangle
        <div className="flex items-center justify-center min-w-full h-screen  overflow-y-hidden "> 
        <div className='relative w-[80vw] max-w-[2200px] 
        h-[70vh] 
        bg-white rounded-lg shadow-lg  overflow-y-hidden flex items-center justify-center      '>
           
      
      <Image  
      src = {"/image/bubblex4.png"}
      alt="background image"
      width={1800}
      height={1800}
      className={"object-cover w-full h-full"}
      priority
      />


  </div>
      </div>

  )

}

// h-[30vh] md:h-[70vh] sm:min-h-[100px]

// h-[calc(100vh-100px)