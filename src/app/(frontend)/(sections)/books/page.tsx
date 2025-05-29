import PostPage from "../../../blog/[slug]/page";
import config from '@payload-config';

import payload, { getPayload } from "payload"; // Add this import if 'payload' is your backend SDK
import PostList from "../../../components/postList";
import Link from "next/link";


export default async function BooksPage(){
  const payload = await getPayload({config});
  const {docs:posts} = await payload.find({
    collection: 'posts',
    depth: 1
  });

  return(  
    <div>
      
      <PostList posts={posts} filterBy="Books"/>
    
      
    </div>
  )

}