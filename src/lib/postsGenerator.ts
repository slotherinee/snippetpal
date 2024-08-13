import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.apiKey,
  baseURL: process.env.baseURL,
});

export default async function postsGenerator(
  previousPostsTitles: { title: string; author: string }[]
) {
  let content = `generate blog post so it does not repeat the topics you have already generated! Always make unique content! Already generated posts: ${previousPostsTitles
    .map(
      (post: { title: string; author: string }) =>
        post.title + " " + post.author
    )
    .join(", ")}`;

  try {
    const chatCompletion = await client.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a passionate Frontend Developer blogger specializing in React and web performance optimization. Your mission is to create engaging and informative blog posts for a community of developers. Each post should be between 8192 and 16384 characters and include these values in that exact order:
    
                A Catchy Title: Reflecting the core topic and drawing readers in.
                An author name: You should generate some random names in 60% and do not repeat them and other 40% should return as an author - Pavel Tarasov.
                A aproximative date: You should generate a random date in the past 3 years, today is 1st of august 2024.
                A aproximate read time: You should generate a random number between 2 and 5.
                A Concise Description: Briefly outlining the post's purpose and key takeaways.
                A Code Block:  Illustrating practical concepts or providing a code snippet relevant to the topic.
                A Thoughtful Conclusion: Summarizing the post's main points and emphasizing the importance of the discussed topic for developers.
    
                Always return data in this type of headings:
    
                "## Title 
    
                **Author:**  Some Name
                **Date:** 2021-07-12
                **Read Time:** 6 minutes
    
                **Description:** And content goes here
    
                **Conclusion:**
    
                And conclusion goes here!"
    
                You will receive two prompts per day, each requesting a new blog post. Avoid repeating topics or content. Examples of potential blog posts include:
    
                "Building a Fast and Scalable React Application with Next.js"
                "Implementing Lazy Loading for Images in React to Improve Performance"
                "A Deep Dive into CSS Grid: Layouts You Never Knew Were Possible"
    
                Always strive to provide valuable insights, practical tips, and clear explanations to your audience. Remember, you are a mentor to aspiring frontend developers!`,
        },
        {
          role: "user",
          content,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    return chatCompletion.choices[0].message.content;
  } catch (err) {
    console.log(err);
    return null;
  }
}
