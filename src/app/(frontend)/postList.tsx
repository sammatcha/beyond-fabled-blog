import { Post } from "../../../payload-types";
import Image from "next/image";
import Link from "next/link";

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
console.log("posts:", posts);
    return(
             <div className="w-full h-screen ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 md:grid-rows-2  gap-6 container mt-2 min-w-2xs max-w-sm md:max-w-4xl lg:max-w-6xl mx-auto  ">
                
                        {filteredPosts.map((post) =>  (
                            <Link  key={post.id} href={`/blog/${post.slug}`} className="flex flex-col gap-y-3 ">
                                <div className="border rounded-xl border-warmBeige flex flex-col bg-white shadow-lg justify-center items-center hover:opacity-80 " > 
                                    {post.featureImage && (
                                    <div className="flex h-[150px] lg:h-[180px]  ">
                                        {typeof post.featureImage === 'object' && post.featureImage.url && (
                                        <Image
                                            src={post.featureImage.url}
                                            alt="image"
                                            width={400}
                                            height={200}
                                            className="object-cover w-full h-full"
                                        />
                                        )}
                                    </div>
                                    )}
                                 <div className="text-2xl">
                                    {post.title}
                                </div>
                                </div>
                            </Link>
            ))}
                </div>
          
            </div>
        
    )
}