import Link from 'next/link';

export default function NotFound(){
    return(
        <>
        <h1>Page Not Found</h1>
        <Link href="/">Return Home</Link>
        </>
    )
}