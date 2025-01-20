import { Metadata } from "next";
import { CreateBlog } from "@/app/ui/blogs/buttons";
import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { PostCardsSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import PostsList from "@/app/ui/blogs/list";
import Pagination from "@/app/ui/invoices/pagination";
import { fetchPostsPages } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Blogs",
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchPostsPages(query);
  return (
    <div className="container mx-auto px-auto">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Next Blogs</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search blog..." />
        <CreateBlog />
      </div>
      <Suspense key={query + currentPage} fallback={<PostCardsSkeleton />}>
        <PostsList query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
