"use client"

export default function ProductButton(props){
    // console.log(props)
    return(
        <>
        <button onClick={() => console.log(props.price)}>Click me</button>
        </>
    ) 
}