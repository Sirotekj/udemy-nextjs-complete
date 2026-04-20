import { Link, Form, redirect } from 'react-router-dom';
import type { ActionFunctionArgs } from 'react-router-dom';
import classes from './NewPost.module.css';
import Modal from '../components/Modal';

function NewPost() {
  return (
    <Modal>
      <Form className={classes.form} method="post">
        <p>
          <label htmlFor="body">Body</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">author</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.buttons}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }: ActionFunctionArgs) {
  //data.request
  const formData = await request.formData();
  //formData.get("body");
  const postData = Object.fromEntries(formData);
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return redirect('/');
}
