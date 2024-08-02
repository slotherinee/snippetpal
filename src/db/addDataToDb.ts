import postsGenerator from "@/lib/postsGenerator";
import { getImage } from "@/utils/getImage";
import { parseBlogPost } from "@/utils/parseBlogPost";
import { db } from ".";
import { blogPostsTable } from "./schema";

async function addDataToDb() {
	try {
		const initialMarkdown = await postsGenerator();

		const imageUrl = getImage();

		const readTimeRegex = /\*\*Read Time:\*\*.*\n\n/;
		const markdown =
			initialMarkdown?.replace(
				readTimeRegex,
				(match) => `${match}![post image](${imageUrl})\n\n`
			) ?? null;

		const data = parseBlogPost(markdown ?? "");
		await db.insert(blogPostsTable).values(data);
	} catch (err) {
		console.log(err);
	}
}
