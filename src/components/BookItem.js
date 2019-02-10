import React from "react";
import { connect } from "react-redux";
import { addBookCart, updateCart } from "../actions/cartAction";
import "./book.css";
class BookItem extends React.Component {
  handleOnclik = book => {
    if (this.props.cart.length > 0) {
      let id = book.id;
      let cartIndex = this.props.cart.findIndex(cart => {
        return cart.id === id;
      });
      if (cartIndex === -1) {
        this.props.addBookCart(book);
      } else {
        this.props.updateCart(id, '+');
      }
    } else {
      this.props.addBookCart(book);
    }
  };
  render() {
    const { title, price, description } = this.props.book;
    return (
      <div className="card-image">
        <img
          src="https://clipground.com/images/school-books-clipart-2.jpg"
          alt="books"
        />
        <span className="card-title">{title}</span>
        <hr />
        <div className="card-content">
          <p>{description}</p>
          <h3>U$$ {price}</h3>
        </div>
        <button
          onClick={() => {
            this.handleOnclik(this.props.book);
          }}
        >
          Buy
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart.cart
  };
};
export default connect(
  mapStateToProps,
  { addBookCart, updateCart }
)(BookItem);
