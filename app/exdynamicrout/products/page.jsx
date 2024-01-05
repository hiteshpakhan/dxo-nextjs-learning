import Product from "../components/Product";
import ProductButton from "../components/ProductButton";
async function getProducts(){
    const res = await fetch("https://dummyjson.com/products?limit=10&select=title,price");
    const data = await res.json();
    // console.log(data.products);
    return data.products;
}

export default async function Products() {
  const product = await getProducts();

  return (
    <>
    <div>our products</div>
    {
      product.length > 0 && product.map(({id, title, price}) => {
        return <>
        <Product id={id} title={title} price={price} />
        <ProductButton key={id} id={id} />
        </>
      })
    }
    </>
  )
}
