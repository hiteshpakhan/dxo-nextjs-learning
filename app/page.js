"use client"

export default function Home() {

  function example(){
    alert("i am clicked");
  }

  function handleChange(e){
    console.log(e.target.value);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-2xl">
      <input type="text" placeholder="please write something" onChange={handleChange}/>
    </main>
  )
}


// "use client"

// import { useEffect, useState } from "react"

// export default function Home(){

//     const [product, setProduct] = useState([]);

//     useEffect(async()=>{
//         let response = await fetch("https://dummyjson.com/products");
//         let data = await response.json();
//         console.log(data)

//         //the api will give you the object {"product": [...]} so we are storing the data that is inside an []
//         setProduct(data.products) 
//     },[])

//     return(
//         <main>
//             <h1>Product List</h1>
//         </main>
//     )
// }