import { fetchFilteredPosts } from "@/app/lib/data";
import { Card } from "./post-card";
import Link from "next/link";

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
      {posts.map((post) => {
        let decodedUrl = decodeURIComponent(
          `/dashboard/blogs/${post.id}/title/${post.title}`
        );
        decodedUrl = decodedUrl.replace(/[^a-zA-Z0-9\/\s]/g, "");
        decodedUrl = decodedUrl.replace(/\s+/g, "-");
        return (
          <Link
            key={post.id}
            href={`/dashboard/blogs/${post.id}/title/${post.title}`}
          >
            <Card
              key={post.id}
              id={post.id}
              avatar={post.url_to_image}
              title={post.title}
              description={post.description}
              publishedAt={post.published_at}
              publishedBy={post.name}
            />
          </Link>
        );
      })}
    </div>
  );
}
