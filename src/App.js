import React from "react"
import "./App.css";
import Checkout from "./component/Checkout";
import MyGarage from "./component/MyGarage";
import Cart from "./component/Cart";



class App extends React.Component {
  state= {cart:[]}
  
  addCart = (item) => {
    this.setState((prevState) => {
      return {cart: [item,...prevState.cart]}
    })
  }
  render() {
    return (
      <div class="App">
        <MyGarage addCart={this.addCart}/>
        <Cart/>
        <Checkout/> 
      </div>
    );
  }
}

export default App;

