import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const blogPostsTable = sqliteTable("blog_posts", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	title: text("title").notNull(),
	author: text("author").notNull(),
	date: text("date").notNull(),
	readTime: text("read_time").notNull(),
	image: text("image").notNull(),
	description: text("description").notNull(),
	content: text("content").notNull(),
});

export type InsertUser = typeof blogPostsTable.$inferInsert;
export type SelectUser = typeof blogPostsTable.$inferSelect;
