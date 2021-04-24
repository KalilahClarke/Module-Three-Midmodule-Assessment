import React from "react"
import "./Product.css";


class Product extends React.Component{
constructor(props){
    super(props)
}
render(){
    return (
    <div>
        <section className="Products">
        <h3>{this.props.name}</h3>
        <p>Price: ${this.props.price}</p>
        <button onClick={() => this.cart("cart")} value={"cart"}>Add To Cart</button>
        <img src={this.props.img} alt={this.props.name} width="200" height="200"/>
        <p>{this.props.description}</p>
        </section>
    </div>
    )
}
}

export default Product;