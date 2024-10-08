import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ClipboardButton from "./ClipboardButton";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";

const MarkdownRenderer = ({ markdown }: { markdown: string | null }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, className, children, ...props }) {
          const language = className ? className.replace(/language-/, "") : "";
          //   if (inline) {
          //     return <code {...props}>{children}</code>;
          //   }
          return language ? (
            <div className="relative">
              <SyntaxHighlighter
                language={language}
                style={nightOwl}
                showLineNumbers={true}
                wrapLines={true}
                className="!m-0"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
              <ClipboardButton
                codeString={String(children).replace(/\n$/, "")}
              />
            </div>
          ) : (
            <code {...props}>{children}</code>
          );
        },
        img({ node, src, alt, width = 0, height = 0, ...props }) {
          return (
            <Image
              priority
              src={src ?? ""}
              alt={alt ?? ""}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              {...props}
              className="rounded"
            />
          );
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
