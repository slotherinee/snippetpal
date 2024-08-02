import Image from "next/image";
import Link from "next/link";

const GridPost = () => {
	return (
		<div className="flex flex-col gap-y-2">
			<Image
				className="w-full object-cover rounded mb-4"
				src="/cover1.jpg"
				width={0}
				height={0}
				sizes="100vw"
				alt="post image"
			/>
			<h3 className="text-3xl mb-3 leading-snug">
				<Link className="hover:underline" href="/posts">
					Learn How to Pre-render Pages Using Static Generation with Next.js
				</Link>
			</h3>
			<time className="text-lg mb-4">March 16, 2020</time>
			<p className="text-lg leading-relaxed mb-4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Praesent elementum
				facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui
				accumsan sit amet nulla facilities morbi tempus.
			</p>
			<address className="text-xl font-bold" rel="author">
				Joe Haddad
			</address>
		</div>
	);
};

export default GridPost;
