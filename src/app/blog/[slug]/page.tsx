import { getPayload } from "payload";
import config from '@payload-config';
import BlockRenderer from "../../blocks";


// individual post page
export default async function PostPage({params,
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
    }
})
const data = docs?.[0]; //entire post object
console.log('allPost:', data); 
 return (
    <div className="p-6">
      {/* <h1 className="text-3xl font-bold mb-4">{data?.title}</h1> */}
      {/* <BlockRenderer block={data.blocks}   */}
    </div>
  )
}
