import Link from "next/link"

export default function Drout(){
    return(
        <div className="flex justify-center flex-col items-center min-h-screen bg-slate-300">
            <Link href="drout/1">
                <h1>Users 1</h1>
            </Link>
            <Link href="drout/2">
                <h1>Users 2</h1>
            </Link>
            <Link href="drout/3">
                <h1>Users 3</h1>
            </Link>
            <Link href="drout/4">
                <h1>Users 4</h1>
            </Link>
            <Link href="drout/5">
                <h1>Users 5</h1>
            </Link>
        </div>       
    )
}