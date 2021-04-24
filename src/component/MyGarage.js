import React from "react";
import productData from "../data/productData";
import Product from "./Product"


class MyGarage extends React.Component {

    
    
    render() {
      const ProductInfo = 
          productData.map(product => <Product name={product.name} price={product.price.toFixed(2)} description={product.description}
          img={product.img}/>)
      return (
          <section>
              <h1>My Garage Sale</h1>
            {ProductInfo} 
        
        </section>
    )
  }
}
export default MyGarage;
