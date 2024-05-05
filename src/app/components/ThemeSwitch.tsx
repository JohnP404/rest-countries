"use client";

import { useEffect, useState } from "react";

export default function ThemeSwitch() {
    const prefersDarkTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    const [darkMode, setDarkMode] = useState(true);

    darkMode
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");

    useEffect(() => {
        if (prefersDarkTheme) {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, [prefersDarkTheme]);

    return (
        <div
            onClick={() => setDarkMode((state) => !state)}
            className="flex items-center gap-3 cursor-pointer"
        >
            <span className="material-icons-outlined">
                {darkMode ? "light_mode" : "dark_mode"}
            </span>
            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </div>
    );
}
