// import PostPage from "../../blog/[slug]/page";
import config from '@payload-config';

import  { getPayload } from "payload"; 
import PostList from "../../postList";



export default async function BooksPage(){
  const payload = await getPayload({config});
  const {docs:posts} = await payload.find({
    collection: 'posts',
    depth: 1
  });

  return(  
    <div className="flex flex-col">
      
      <PostList posts={posts} filterBy="Books"/>
    
      
    </div>
  )

}