import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "fuelPrices.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error reading fuel prices file:", error);
    return NextResponse.json(
      { message: "Failed to load fuel prices." },
      { status: 500 }
    );
  }
}