"use client";

import { ChangeEvent, useState } from "react";

export default function Search() {
    const [query, setQuery] = useState("");

    function changeHandler(e: ChangeEvent) {
        const input = e.target as HTMLInputElement;

        setQuery(input.value.toLowerCase());
    }

    return (
        <nav
            className="grid items-center gap-4 p-4 rounded-md w-full md:max-w-md
      bg-white text-very-dark-blue
      dark:bg-dark-blue dark:text-white"
        >
            <form
                action={`/search/country/${query}`}
                method="GET"
                className="flex items-center gap-4"
            >
                <span className="material-icons-sharp">search</span>
                <input
                    onChange={changeHandler}
                    className="placeholder:text-very-dark-blue dark:placeholder:text-white bg-transparent outline-0 w-full"
                    type="text"
                    placeholder="Search for a country..."
                />
            </form>
        </nav>
    );
}
