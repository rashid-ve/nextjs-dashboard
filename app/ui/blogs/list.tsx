import { fetchFilteredPosts, fetchPosts } from "@/app/lib/data";
import { Card } from "./post-card";

export default async function PostsList({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const posts = await fetchFilteredPosts(query, currentPage);

  return (
    <div className="mt-4">
      {posts.map((post) => (
        <Card
          key={post.id}
          avatar={post.url_to_image}
          title={post.title}
          description={post.description}
          publishedAt={post.published_at}
          avatarUrl={post.url_to_image}
        />
      ))}
    </div>
  );
}
