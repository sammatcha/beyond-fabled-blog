import { getPayload } from "payload";
import config from '@payload-config';
import RenderBlocks from "../../../blocks/index"; 

import { RefreshRouteOnSave } from "../../../components/RefreshRouteOnSave"

// INDIVIDUAL POST PAGE
export default async function PostPage({params
}: {
    params: Promise<{ slug:string}>
}) {
const {slug} = await params;
const payload = await getPayload({config});

const {docs} = await payload.find({
    collection: 'posts', //required
    depth: 2,
    where: {
        slug: {
            equals: slug
        }
    },
    draft: true, //optional, if you want to fetch draft posts
})
const data = docs?.[0]; //entire post object
// console.log('allPost:', data); 
 return (
    <div className="p-6">
       <RefreshRouteOnSave />
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
     
      <RenderBlocks  blocks={data.blocks}  />
    </div>
  )
}
