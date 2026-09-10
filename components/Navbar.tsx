"use client";

import { useEffect, useRef, useState } from "react";

const links = ["About", "Skills", "Projects", "Experience", "Certifications"];

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuButtonRef = useRef<HTMLButtonElement>(null);
	const wasMenuOpen = useRef(false);
	const [isDarkMode, setIsDarkMode] = useState(() => {
		if (typeof window === "undefined") return false;
		const savedTheme = window.localStorage.getItem("portfolio-theme");
		return savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
	});

	useEffect(() => {
		document.documentElement.classList.toggle("dark", isDarkMode);
	}, [isDarkMode]);

	useEffect(() => {
		if (!isMenuOpen) return;

		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") setIsMenuOpen(false);
		};

		document.body.classList.add("mobile-menu-open");
		document.addEventListener("keydown", closeOnEscape);

		return () => {
			document.body.classList.remove("mobile-menu-open");
			document.removeEventListener("keydown", closeOnEscape);
		};
	}, [isMenuOpen]);

	useEffect(() => {
		if (wasMenuOpen.current && !isMenuOpen) menuButtonRef.current?.focus();
		wasMenuOpen.current = isMenuOpen;
	}, [isMenuOpen]);

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
				<div className="mobile-actions sm:hidden lg:hidden">
					<button
						aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
						aria-pressed={isDarkMode}
						className="theme-toggle"
						onClick={toggleTheme}
						type="button"
					>
						<span aria-hidden="true">{isDarkMode ? "☀" : "☾"}</span>
					</button>
					<button
						ref={menuButtonRef}
						aria-controls="mobile-navigation"
						aria-expanded={isMenuOpen}
						aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
						className="menu-toggle"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						type="button"
					>
						<span className={`menu-toggle-line ${isMenuOpen ? "menu-toggle-line-open" : ""}`} />
						<span className={`menu-toggle-line ${isMenuOpen ? "menu-toggle-line-open" : ""}`} />
					</button>
				</div>
				<div className="hidden flex-col gap-1 text-xs font-bold uppercase tracking-[0.16em] text-neutral-700 sm:flex sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3 lg:mt-20 lg:flex lg:flex-col lg:flex-nowrap lg:gap-5">
					{links.map((link) => (
						<a className="nav-link whitespace-nowrap py-2 transition-colors hover:text-[#464feb] sm:py-0" href={`#${link.toLowerCase()}`} key={link} onClick={() => setIsMenuOpen(false)}>
							{link}
						</a>
					))}
					<button aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"} aria-pressed={isDarkMode} className="mt-4 flex items-center gap-3 px-3 py-2 text-left text-xs font-bold uppercase tracking-[0.12em] text-neutral-700 lg:mt-8" onClick={toggleTheme} type="button">
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
			{isMenuOpen && (
				<div aria-label="Mobile navigation" aria-modal="true" className="mobile-menu sm:hidden" id="mobile-navigation" role="dialog">
					<div className="mobile-menu-links">
						{links.map((link) => (
							<a href={`#${link.toLowerCase()}`} key={link} onClick={() => setIsMenuOpen(false)}>
								{link}
							</a>
						))}
					</div>
					<div className="mobile-menu-footer">
						<span className="section-kicker">Available for opportunities</span>
						<a href="mailto:buhanghangjay@gmail.com">buhanghangjay@gmail.com</a>
						<span>Manila, Philippines</span>
					</div>
				</div>
			)}
		</nav>
	);
}

