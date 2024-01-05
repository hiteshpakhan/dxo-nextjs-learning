import Link from "next/link"

export default function page({params}) {

    let a = params.user;

    // console.log(params)  //it will give {user: "1"}

  return (
    <div>
        <h1>students are as follows: </h1>
        <ul>
            <Link href={`../${a}/student/science`}>
                science
            </Link>
            <br/>
            <Link href={`student/bhugol`}>
                bhugol
            </Link>
            <br/>
            <Link href={`../${a}/student/itihas`}>
                itihas
            </Link>
            <br/>
            <Link href={`../${a}/student/ganit`}>
                ganit
            </Link>
        </ul>
    </div>
  )
}
