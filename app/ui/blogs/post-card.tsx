import Image from "next/image";
import { lusitana } from "../fonts";
import Avatar from "./avatar";
import Link from "next/link";

export function Card({
  title,
  description,
  avatar,
  publishedAt,
  avatarUrl,
}: {
  title: string;
  description: string;
  avatar: string;
  publishedAt: string;
  avatarUrl: string;
}) {
  return (
    <div className="rounded-xl p-2 shadow-sm">
      <div className="flex p-4">
        <div className="rounded-full cursor-pointer rounded-2">
          <Link href={avatarUrl} target="_blank">
            <Avatar src={avatar} size={80} alt="avatar" />
          </Link>
        </div>
        <div>
          <h2 className="ml-2 text-md font-bold">{title}</h2>
          <p
            className={`${lusitana.className}
          break-normal bg-white p-2 text-lg`}
          >
            {description}
          </p>
          <p className="ml-2">
            Published at: {new Date(publishedAt).toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
