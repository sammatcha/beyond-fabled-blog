import { getPayload } from "payload";
import config from '@payload-config';

type PostPageProps = {
    params: {
        slug: string;
    }
}
// individual post page
export default async function PostPage(props: PostPageProps) {
    const { params } = props;
    const { slug } = params;
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
const posts = docs[0];
console.log('Post:', posts); // Debugging
 return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">test</h1>
    </div>
  );
}
