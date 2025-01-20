import { fetchPosts } from "@/app/lib/data";
import IframePage from "@/app/ui/blogs/iframe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page",
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const posts = await fetchPosts();
  const post = posts.find((p) => p.id === id);

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <IframePage url={post?.url} />
      </div>
    </div>
  );
}
