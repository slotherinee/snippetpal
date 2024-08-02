"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
	{
		routeName: "Home",
		href: "/",
	},
	{
		routeName: "Posts",
		href: "/posts",
	},
	{
		routeName: "About us",
		href: "/about",
	},
];

const Header = () => {
	const pathname = usePathname();
	const isHomePage = pathname === "/";

	return (
		<header className="container mx-auto flex flex-col md:flex-row items-center gap-2">
			<h2
				className={`font-bold tracking-tighter leading-tight md:pr-8 ${
					isHomePage ? "text-6xl md:text-7xl md:mr-auto" : "text-3xl md:mr-auto"
				}`}
			>
				<Link href="/">SnippetPal</Link>
			</h2>
			<nav>
				<ul className="flex flex-row justify-end font-semibold text-nowrap">
					{routes.map((route) => {
						const isActive =
							(route.href === "/" && pathname === "/") ||
							(route.href !== "/" && pathname.startsWith(route.href));

						return (
							<li
								key={route.routeName}
								className={`text-lg mr-6 hover:underline underline-offset-4 ${
									isActive ? "underline" : ""
								}`}
							>
								<Link href={route.href}>{route.routeName}</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
