//import { MdPostAdd, MdMessage } from "react-icons/md";
import { Link } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MdPostAdd = () => {
  return <div style={{ width: '18px', height: '18px' }}>P</div>;
};
const MdMessage = () => {
  return <div style={{ width: '18px', height: '18px' }}>M</div>;
};

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to="/create-post" className={classes.button}>
          <MdPostAdd />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
