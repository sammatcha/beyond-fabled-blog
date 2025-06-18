import PostList from "@/app/(frontend)/postList";
import { getPayload } from "payload";
import config from '@payload-config';

export default async function LifestylePage(){
    const payload = await getPayload({config});
    const {docs: posts} = await payload.find({
        collection: 'posts',
        depth: 1,
        where: {
            category: {
                equals: 'Lifestyle'
            }
        }
    });
    return(
        <div className="px-4 py-4 max-w-7xl mx-auto ">
          
                    <PostList posts={posts} filterBy="Lifestyle"/>
        </div>

       
    )
}