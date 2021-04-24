import React from "react"

const Cart = (shoppingCart) =>{
    
    return(
        <section>
                <h1>Cart</h1>
            <ul>
                {shoppingCart.map(items => {
                    const{name, price} = items;
                    return <li>{name}: {price.toFixed(2)}</li> 
                    }
                </ul>
                })}
                <h3>Subtotal:</h3>
                <h3>Tax:</h3>
                <h3>Total:</h3>
        </section>
    )

}
}
export default Cart