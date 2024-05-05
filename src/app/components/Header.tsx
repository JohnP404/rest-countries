"use client";

import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
    return (
        <header
            className="flex items-center justify-between px-4 py-8 lg:px-20
          bg-white text-very-dark-blue
            dark:bg-dark-blue dark:text-white"
        >
            <Link href={"/"}>
                <h1 className="font-bold lg:text-2xl">Where in the world?</h1>
            </Link>
            <ThemeSwitch />
        </header>
    );
}
