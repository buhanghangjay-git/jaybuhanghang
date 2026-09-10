"use client";

import { useEffect, useState } from "react";

const links = ["About", "Skills", "Projects", "Experience", "Certifications"];

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(() => {
		if (typeof window === "undefined") return false;
		const savedTheme = window.localStorage.getItem("portfolio-theme");
		return savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
	});

	useEffect(() => {
		document.documentElement.classList.toggle("dark", isDarkMode);
	}, [isDarkMode]);

	function toggleTheme() {
		const nextThemeIsDark = !isDarkMode;
		setIsDarkMode(nextThemeIsDark);
		document.documentElement.classList.toggle("dark", nextThemeIsDark);
		window.localStorage.setItem("portfolio-theme", nextThemeIsDark ? "dark" : "light");
	}

	return (
		<nav className="fixed inset-x-0 top-0 z-50 w-full bg-[#fbfbfa] lg:bottom-0 lg:left-0 lg:right-auto lg:top-0 lg:w-60">
			<div className="mx-auto flex w-full max-w-none items-center justify-between gap-4 px-4 py-4 sm:gap-6 sm:px-6 sm:py-5 lg:block lg:max-w-6xl lg:px-8 lg:py-9">
				<a href="#top" className="shrink-0 text-base font-black uppercase tracking-[-0.06em] sm:text-lg">
					Jay Buhanghang<span className="text-[#464feb]">.</span>
				</a>
				<button
					aria-expanded={isMenuOpen}
					aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
					className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border-2 border-black text-neutral-700 sm:hidden lg:hidden"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					type="button"
				>
					<span className="h-px w-4 bg-current" />
					<span className="h-px w-4 bg-current" />
				</button>
				<div className={`${isMenuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col gap-1 bg-[#fbfbfa] px-4 py-4 text-xs font-bold uppercase tracking-[0.16em] text-neutral-700 sm:static sm:flex sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3 sm:bg-transparent sm:p-0 lg:mt-20 lg:flex lg:flex-col lg:flex-nowrap lg:gap-5 lg:px-0 lg:py-0`}>
					{links.map((link) => (
						<a className="nav-link whitespace-nowrap py-2 transition-colors hover:text-[#464feb] sm:py-0" href={`#${link.toLowerCase()}`} key={link} onClick={() => setIsMenuOpen(false)}>
							{link}
						</a>
					))}
					<button className="mt-4 flex items-center gap-3 px-3 py-2 text-left text-xs font-bold uppercase tracking-[0.12em] text-neutral-700 lg:mt-8" onClick={toggleTheme} type="button" aria-label="Toggle color theme">
						<span aria-hidden="true">{isDarkMode ? "☀" : "☾"}</span>
						{isDarkMode ? "Light mode" : "Dark mode"}
					</button>
					<a className="mt-4 max-w-full border-t border-neutral-300 pt-5 text-xs normal-case tracking-normal text-neutral-500 hover:text-[#464feb] lg:absolute lg:bottom-8 lg:left-8 lg:right-8 lg:mt-0" href="mailto:buhanghangjay@gmail.com">
						<span className="block max-w-[12rem] text-sm leading-6">Open to Software Engineering and Application Development opportunities.</span>
						<span className="mt-4 block break-all font-bold text-neutral-800">buhanghangjay@gmail.com</span>
						<span className="mt-2 block text-neutral-500">Manila, Philippines</span>
					</a>
				</div>
			</div>
		</nav>
	);
}

