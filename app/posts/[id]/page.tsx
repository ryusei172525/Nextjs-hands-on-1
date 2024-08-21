import { notFound } from 'next/navigation';
import Link from 'next/link';


async function getPost(id: string) {
  const res = await fetch(`http://localhost:3000/api/posts`);
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  const posts = await res.json();
  return posts.find((post: { id: number }) => post.id.toString() === id);
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}