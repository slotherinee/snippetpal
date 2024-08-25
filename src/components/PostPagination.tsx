"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

export default function PostPagination({
  currentPage,
  totalPosts,
}: {
  currentPage: number;
  totalPosts: number;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const totalPages = Math.ceil(totalPosts / 6);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  const handleClick =
    (page: number, isDisabled: boolean) => (event: React.MouseEvent) => {
      if (isDisabled) {
        event.preventDefault();
        return;
      }
      handlePageChange(page);
    };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={`cursor-pointer ${
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }`}
            onClick={handleClick(currentPage - 1, currentPage === 1)}
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              className="cursor-pointer"
              isActive={currentPage === index + 1}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            className={`cursor-pointer ${
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            }`}
            onClick={handleClick(currentPage + 1, currentPage === totalPages)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
