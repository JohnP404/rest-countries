import Countries from "./components/Countries";
import Filter from "./components/Filter";
import Search from "./components/Search";

export default function Home() {
    return (
        <main
            className="p-4 md:py-12 md:px-20
            bg-very-light-gray
            dark:bg-very-dark-blue"
        >
            <div className="grid gap-8 items-center md:gap-0 md:flex md:justify-between">
                <Search />
                <Filter />
            </div>
            <Countries />
        </main>
    );
}
