import Image from "next/image";
import ButtonBack from "./components/ButtonBack";
import { NextResponse } from "next/server";
import BorderItem from "./components/BorderItem";

export async function generateMetadata({
    params,
}: {
    params: { countryName: string };
}) {
    return {
        title: `Where in The World? | ${params.countryName}`,
    };
}

export default async function CountryDetails({
    params,
}: {
    params: { countryName: string };
}) {
    const res = await fetch(
        `${process.env.LOCAL_SOURCE_URL}/name?name=${params.countryName}`
    );

    if (!res.ok) return NextResponse.json("Could Not fetch", { status: 404 });

    const [data]: CountryData[] = await res.json();
    const {
        flags,
        name,
        population,
        region,
        subregion,
        capital,
        tld,
        languages,
        currencies,
        borders,
    } = data;

    const [nativeLanguage] = Object.keys(name.nativeName);

    const nativeName: { common: string } =
        name.nativeName[nativeLanguage as keyof typeof CountryDetails];
    const language = languages[nativeLanguage as keyof typeof CountryDetails];

    const [localCurrency] = Object.keys(currencies);
    const currency: { name: string; symbol: string } =
        currencies[localCurrency as keyof typeof CountryDetails];

    return (
        <main
            className="p-4 pt-8 grid
            bg-very-light-gray text-very-dark-blue
            dark:bg-very-dark-blue dark:text-white"
        >
            <ButtonBack />
            <div>
                <Image
                    className="my-10 mx-auto"
                    priority={true}
                    src={flags.svg}
                    width={1060}
                    height={742}
                    style={{ width: "100%", maxWidth: "600px" }}
                    alt={`Flag ${params.countryName}`}
                />
                <h1 className="font-bold text-2xl">{name.common}</h1>
                <div>
                    <ul className="font-bold mt-8 grid gap-2">
                        <li>
                            <span>Native Name: </span>
                            <span className="font-light">
                                {nativeName.common}
                            </span>
                        </li>
                        <li>
                            <span>Population: </span>
                            <span className="font-light">
                                {population.toLocaleString()}
                            </span>
                        </li>
                        <li>
                            <span>Region: </span>
                            <span className="font-light">{region}</span>
                        </li>
                        <li>
                            <span>Sub Region: </span>
                            <span className="font-light">{subregion}</span>
                        </li>
                        <li>
                            <span>Cpaital: </span>
                            <span className="font-light">{capital}</span>
                        </li>
                    </ul>

                    <ul className="font-bold mt-8 grid gap-2">
                        <li>
                            <span>Top Level Domain: </span>
                            <span className="font-light">{tld[0]}</span>
                        </li>
                        <li>
                            <span>Currencies: </span>
                            <span className="font-light">{currency.name}</span>
                        </li>
                        <li>
                            <span>Languages: </span>
                            <span className="font-light">{language}</span>
                        </li>
                    </ul>
                </div>
            </div>
            {borders && (
                <div className="mt-8">
                    <h2 className="font-semibold text-xl">Border Countries:</h2>
                    <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
                        {borders.map((border) => (
                            <BorderItem key={border} border={border} />
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
}
