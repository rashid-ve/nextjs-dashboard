// components/Avatar.js
import Image from "next/image";

export default function Avatar({
  src,
  alt,
  size = 30,
}: {
  src: string;
  alt: string;
  size: number;
}) {
  return (
    <div
      className={`overflow-hidden rounded-full border-2 border-gray-300`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-cover"
      />
    </div>
  );
}
