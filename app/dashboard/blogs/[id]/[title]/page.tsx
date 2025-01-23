import { fetchPosts } from "@/app/lib/data";
import IframePage from "@/app/ui/blogs/iframe";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).id;
  const posts = await fetchPosts();
  const post = posts.find((p) => p.id === id);
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`id: ${id}`);
    }, 100);
  });
  return {
    title: `Post ${title}`,
    description: post?.description,
    metadataBase: new URL(
      `https://nextjs-dashboard-aiu9fsf7d-rashids-projects-5b4a0554.vercel.app/dashboard/blogs/${id}/${post?.title}`
    ),
  };
};

export default async function BlogPage({ params }: Props) {
  const { id } = await params;
  const posts = await fetchPosts();
  const post = posts.find((p) => p.id === id);

  return (
    <div className="container mx-auto">
      <div className="w-full mx-auto">
        <IframePage url={post?.url} />
      </div>
    </div>
  );
}
