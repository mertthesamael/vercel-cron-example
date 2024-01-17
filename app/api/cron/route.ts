import { NextResponse } from "next/server"

export async function GET() {
    const result = "Helo, World! This is CRON route."
    console.log(result)

    return NextResponse.json({ data: result })

}