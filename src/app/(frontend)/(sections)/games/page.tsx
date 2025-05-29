import { getPayload } from "payload";
import PostList from "../../../components/postList";
import config from '@payload-config';


export default async function GamesPage() {
    const payload = await getPayload({config});
    const {docs: posts} = await payload.find({
        collection: 'posts',
        depth: 1,
    })
    return(
        <PostList posts={posts} filterBy="Games" />
    )
}