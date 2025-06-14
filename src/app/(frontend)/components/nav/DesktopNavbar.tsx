import Link from "next/link"

const links = [
    { id: 0, name: "Books", link: "/books"},
    { id: 1, name: "Games", link: "/games"},
    { id: 2, name: "Home", link: "/", logo: "bf"},
    { id: 3, name: "Travel", link: "/travel"},
    { id: 4, name: "Lifestyle", link: "/lifestyle"},
]
export default function Navbar(){
    
    return(
        
        <nav className="container relative bg-warmBeige min-w-full hidden lg:block">
           
      <div className=" items-center justify-center flex w-full "> 
           {links.map((link)=> (
            <Link key={link.id}
            href={link.link}
            className={`text-cuteBlue mx-8 mt-8  mb-3 hover:text-lightCuteBlue hover:opacity-85  ${link.logo ? 'font-caveatBrush sm:text-3xl lg:text-4xl hover:text-sageGreen disabled:opacity-75': "font-julius font-bold sm:text-lg md:text-md lg:text-xl"}`}>{link.logo ?? link.name} 
            </Link>
           ))}

        </div>
        <div className="bottom-0 h-[3px]  mx-auto w-3xs  bg-stone-500 hidden lg:block border-b"></div>
    </nav>
    )
}