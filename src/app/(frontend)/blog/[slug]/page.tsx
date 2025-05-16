import { getPayload } from "payload";
import config from '@payload-config';

// individual post page
export default async function PostPage({params}: {params: {slug : string}}){
    const payload = await getPayload({config});
const {docs} = await payload.find({
    collection: 'posts', //required
    depth: 2,
    where: {
        slug: {
            equals: params.slug
        }
    }
})
return (
    <div>
    </div>
)
}
