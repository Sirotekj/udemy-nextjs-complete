import { useLoaderData } from 'react-router-dom';

import Post from './Post';
import classes from './PostsList.module.css';

import type { PostDataType } from '../types/types';

const PostsList = () => {
  const posts: PostDataType[] = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              body={post.body}
              id={post.id}
            ></Post>
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some.</p>
        </div>
      )}
    </>
  );
};
export default PostsList;
