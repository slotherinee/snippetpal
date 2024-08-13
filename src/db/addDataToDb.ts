import postsGenerator from "@/lib/postsGenerator";
import { getImage } from "@/utils/getImage";
import { parseBlogPost } from "@/utils/parseBlogPost";
import { db } from ".";
import { blogPostsTable } from "./schema";

export async function addDataToDb() {
  try {
    const previousPosts = await db
      .select({
        title: blogPostsTable.title,
        author: blogPostsTable.author,
      })
      .from(blogPostsTable);
    const initialMarkdown = await postsGenerator(previousPosts);

    const imageUrl = getImage();

    const readTimeRegex = /\*\*Read Time:\*\*.*\n\n/;
    const markdown =
      initialMarkdown?.replace(
        readTimeRegex,
        (match) => `${match}![post image](${imageUrl})\n\n`
      ) ?? null;

    const data = parseBlogPost(markdown ?? "");
    const createdPostId = await db
      .insert(blogPostsTable)
      .values(data)
      .returning({ returningId: blogPostsTable.id });
    return createdPostId;
  } catch (err) {
    console.log(err);
  }
}
