import React from "react"
import "./App.css";
import Checkout from "./Component/Checkout";
import MyGarage from "./Component/MyGarage";
import Cart from "./Component/Cart";



class App extends React.Component {
  state= {shoppingCart:[]}
  
  addCart = (item) => {
    this.setState((prevState) => {
      return {shoppingCart: [item,...prevState.shoppingCart]}
    })
  }
  render() {

    return (
      <div className="App">
        <MyGarage addCart={this.addCart}/>
        <Cart shoppingCart={this.state.shoppingCart} />
        <Checkout/> 
      </div>
    );
  }
}

export default App;

