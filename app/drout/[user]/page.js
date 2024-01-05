import Link from "next/link"

export default function page({params}) {
    console.log(params)
    return (
      <>
      <div>you are currently on the user page {params.user}</div>
      <Link href={`${params.user}/student`}>subjects</Link>
      </>

    )
}
