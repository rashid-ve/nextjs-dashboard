import Modal from "@/app/ui/blogs/modal";
import { fetchPosts } from "@/app/lib/data";
import IframePage from "@/app/ui/blogs/iframe";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const posts = await fetchPosts();
  const post = posts.find((p) => p.id === id);

  return (
    <Modal>
      <IframePage url={post?.url} />
    </Modal>
  );
}
