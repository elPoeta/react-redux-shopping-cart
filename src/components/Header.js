import React from "react";
import { Link } from "react-router-dom";
import { getCart } from "../actions/cartAction";
import { connect } from "react-redux";
import "./header.css";

class Header extends React.Component {
  handlerOnClick = () => {
    this.props.getCart();
  };
  render() {
    const { totalQuantity } = this.props;
    return (
      <header>
        <h1>
          <Link to="/">Book's Store</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/books">Books</Link>
            </li>
            <li>
              {" "}
              <Link to="/about">About</Link>
            </li>
            <li onClick={this.handlerOnClick}>
              <Link to="/cart">
                My Cart{" "}
                {totalQuantity ? (
                  <span className="quantity">{totalQuantity}</span>
                ) : null}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart,
    totalQuantity: state.cart.totalQuantity
  };
};
export default connect(
  mapStateToProps,
  { getCart }
)(Header);
