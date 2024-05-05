"use client";

import Image from "next/image";
import Link from "next/link";

export default function CountryItem({ data }: { data: CountryData }) {
    const { flags, name, population, region, capital } = data;

    return (
        <div
            className="rounded-lg w-full max-w-[400px] justify-self-center
      shadow-md shadow-dark-gray/30 dark:shadow-transparent
      bg-white text-very-dark-blue
      dark:bg-dark-blue dark:text-white"
        >
            <Link href={`/${name.common}`}>
                <Image
                    src={flags.svg}
                    alt={name.common}
                    width={300}
                    height={172}
                    className="rounded-tl-lg rounded-tr-lg"
                    style={{ width: "100%" }}
                    loading="lazy"
                />
                <div className="p-8">
                    <h1 className="font-bold text-xl mb-3">{name.common}</h1>
                    <ul>
                        <li>
                            <span className="font-bold">Population: </span>
                            <span className="font-light">
                                {population.toLocaleString()}
                            </span>
                        </li>
                        <li>
                            <span className="font-bold">Region: </span>
                            <span>{region}</span>
                        </li>
                        <li>
                            <span className="font-bold">Capital: </span>
                            <span>{capital}</span>
                        </li>
                    </ul>
                </div>
            </Link>
        </div>
    );
}
