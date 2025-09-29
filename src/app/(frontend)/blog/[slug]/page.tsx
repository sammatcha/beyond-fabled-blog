import { getPayload } from "payload";
import config from '@payload-config';
import RenderBlocks from "../../../blocks/index"; 

import { RefreshRouteOnSave } from "../../../components/RefreshRouteOnSave"
import { RichText } from "@/app/components/RichText/RichText";

// INDIVIDUAL POST PAGE
export default async function PostPage({params
}: {
    params: Promise<{ slug:string}>
}) {
const {slug} = await params;
const payload = await getPayload({config});

const {docs} = await payload.find({
    collection: 'posts', //required
    depth: 3,
    where: {
        slug: {
            equals: slug
        }
    },
    draft: true, //optional, if you want to fetch draft posts
})
const data = docs?.[0]; //entire post object

//  console.log('data content:', data.content)
// console.log('Gallery data:', data.blocks?.find(block => block.blockType === 'gallery'));

 return (
   
    <div className="max-w-[75ch] mx-auto px-4 sm:px-6 md:px-8 pt-10 sm:pt-12 pb-16 sm:pb-20 ">
       <RefreshRouteOnSave />
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-6 rounded-xl">{data.title}</h1>
     
     <div className="text-stone-900">
        <div className="leading-7 md:leading-8  text-stone-900">
            <RenderBlocks  blocks={data.blocks}  />
     
            {data.content && <RichText data={data.content} />}
      
        </div>
     </div>
     
      
     
      
    </div>
  )
}
