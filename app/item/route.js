// export async function GET(){
//     return new Response("we are inside item");
// }

import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({"message": "hi there"}, {status: 201})
}