"use client";

import { useEffect, useRef, useState } from "react";

const links = ["About", "Skills", "Projects", "Experience", "Certifications"];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const wasMenuOpen = useRef(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = window.localStorage.getItem("portfolio-theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsDarkMode(savedTheme === "dark" || (!savedTheme && prefersDark));
    }, []);

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
        if (wasMenuOpen.current && !isMenuOpen) {
            menuButtonRef.current?.focus();
        }
        wasMenuOpen.current = isMenuOpen;
    }, [isMenuOpen]);

    function toggleTheme() {
        const nextThemeIsDark = !isDarkMode;
        setIsDarkMode(nextThemeIsDark);
        window.localStorage.setItem(
            "portfolio-theme",
            nextThemeIsDark ? "dark" : "light"
        );
    }

    return (
            <nav className="fixed inset-x-0 top-0 z-50 w-full bg-[#fbfbfa] lg:bottom-0 lg:left-0 lg:right-auto lg:top-0 lg:w-60">
                <div className="mx-auto flex w-full max-w-none items-center justify-between gap-5 px-5 py-5 sm:gap-6 sm:px-6 sm:py-5 lg:block lg:max-w-6xl lg:px-8 lg:py-9">
                <a
                    href="#top"
                    className="text-lg font-black uppercase tracking-tight text-neutral-900 dark:text-white"
                >
                    Jay Buhanghang<span className="text-[#464feb]"></span>
                </a>

                <div className="mobile-actions lg:hidden">
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
                        onClick={() => setIsMenuOpen((open) => !open)}
                        type="button"
                    >
                        <span
                            className={`menu-toggle-line ${
                                isMenuOpen ? "menu-toggle-line-open" : ""
                            }`}
                        />
                        <span
                            className={`menu-toggle-line ${
                                isMenuOpen ? "menu-toggle-line-open" : ""
                            }`}
                        />
                    </button>
                </div>

                    <div className="hidden text-xs font-bold uppercase tracking-[0.16em] text-neutral-700 lg:mt-20 lg:flex lg:flex-col lg:gap-5">
                        {links.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="nav-link transition-colors hover:text-[#464feb]"
                        >
                            {link}
                        </a>
                    ))}

                    <button
                        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                        aria-pressed={isDarkMode}
                        className="desktop-theme-toggle mt-8 flex items-center gap-3 px-3 py-2 text-left text-xs font-bold uppercase tracking-[0.12em] text-neutral-700"
                        onClick={toggleTheme}
                        type="button"
                    >
                        {isDarkMode ? "Light mode" : "Dark mode"}
                    </button>

                    <a
                        className="absolute bottom-8 left-8 right-8 max-w-full text-xs normal-case tracking-normal text-neutral-500 hover:text-[#464feb]"
                        href="mailto:buhanghangjay@gmail.com"
                    >
                        <span className="block max-w-[12rem] text-sm leading-6">
                            Let&apos;s work together, reach me at
                        </span>
                        <span className="mt-4 block break-all font-bold text-neutral-800">
                            buhanghangjay@gmail.com
                        </span>
                        <span className="mt-2 block text-neutral-500">
                            Manila, Philippines
                        </span>
                    </a>
                </div>
            </div>

            {isMenuOpen && (
                <div
                    aria-label="Mobile navigation"
                    aria-modal="true"
                    className="mobile-menu lg:hidden"
                    id="mobile-navigation"
                    role="dialog"
                >
                    <div className="mobile-menu-links">
                        {links.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="transition-colors hover:text-[#464feb]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link}
                            </a>
                        ))}
                    </div>

                    <div className="mobile-menu-footer">
                        <span className="section-kicker">Available for opportunities</span>
                        <a href="mailto:buhanghangjay@gmail.com">
                            buhanghangjay@gmail.com
                        </a>
                        <span>Manila, Philippines</span>
                    </div>
                </div>
            )}
        </nav>
    );
}
