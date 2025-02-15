import React from "react"

class Checkout extends React.Component {
    state = {
      first: "",
      last: "",
      email: "",
      credit: "",
      zipCode: "",
    };
    handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
      const { first, last, email, credit, zipCode } = this.state;
  
      if (first === "" || last === "" || zipCode === "" ||email === "") {
        alert("Input is invalid");
      } else if (credit.length !== 16) {
        alert("Input is invalid \nCredit Card number is invalid");
      } else if(zipCode.length !== 5) {
        alert ("Input is invalid \nZip Code is not Valid")
      }else {
        // number and average are underfined currently
        alert( 
          `Yay Purchase Complete. \nYou will be charged $(money).`
        );
      }
    };
    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };
  
    render() {
      const { first, last, email, credit, zipCode} = this.state;
      // console.log(this.state);
      return (
        <section className="form">
          <h1>Checkout</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              First Name
              <input name="first" onChange={this.handleChange} value={first} />
            </label>
            <label>
              Last Name
              <input
                name="last"
                onChange={this.handleChange}
                value={last}
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                onChange={this.handleChange}
                value={email}
              />
            </label>
            <label>
              Credit Card
              <input
                name="credit"
                onChange={this.handleChange}
                value={credit}
              />
            </label>
            <label>
              Zip Code
              <input
                name="zipCode"
                type="char(5)"
                onChange={this.handleChange}
                value={zipCode}
              />
            </label>
            <button>Buy Now</button>
          </form>
        </section>
      );
    }
  }
  
  export default Checkout;
  