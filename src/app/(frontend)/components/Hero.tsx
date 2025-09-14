
import Image from 'next/image';

export default function Hero(){
     return(
        <div className='min-w-full min-h-screen w-full h-full flex justify-center items-center lg:flex-none lg:justify-normal lg:items-start '>
            <div className='flex flex-col md:flex-row w-full justify-center items-center max-w-6xl mx-auto'>
                    {/* wrapper with wash + text */}
                  <div className=' '>
                    <div className='relative w-[55vw] min-w-[350px] max-w-[600px]'>
                        <Image src="/image/hero-bg-wash.png" alt="hero wash" width={600} height={600} unoptimized className="opacity-80 object-cover h-auto "/>
                          <h1 className='absolute inset-0 flex flex-col justify-center items-center font-playfairDisplay text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-wide w-full'>
                           Welcome to
                          <span className='font-styleScript font-bold text-darkSageGreen relative bottom-1 left-0.5 '>Beyond Fabled</span>
                          </h1>
                      </div>
                    
                  </div>
              
              
              <div className=' max-w-full  '>
                <div className='relative  w-[30vw] min-w-[180px] max-w-[400px] '>
                    <Image src="/image/hero-bg-bubble1.png" alt="hero bubbles" width={400} height={400} unoptimized className="object-contain lg:object-cover h-auto "/>

                </div>
              </div>
           
            </div>
        </div>
     )
    }


    // lg:-translate-y-36 translate-x-20

//  w-[70vw] sm:w-72 md:w-96 lg:w-[600px]