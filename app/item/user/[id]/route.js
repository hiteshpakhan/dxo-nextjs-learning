import { users } from "@/app/db/db";
import { NextResponse } from "next/server";


export async function GET(request, par){
    const gotData = users.filter((item) => item.id == par.params.id)
    console.log(gotData)

    if(gotData.length === 0){
        return NextResponse.json({"message": "no data found"}, {status: 404})
    }

    return NextResponse.json(gotData)
}