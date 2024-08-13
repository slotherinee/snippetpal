import Hero from "@/components/Hero";
import LatestPosts from "@/components/LatestPosts";
// import { fetchNews } from "@/utils/fetchNews";

export default async function Home() {
  // const news = await fetchNews();
  // console.log("news", news);
  return (
    <main className="container mx-auto">
      <Hero />
      <LatestPosts />
    </main>
  );
}
