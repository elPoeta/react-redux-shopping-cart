import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import './cart.css';

class CartList extends React.Component {
  render() {
    const { totalAmount, totalQuantity } = this.props;
    const cartList = this.props.cart.map(cart => (
      <CartItem
        key={cart.id}
        cart={cart}
      />
    ));
    return (
      <div className="cart-container">
        {totalQuantity ? <h2>Your Cart</h2> : <h2>Your cart is empty</h2>}
        <div>{cartList}</div>
        {(totalAmount > 0) ? <h3>Total: U$$ {totalAmount}</h3> : null}
        <Link to="/books">Back to books</Link>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart.cart,
    totalAmount: state.cart.totalAmount,
    totalQuantity: state.cart.totalQuantity
  };
};
export default connect(mapStateToProps)(CartList);
