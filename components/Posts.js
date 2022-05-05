import {db} from '../firebase'
import {collection,orderBy,query} from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore';
import Post from './Post'
import { Box } from '@chakra-ui/react';
function Posts() {
  let cloud_query = query(collection(db, "Posts"),orderBy('timestamp','desc'))
  const [realtimePosts,loading,error] = useCollection(cloud_query)
  
  return (
      <Box width='100%' >
        {realtimePosts && realtimePosts.docs.map( (post)=>
              <Post
              key= {post.id}
              name= {post.data().name}
              message={post.data().message}
              enail={post.data().enail}
              timestamp={post.data().timestamp}
              image={post.data().image}
              postimage= {post.data().postImage}
              />
            )
          }
      </Box>
  )
  
}

export default Posts