export const parseBlogPost = (postString: string) => {
	// Extract title, author, date, read time, and image using regex
	const titleMatch = postString.match(/##\s+(.*)/);
	const authorMatch = postString.match(/\*\*Author:\*\*\s+(.*)/);
	const dateMatch = postString.match(/\*\*Date:\*\*\s+(.*)/);
	const readTimeMatch = postString.match(/\*\*Read Time:\*\*\s+(.*)/);
	const imageMatch = postString.match(/!\[.*\]\((.*)\)/);
	const descriptionMatch = postString.match(/\*\*Description:\*\* (.+)\n/);

	// Get the matched groups and trim them
	const title = titleMatch ? titleMatch[1].trim() : "";
	const author = authorMatch ? authorMatch[1].trim() : "";
	const date = dateMatch ? dateMatch[1].trim() : "";
	const readTime = readTimeMatch ? readTimeMatch[1].trim() : "";
	const image = imageMatch ? imageMatch[1].trim() : "";
	const description = descriptionMatch ? descriptionMatch[1].trim() : "";

	return {
		title,
		author,
		date,
		readTime,
		image,
		description,
		content: postString,
	};
};
