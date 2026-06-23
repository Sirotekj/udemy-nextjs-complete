import { useRouter } from 'next/router';

function BlogPostsPage() {
  const router = useRouter();

  console.log(router.query); // example: http://localhost:3000/blog/2020/12
  return (
    <div>
      <h1>The Blog Posts Page</h1>
    </div>
  );
}
export default BlogPostsPage;
