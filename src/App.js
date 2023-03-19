import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  // function showAlert() {
  //   alert("hello");
  // }

  // function handleInputChange(e) {
  //   console.log(e.target.value);
  // }
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "mobile",
          qty: 1,
          img: "",
          id: 1,
        },
        {
          price: 10000,
          title: "TV",
          qty: 1,
          img: "",
          id: 2,
        },
        {
          price: 9999,
          title: "Laptop",
          qty: 1,
          img: "",
          id: 3,
        },
      ],
    };
  }

  handleIncreaseQuantity = (product) => {
    console.log("increase quantity of ", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products: products,
    });
  };

  handleDecreaseQuantity = (product) => {
    console.log("decrease quantity of ", product);

    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty == 0) {
      products[index].qty = 0;
    } else {
      products[index].qty -= 1;
    }

    this.setState({
      products: products,
    });
  };

  handleDeleteProduct = (id) => {
    console.log("decrease quantity of ", id);

    console.log(this.state);
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    console.log(items);

    this.setState({
      products: items,
    });
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    console.log(products);
    products.forEach((product) => {
      count += product.qty;
    });

    console.log(count);
    return count;
  };

  getCarttotal = () => {
    const { products } = this.state;
    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    });
    return cartTotal;
  };
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Navbar count={this.getCartCount()} />
          <Cart
            products={products}
            increaseQuantity={this.handleIncreaseQuantity}
            decreaseQuantity={this.handleDecreaseQuantity}
            deleteProduct={this.handleDeleteProduct}
          />
          <div>TOTAL:{this.getCarttotal()}</div>
          {/* <button onClick={showAlert}></button> */}
          {/* <input type="text" onChange={handleInputChange} /> */}
        </header>
      </div>
    );
  }
}

export default App;
