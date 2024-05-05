import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `${process.env.DATA_SOURCE_URL}/all?fields=name,flags,population,region,capital`
  );

  if (!res.ok) return NextResponse.json("Could Not Fetch", { status: 404 });

  const data = await res.json();

  return NextResponse.json(data);
}
