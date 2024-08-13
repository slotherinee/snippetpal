import { addDataToDb } from "@/db/addDataToDb";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const postId = await addDataToDb();
  if (!postId) {
    return new Response("Post generation failed", { status: 500 });
  }
  return new Response(JSON.stringify({ postId }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
