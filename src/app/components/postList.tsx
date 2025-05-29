import { Posts } from "@/app/collections/Posts";
import Link from "next/link";

export default function PostList({
    posts, 
    filterBy, 
}:{posts: any[], filterBy: string}) 
{
const filteredPosts = filterBy
? posts.filter((post) => post.category === filterBy)
: posts;
    return(
        <>
        {filteredPosts.map((post) =>  (
            <Link key={post.id}
            href={`/blog/${post.slug}`}
> 
            {post.title}
            </Link>
        ))}
        </>
    )
}