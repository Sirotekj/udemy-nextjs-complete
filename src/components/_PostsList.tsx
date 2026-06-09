import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import Post from './_Post';
import Modal from './_Modal';
import NewPost from './_NewPost';
import classes from './PostsList.module.css';

import type { _PostDataType } from '../types/types';

type Props = {
  isPosting: boolean;
  onStopPosting: () => void;
};

const PostsList = ({ isPosting, onStopPosting }: Props) => {
  //const posts = useLoaderData();
  /*fetch('http://localhost:8080/posts')
    .then((response) => response.json())
    .then((data) => setPosts(data.posts));*/

  /*let modalContent: ReactNode | null = null;
  if (modalIsVisible) {
    modalContent = (
      <Modal onClose={hideModalHandler}>
        <NewPost
          enteredBody={enteredBody}
          enteredAuthor={enteredAuthor}
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
        />
      </Modal>
    );
  }*/

  const [posts, setPosts] = useState<_PostDataType[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      if (!response.ok) {
        console.log('error');
      }
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, [posts]);

  function addPostHandler(postData: _PostDataType) {
    //setPosts([postData, ...posts]);
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          ></NewPost>
        </Modal>
      )}
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post author={post.author} body={post.body}></Post>
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some.</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <p>Loading posts...</p>
        </div>
      )}
    </>
  );
};
export default PostsList;
