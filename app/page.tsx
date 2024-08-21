import Link from 'next/link';

async function getPosts() {
  const res = await fetch('https://nextjs-hands-on-1.vercel.app/api/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
