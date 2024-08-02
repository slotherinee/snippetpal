import Hero from "@/components/Hero";
import LatestPosts from "@/components/LatestPosts";

export default async function Home() {
	return (
		<main className="container mx-auto">
			<Hero />
			<LatestPosts />
		</main>
	);
}
