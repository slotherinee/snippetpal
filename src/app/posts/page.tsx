import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { db } from "@/db";
import { count, desc, like, or } from "drizzle-orm";
import { blogPostsTable } from "@/db/schema";
import PostPagination from "@/components/PostPagination";
import { Metadata } from "next";

type Post = {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
};

export const metadata: Metadata = {
  title: "Posts",
  description:
    "Discover a curated collection of code snippets, meticulously crafted to help you build amazing web applications. Find the perfect solution, learn new techniques, and level up your frontend skills. Tired of searching for the right code? SnippetPal simplifies your frontend development journey. Explore our collection, gain valuable insights, and build exceptional web experiences.",
};

export default async function Posts({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  let currentPage = Number(searchParams?.page) || 1;
  const pageSize = 4;

  const getTotalPostCount = async (isFiltering?: boolean) => {
    if (isFiltering) {
      const totalFilteredPostCount = await db
        .select({ count: count() })
        .from(blogPostsTable)
        .where(
          or(
            like(blogPostsTable.title, `%${query}%`),
            like(blogPostsTable.description, `%${query}%`)
          )
        );
      return totalFilteredPostCount[0].count;
    }
    const totalPostCount = await db
      .select({ count: count() })
      .from(blogPostsTable);
    return totalPostCount[0].count;
  };

  async function getPosts(page = 1, pageSize = 4) {
    return [
      await db
        .select()
        .from(blogPostsTable)
        .orderBy(desc(blogPostsTable.date))
        .limit(pageSize)
        .offset((page - 1) * pageSize),
      await getTotalPostCount(false),
    ];
  }

  const [posts, totalPages] = await getPosts(currentPage, pageSize);

  const filterPosts = async (filter: string, page = 1, pageSize = 4) => {
    if (!filter) {
      return [posts, totalPages];
    }
    const filteredPosts = await db
      .select()
      .from(blogPostsTable)
      .where(
        or(
          like(blogPostsTable.title, `%${filter}%`),
          like(blogPostsTable.description, `%${filter}%`)
        )
      )
      .orderBy(desc(blogPostsTable.date))
      .limit(pageSize)
      .offset((page - 1) * pageSize);
    return [filteredPosts, await getTotalPostCount(true)];
  };

  const [filteredPosts, filteredPagesCount] = await filterPosts(
    query,
    1,
    pageSize
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col min-h-dvh">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-muted-foreground" />
            </div>
            <Input
              type="search"
              placeholder="Search blog posts..."
              className="pl-10 pr-4 py-2 rounded-md bg-background border border-input focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {Array.isArray(filteredPosts) && filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Card
              className="flex flex-col md:flex-row justify-between items-center p-4"
              key={post.id}
            >
              <div className="max-w-3xl">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback>
                        {post.author
                          .split(" ")
                          .map((name: string) => name[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-bold hover:underline hover:underline-offset-2">
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {post.author} •{" "}
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}{" "}
                        • {post.readTime}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{post.description}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/posts/${post.id}`}
                    className="text-primary font-medium hover:underline hover:underline-offset-2"
                    prefetch={false}
                  >
                    Read more
                  </Link>
                </CardFooter>
              </div>
              <div className="w-64 h-32">
                {" "}
                <img className="w-full h-full rounded" src={post.image} />
              </div>
            </Card>
          ))
        ) : (
          <h2 className="text-center">No posts found</h2>
        )}
      </div>
      {Array.isArray(posts) && posts.length > 0 && (
        <div className="flex justify-center mt-8">
          <PostPagination
            totalPosts={
              filteredPagesCount
                ? (filteredPagesCount as number)
                : (totalPages as number)
            }
            currentPage={currentPage}
          />
        </div>
      )}
    </div>
  );
}

function FilterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
