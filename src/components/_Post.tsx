import { Link } from 'react-router-dom';
import classes from './Post.module.css';
type PostProps = {
  //id: string;
  author: string;
  body: string;
};
const _Post = ({ author, body }: PostProps) => {
  return (
    <li className={classes.post}>
      <Link to="">
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </Link>
    </li>
  );
};
export default _Post;
