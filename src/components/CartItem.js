import React from "react";
import { connect } from "react-redux";
import { updateCart, removeBookCart } from "../actions/cartAction";
import './cart.css';
class CartItem extends React.Component {
  handleOnClickUpdate = (id, operator, quantity) => {
    if (quantity === 1 && operator === '-') {
      this.props.updateCart(id, operator);
      this.props.removeBookCart(id);
    } else {
      this.props.updateCart(id, operator);
    }
  }
  handleOnClickRemove = id => {
    this.props.removeBookCart(id);
  }
  render() {
    const { id, title, price, quantity, image } = this.props.cart;
    return (
      <div>
        <ul>
          <li className="cart-items-container">
            <img src={image}
              alt="books" />
            <div>
              <p>{title}</p>
              <p>U$$: {price}</p>
              <p>Quantity: {quantity}</p>
            </div>
            <div className="button-container">
              <button onClick={() => { this.handleOnClickUpdate(id, '+', quantity) }}>+</button>
              <button onClick={() => { this.handleOnClickRemove(id) }}>remove</button>
              <button onClick={() => { this.handleOnClickUpdate(id, '-', quantity) }}>-</button>
            </div>
          </li>

        </ul>
      </div>
    );
  }
}

export default connect(null, { updateCart, removeBookCart })(CartItem);
