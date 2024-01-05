import { users } from "@/app/db/db";
import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json(users);
}