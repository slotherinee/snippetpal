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

    if (!previousPosts || previousPosts.length === 0) {
      throw new Error("No previous posts found.");
    }

    const initialMarkdown = await postsGenerator(previousPosts);

    if (!initialMarkdown) {
      throw new Error("Failed to generate initial markdown");
    }

    const imageUrl = getImage();

    if (!imageUrl) {
      throw new Error("Failed to retrieve image URL.");
    }

    const readTimeRegex = /\*\*Read Time:\*\*.*\n\n/;
    const markdown =
      initialMarkdown?.replace(
        readTimeRegex,
        (match) => `${match}![post image](${imageUrl})\n\n`
      ) ?? null;

    if (!markdown) {
      throw new Error("Failed to generate markdown with an image");
    }

    const data = parseBlogPost(markdown ?? "");

    if (!data || Object.keys(data).length === 0) {
      throw new Error("Parsed blog post data is empty");
    }

    const createdPostId = await db
      .insert(blogPostsTable)
      .values(data)
      .returning({ returningId: blogPostsTable.id });

    if (!createdPostId) {
      throw new Error("Failed to insert data into the database");
    }

    return createdPostId;
  } catch (err) {
    console.log("Error adding data to the database", err);
    return null;
  }
}
