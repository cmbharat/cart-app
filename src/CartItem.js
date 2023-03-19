import React from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

class CartItem extends React.Component {
  increaseQuantity = () => {
    // this.state.qty += 1;
    this.setState({
      qty: this.state.qty + 1,
      //   console.log("render")
    });
    // this.setState({
    //   qty: this.state.qty + 1,
    // });
    // this.setState({
    //   qty: this.state.qty + 3,
    // });
    // this.setState((prevState) => {
    //   return { qty: prevState.qty + 1 };
    // });
  };

  decreaseQuantity = () => {
    this.setState((prevState) => {
      if (prevState.qty == 0) return 0;
      else
        return {
          qty: prevState.qty - 1,
        };
    });
  };

  render() {
    console.log("render with props", this.props.product);

    const { price, title, qty, img } = this.props.product;
    // const { increaseQuantity } = ;
    return (
      // <div></div>
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ color: "#777" }}>{title}</div>
          <div>Rs {price}</div>
          <div>Qty: {qty}</div>
          <div className="cart-item-actions">
            <FaPlus
              //   onClick={this.increaseQuantity.bind(this)}
              //   onClick={() => {
              //     // increaseQuantity(product);
              //   }}
              onClick={() => this.props.increaseQuantity(this.props.product)}
              className="action-items"
              alt="Add"
            />
            <FaMinus
              // onClick={this.decreaseQuantity}
              onClick={() => this.props.decreaseQuantity(this.props.product)}
              className="action-items"
              alt="Decrease"
            />
            <FaTrash
              onClick={() => this.props.deleteProduct(this.props.product.id)}
              className="action-items"
              alt="Delete"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
  },
};

export default CartItem;
