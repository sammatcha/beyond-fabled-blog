'use client';

import Link from "next/link"
import { useState } from "react"
import { CircleX, Menu } from 'lucide-react';

const links = [
    { id: 0, name: "Books", link: "/books"},
    { id: 1, name: "Games", link: "/games"},
    { id: 2, name: "Home", link: "/", logo: "bf"},
    { id: 3, name: "Travel", link: "/travel"},
    { id: 4, name: "Lifestyle", link: "/lifestyle"},
]
export default function MobileNav(){
    const [isOpen, setIsOpen] = useState(false)

    // function handleClick (){
    //     alert('welcome')
    // }
    const handleOnClick = () => {
       
        setIsOpen(prev =>!prev)
      
    }

   const  filteredLinks = links.filter(link => link.name !== "Home" )
    return(
       
        <nav className="block lg:hidden relative z-20 ">
           
                            {/* x button */}
                        <button onClick={handleOnClick} className="absolute z-50 mt-10 left-0 px-5  cursor-pointer">
                            {isOpen ? (
                                <CircleX className="w-8 text-black "  />  
                            ) : (
                                    
                                < Menu className="w-15 text-black" />
                            )
                        }
                              
                        </button>
                            {/* navigation links */}
                        {isOpen && (
                            <div className="fixed h-full w-full float-right bg-black/20 z-0">  
                            <div className="fixed w-[30vh] max-w-xs bg-[#FDFBF7] z-40 h-screen  space-x-6 pt-10  px-5 shadow-2xl shadow-orange-100">
                                <div className="pt-10">
                                     <Link href={"/"} className="font-caveatBrush text-cuteBlue text-xl border-b hover:text-[#59775C]">Home</Link>
                                </div>
                              
                        {filteredLinks.map((link,id) => (
                        <Link key={id} href={link.link} className="flex flex-col  mt-10 text-cuteBlue font-karla font-bold hover:text-[#93CED6]" > 
                        {link.name}
                        </Link>
                  
                        ))
                    }
                          
                                  </div>
                            </div>
                        )}
                      
                    
               
                   
        </nav>
 
    )
}

