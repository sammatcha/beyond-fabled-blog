import { Post } from "../../../payload-types";
import Image from "next/image";
import Link from "next/link";
import dateFormat from "../components/dateFormat";

interface PostListPage{
    posts: Post[];
    filterBy: string;
}
//LIST OF POSTS / PAGE
export default function PostList({posts, filterBy}: PostListPage) 
{
const filteredPosts = filterBy
? posts.filter((post) => post.category === filterBy)
: posts;
// console.log("posts:", posts);

    return(
                <div className="grid grid-cols-1  md:grid-cols-3  grid-rows-1 md:grid-rows-3 gap-6 container 
                mt-2 max-w-sm md:max-w-6xl mx-auto px-4 sm:px-6 pt-15 md:pt-20 ">
                
                        {filteredPosts.map((post) =>  (
                            <Link  key={post.id} href={`/blog/${post.slug}`} className="flex flex-col gap-y-3 ">
                                <div className="border rounded-xl border-warmBeige flex flex-col bg-white shadow-lg 
                                 justify-center items-center hover:opacity-80 h-[200px]  md:h-[250px] overflow-hidden  mx-auto " > 
                                    {post.featureImage && (
                                    <div className="w-full aspect-[4/3] ">
                                        {typeof post.featureImage === 'object' && post.featureImage.url && (
                                        <Image
                                            src={post.featureImage.url}
                                            alt="image"
                                            width={400}
                                            height={200}
                                            className="w-full h-full object-cover"
                                        />
                                        )}
                                    </div>
                                    )}
                                     </div>
                                     {/* Post Content */}
                                 <div className="text-lg md:text-xl lg:text-2xl flex flex-col items-center font-karla">
                                   <h1 className="font-bold font-karla">{post.title}</h1> 
                                   {post.pubDate &&
                                   <p className="text-xs lg:text-sm text-mdCuteBlue ">{dateFormat({date: post.pubDate})}</p>
                                    }
                                </div>
                                 
                            </Link>
            ))}
                </div>
          

        
    )
}

