import { Suspense } from 'react';

import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';

const metadata = {
  title: 'Latest Posts',
  description: 'Browse and share amazing posts.',
  openGraph: {
    //for social networks
    title: 'Latest Posts',
    description: 'Browse and share amazing posts.',
    url: 'next.js',
    siteName: '',
    images: [{ url: '', width: 800, height: 600 }],
    locale: 'en_US',
    type: 'website',
  },
};

async function LatestPosts() {
  const latestPosts = await getPosts(2);
  return <Posts posts={latestPosts} />;
}

export default async function Home() {
  return (
    <>
      <h1>Welcome back!</h1>
      <p>Here's what you might've missed.</p>
      <section id="latest-posts">
        <Suspense fallback={<p>Loading recent posts...</p>}>
          <LatestPosts />
        </Suspense>
      </section>
    </>
  );
}
