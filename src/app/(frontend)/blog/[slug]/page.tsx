import { getPayload } from "payload";
import config from '@payload-config';

// individual post page
export default async function PostPage({params,
}: {
    params: Promise<{ slug:string}>
}) {
const { slug } = await params;
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
const posts = docs?.[0];
console.log('Post:', posts); // Debugging
 return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">test</h1>
    </div>
  );
}
