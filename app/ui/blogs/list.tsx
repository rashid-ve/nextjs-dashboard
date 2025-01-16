import { fetchFilteredPosts } from "@/app/lib/data";

export default async function PostsList({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const posts = await fetchFilteredPosts(query, currentPage);
  console.log(posts);

  return <div>This is post list.</div>;
}
