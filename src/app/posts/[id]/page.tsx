import MarkdownRenderer from "@/components/MarkdownRenderer";
import { db } from "@/db";
import { blogPostsTable } from "@/db/schema";
import { eq } from "drizzle-orm";

const SinglePost = async ({ params }: { params: { id: string } }) => {
	const { id } = params;
	const { content: markdown } = (await db.query.blogPostsTable.findFirst({
		where: eq(blogPostsTable.id, Number(id)),
	})) as { content: string };
	return (
		<section className="container mx-auto">
			<article className="prose lg:prose-xl prose-pre:p-0 prose-pre:m-0">
				<MarkdownRenderer markdown={markdown} />
			</article>
		</section>
	);
};

export default SinglePost;
