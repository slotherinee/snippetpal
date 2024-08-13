import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | SnippetPal",
    default: "SnippetPal",
  },
  description:
    "Discover a curated collection of code snippets, meticulously crafted to help you build amazing web applications. Find the perfect solution, learn new techniques, and level up your frontend skills. Tired of searching for the right code? SnippetPal simplifies your frontend development journey. Explore our collection, gain valuable insights, and build exceptional web experiences.",
  metadataBase: new URL("https://snippetpal.vercel.app/"),
  keywords: [
    "Snippets",
    "snippets",
    "code snippet",
    "Code",
    "Code snippets",
    "Frontend",
    "Piece of code",
    "code blocks",
    "blocks",
    "code",
    "Next.js",
    "React",
    "JavaScript",
  ],
  authors: [
    { name: "Colin" },
    { name: "Pavel", url: "https://github.com/slotherinee" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col p-6 gap-y-12">
          <Header />
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
