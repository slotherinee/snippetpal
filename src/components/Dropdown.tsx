"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import FilterIcon from "./ui/icons/FilterIcon";

export default function Dropdown() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSortChange = (order: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", order);
    replace(`${pathname}?${params.toString()}`);
  };

  const handleClick = (order: string) => (event: React.MouseEvent) => {
    handleSortChange(order);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <FilterIcon className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={
            searchParams.get("sort") === "desc" || !searchParams.get("sort")
          }
          onClick={handleClick("desc")}
        >
          Latest
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={searchParams.get("sort") === "asc"}
          onClick={handleClick("asc")}
        >
          Oldest
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
