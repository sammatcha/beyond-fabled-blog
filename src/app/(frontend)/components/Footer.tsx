import Image from "next/image";

export default function Footer(){
    return(
        <div className="w-full z-20 bg-warmBeige  ">
            <div className="px-6 justify-between flex items-center ">
                <p className="font-nunito font-medium text-cuteBlue">&copy; Beyond Fabled 2025</p>
                    <div className="cursor-pointer flex ">
                        {/* tiktok */}
                        <a href="https://www.tiktok.com/@beyond.fabled" target="_blank" rel="noopener">
                            <span>
                        <Image src="/image/tt-icon.png" alt="socials tiktok icon" width={40} height={40}/>
                    </span>
                    </a>
                    {/* instagram */}
                     <a href="https://www.instagram.com/beyond.fabled/#" target="_blank" rel="noopener">
                    <span>
                        <Image src="/image/ig-icon.png" alt="socials instagram icon" width={40} height={40}/>
                    </span>
                    </a>
                    {/* youtube */}
                      <a href="https://www.youtube.com/@beyondfable" target="_blank" rel="noopener">
                    <span>
                        <Image src="/image/yt-icon.png" alt="socials youtube icon"  width={40} height={40}/>
                    </span>
                    </a>
                </div>
            </div>

        </div>
    )
}