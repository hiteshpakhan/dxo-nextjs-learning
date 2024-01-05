import ProductButton from "./ProductButton";

async function productList(){
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json()
    return data.products;
}

export default async function Fakeapi(){
    let products = await productList() 
    console.log(products)
    return(
    <div>
        {products.map((item) => {
            return (
            <>
                <h1 key={item.id}>Name :- {item.title}</h1>
                <ProductButton price={item.price} />
            </>
            )
        })}
    </div>
    )
}



































// "use client"

// import { useState, useEffect } from "react"

// export default function Fakeapi(){

//     const [product, setProduct] = useState([]);

//     useEffect(() => {
//         async function oneweb() {
//             let response = await fetch("https://dummyjson.com/products");
//             let data = await response.json();
//             console.log("data : ",data)
            
//             //the api will give you the object {"products": [...]} so we are storing the data that is inside an []
//             setProduct(data.products)
//         }
//         oneweb()
//     },[])
    
//     console.log("products : ",product)

//     return(
//         <div>
//             <h1>Product List</h1>
//             {product && product.map(item => <li key={item.id}>{item.title}</li>)}
//         </div>
//     )
// }
