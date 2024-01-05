// async function generateStaticParams(){
//     const res = await fetch("https://dummyjson.com/products?limit=10&select=title,price")
//     const data = await res.json();
//     return data.product.map((item) => ({
//         id: product.id.toString(),
//     }))
// }

import Product from "../../components/Product";

async function getProduct(id){
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await res.json();
    return data;
}

export default async function page({params}) {

    const product = await getProduct(params.id);

    console.log(product)

  return (
    <div>
        <Product title={product.title} price={product.price} />
    </div>
  )
}
