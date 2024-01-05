
export default function Product(props) {
  return (
    <div style={{border: "2px solid white", margin: "10px", padding: "20px"}}>
        <h4>Title: {props.title}</h4>
        <h4>Price: {props.price}</h4>
    </div>
  )
}
