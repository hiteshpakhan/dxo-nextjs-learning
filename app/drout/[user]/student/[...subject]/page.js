
export default function page({params}) {

    console.log(params) //it give {user: "1", subject: "science"}
    // after we changes [subject] to [...subject] we will get 
    // {user: "1", subject: ["science", "nbbhjbjbjhdkjfbkjvsbkjfkjs"]}

  return (
    <div>this is the- {params.subject[0]} -subject and we are inside the user {params.user}</div>
  )
}
