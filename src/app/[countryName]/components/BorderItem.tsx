import Link from "next/link";

export default async function BorderItem({ border }: { border: string }) {
  const res = await fetch(
    `${process.env.LOCAL_SOURCE_URL}/code?code=${border}`
  );

  if (!res.ok) throw new Error("Could Not Fetch");

  const [data]: Partial<CountryData[]> = await res.json();

  return (
    <Link
      href={`/${data?.name.common}`}
      key={border}
      className="py-2 px-4 text-center rounded-md
      bg-white text-very-dark-blue dark:bg-dark-blue dark:text-white"
    >
      {data?.name.common}
    </Link>
  );
}
