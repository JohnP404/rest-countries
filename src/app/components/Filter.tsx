"use client";
import Link from "next/link";
import { MouseEvent, useState } from "react";

export default function Filter() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div
            onClick={() => setShowMenu((state) => !state)}
            className="max-w-[13rem] w-full relative"
        >
            <div
                className="flex justify-between p-4 rounded-md cursor-pointer
                bg-white text-very-dark-blue wrapper
                dark:bg-dark-blue dark:text-white"
            >
                <span>Filter by Region</span>
                <span className="material-icons-sharp">expand_more</span>
            </div>
            <div
                // shoutouts to Kevin Powell https://www.youtube.com/watch?v=B_n4YONte5A
                className={`transition-all duration-300 grid mt-2 rounded-md absolute left-0 right-0 ${
                    showMenu ? "grid-rows-[5fr]" : "grid-rows-[0fr]"
                }
                bg-white text-very-dark-blue dark:bg-dark-blue dark:text-white`}
            >
                <ul className="overflow-hidden grid transition-colors">
                    <li className="px-4 py-2 hover:bg-dark-gray/10 dark:hover:bg-very-dark-blue/50">
                        <Link className="block" href={"/search/region/africa"}>
                            Africa
                        </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-dark-gray/10 dark:hover:bg-very-dark-blue/50">
                        <Link className="block" href={"/search/region/america"}>
                            America
                        </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-dark-gray/10 dark:hover:bg-very-dark-blue/50">
                        <Link className="block" href={"/search/region/asia"}>
                            Asia
                        </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-dark-gray/10 dark:hover:bg-very-dark-blue/50">
                        <Link className="block" href={"/search/region/europe"}>
                            Europe
                        </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-dark-gray/10 dark:hover:bg-very-dark-blue/50">
                        <Link className="block" href={"/search/region/oceania"}>
                            Oceania
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
