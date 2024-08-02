"use client";
import * as React from "react";
import { useDebouncedCallback } from "use-debounce";
import { cn } from "@/lib/utils";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		const searchParams = useSearchParams();
		const pathname = usePathname();
		const { replace } = useRouter();

		const handleSearch = useDebouncedCallback((term: string) => {
			const params = new URLSearchParams(searchParams);
			if (term) {
				params.set("query", term);
			} else {
				params.delete("query");
			}
			replace(`${pathname}?${params.toString()}`);
		}, 300);

		return (
			<input
				type={type}
				onChange={(e) => handleSearch(e.target.value)}
				className={cn(
					"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
					className
				)}
				defaultValue={searchParams.get("query")?.toString()}
				ref={ref}
				{...props}
			/>
		);
	}
);
Input.displayName = "Input";

export { Input };
