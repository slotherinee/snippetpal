import Link from "next/link";
import GridPost from "./GridPost";

const LatestPosts = () => {
	return (
		<section>
			<h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
				Latest Posts
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
				<GridPost />
				<GridPost />
			</div>
			<div className="flex justify-center">
				<button className="bg-slate-950 hover:bg-slate-900 text-white font-semibold py-2 px-4 rounded active:scale-95">
					<Link href="/posts">See more</Link>
				</button>
			</div>
		</section>
	);
};

export default LatestPosts;
