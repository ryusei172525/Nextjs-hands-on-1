import Link from 'next/link';

async function getPosts() {
  const res = await fetch('http://localhost:3000/api/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default async function HomePage() {

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post: { id: number; title: string }) => (
          <li>
            <Link href={`/posts/${id}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
