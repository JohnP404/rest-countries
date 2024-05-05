import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const name = searchParams.get("name");

  const res = await fetch(
    `${process.env.DATA_SOURCE_URL}/name/${name}?fullText=true`
  );

  if (!res.ok) return NextResponse.json("Could Not Fetch", { status: 404 });

  const data = await res.json();

  return NextResponse.json(data);
}
