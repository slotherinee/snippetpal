import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<section className="flex flex-col gap-8">
			<Image
				className="w-full object-cover rounded"
				src="/hero-image.jpg"
				alt="hero image"
				width={0}
				height={0}
				sizes="100vw"
			/>
			<div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
				{/* hero description and date */}
				<div>
					<h1 className="mb-4 text-4xl lg:text-6xl leading-tight">
						<Link className="hover:underline" href="post">
							Master Frontend Code with{" "}
							<em className="font-medium">SnippetPal</em>
						</Link>
					</h1>
					<time className="text-xl">March 16, 2020</time>
				</div>

				{/* description and logo */}
				<div className="max-w-sm md:max-w-md">
					<p className="text-lg leading-relaxed mb-4">
						Discover a curated collection of code snippets, meticulously crafted
						to help you build amazing web applications. Find the perfect
						solution, learn new techniques, and level up your frontend skills.
						Tired of searching for the right code? SnippetPal simplifies your
						frontend development journey. Explore our collection, gain valuable
						insights, and build exceptional web experiences.
					</p>
					<div className="flex items-center gap-x-4">
						<Image
							src="/author.png"
							alt="hero image"
							width={48}
							height={48}
							sizes="100vw"
						/>
						<p className="text-xl font-bold">JJ Kasper</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
