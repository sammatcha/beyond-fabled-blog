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
        <nav className="container relative flex mx-auto items-center justify-center bg-gray-900 min-w-full ">
           {links.map((link)=> (
            <Link key={link.id}
            href={link.link}
            className={`text-neutral-200 mx-8 mt-8 ${link.logo ? 'font-caveatBrush text-4xl': "font-julius font-bold"}`}>{link.logo ?? link.name} 
            </Link>
           )
        )}
        </nav>
    )
}