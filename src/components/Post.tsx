import { Link } from "react-router-dom";
import classes from "./Post.module.css";
type PostProps = {
  id: string;
  author: string;
  body: string;
};
const Post = ({ id, author, body }: PostProps) => {
  return (
    <li className={classes.post}>
      <Link to={id}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </Link>
    </li>
  );
};
export default Post;
