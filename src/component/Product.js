import { render } from "@testing-library/react";
import React from "react"
import "./Product.css";


const Product = ({product, addCart}) => {
    const{name, price, description, img} = product
    return(
        <li>
         <h3>{name}</h3>
         <p>Price: ${price.toFixed(2)}</p>
         <button onClick={() => addCart(product)}>Add To Cart</button>
         <img src={img} alt={name}/>
         <p>{description}</p>
        </li>
    )
}


export default Product;