import Link from "next/link";

export default function About(){
    return(
        <div>
            <h1>hi there this is the About page</h1>
            <Link href="/" className="flex justify-center"> Homepage link </Link>
        </div>
    )
}