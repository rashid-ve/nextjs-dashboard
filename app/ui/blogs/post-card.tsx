import { lusitana } from "../fonts";
import Avatar from "./avatar";
import { BookmarkPost, DeletePost, UpdatePost } from "./buttons";

export function Card({
  id,
  title,
  description,
  avatar,
  publishedAt,
  publishedBy,
}: {
  id: string;
  title: string;
  description: string;
  avatar: string;
  publishedAt: string;
  publishedBy: string;
}) {
  return (
    <div className="rounded-xl p-2 shadow-sm">
      <div className="flex p-4">
        <div className="rounded-full cursor-pointer rounded-2">
          <Avatar src={avatar} size={80} alt="avatar" />
        </div>
        <div>
          <h2 className="ml-2 text-md font-bold">{title}</h2>
          <p
            className={`${lusitana.className}
          break-normal bg-white p-2 text-lg`}
          >
            {description}
          </p>
        </div>
      </div>
      <div className="flex ml-2 items-center justify-between">
        <p>
          Published by: {publishedBy} on {new Date(publishedAt).toDateString()}
        </p>
        <div className="flex justify-end gap-3">
          <UpdatePost id={id} />
          <BookmarkPost id={id} />
          <DeletePost id={id} />
        </div>
      </div>
    </div>
  );
}
