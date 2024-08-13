import Image from "next/image";
import Link from "next/link";

type Props = {
  post: {
    id: number;
    title: string;
    author: string;
    date: string;
    description: string;
    image: string;
  };
};

const GridPost = ({ post }: Props) => {
  const { id, title, author, date, description, image } = post;
  return (
    <div className="flex flex-col gap-y-2">
      <Image
        className="w-full object-cover rounded mb-4"
        src={image}
        width={0}
        height={0}
        sizes="100vw"
        alt="post image"
      />
      <h3 className="text-3xl mb-3 leading-snug">
        <Link className="hover:underline" href={`/posts/${id}`}>
          {title}
        </Link>
      </h3>
      <time className="text-lg mb-4">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <p className="text-lg leading-relaxed mb-4">{description}</p>
      <address className="text-xl font-bold" rel="author">
        {author}
      </address>
    </div>
  );
};

export default GridPost;
