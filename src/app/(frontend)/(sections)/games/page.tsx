import { getPayload } from "payload";
import PostList from "../../postList";
import config from '@payload-config';


export default async function GamesPage() {
    const payload = await getPayload({config});
    const {docs: posts} = await payload.find({
        collection: 'posts',
        depth: 1,
    })
    return(
        <div className="px-4 py-8 max-w-7xl mx-auto">
        <PostList posts={posts} filterBy="Games" />
        </div>
    )
}