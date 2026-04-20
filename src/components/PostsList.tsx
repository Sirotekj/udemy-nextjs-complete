import { useLoaderData } from "react-router-dom";

import classes from "./PostsList.module.css";
import Post from "./Post";

import type { PostDataType } from "../types/types";

const PostsList = () => {
  const posts = useLoaderData();

  //fetch("http://localhost:8080/posts").then((response) => response.json());
  //.then((data) => setPosts(data.posts));

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

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post: PostDataType) => {
            return (
              <Post
                key={post.id}
                id={post.id}
                author={post.author}
                body={post.body}
              />
            );
          })}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};
export default PostsList;
