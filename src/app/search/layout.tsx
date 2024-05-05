import { ReactNode } from "react";
import Search from "../components/Search";
import Filter from "../components/Filter";

export default function SearchRoot({ children }: { children: ReactNode }) {
    return (
        <main
            className="sm:p-8 md:py-12 md:px-20
      bg-very-light-gray
      dark:bg-very-dark-blue"
        >
            <div className="grid gap-4 items-center md:gap-0 md:flex md:justify-between">
                <Search />
                <Filter />
            </div>
            {children}
        </main>
    );
}
