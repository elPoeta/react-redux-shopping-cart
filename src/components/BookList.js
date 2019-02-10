import React from "react";
import BookItem from "./BookItem";
import { connect } from "react-redux";
import { getBooks } from "../actions/bookAction";
import "./book.css";
class BookList extends React.Component {
  componentDidMount() {
    this.props.getBooks();
  }
  render() {
    const { books } = this.props;
    const bookList = books.map(book => <BookItem book={book} key={book.id} />);
    return (
      <div>
        <h1>Books</h1>
        <div className="books-container">{bookList}</div>
      </div>
    );
  }
}
const mapstateToProps = state => {
  return {
    books: state.books.books
  };
};
export default connect(
  mapstateToProps,
  { getBooks }
)(BookList);
