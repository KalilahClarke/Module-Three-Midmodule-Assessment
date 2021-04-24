import { render } from "@testing-library/react";
import React from "react";
import productData from "../data/productData";
import Product from "./Product"
import "./Product.css"


const MyGarage =({addCart}) => { 
    const products = productData.map (product =>{
      return <Product key={product.id} product={product} addCart={addCart}/>
    })
    render()
    
  
      return (
          <section className="Products">
              <h1>My Garage Sale</h1> 
              <ul>
              {products}
              </ul>
        </section>
    )
  
}
export default MyGarage;
