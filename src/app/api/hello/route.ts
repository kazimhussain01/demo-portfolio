import { NextResponse, NextRequest } from "next/server";

export function GET(request: NextRequest){
    return NextResponse.json("Hello World! I am a Kazim Hussain Full Stack Web Developer")
}