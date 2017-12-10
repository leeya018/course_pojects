import React, { Component } from "react";
import "./SortBooks.css";

class SortBooks extends Component {
  constructor(props) {
    super(props);
    this.sortByTitle = this.sortByTitle.bind(this);
    this.sortByRating = this.sortByRating.bind(this);
    this.sortByPrice = this.sortByPrice.bind(this);
  }

  sortByTitle() {
    let myBooks = this.props.myBooks.sort((bookA, bookB) => {
      if (bookA.title < bookB.title) {
        return -1;
      }
      return 1;
    });
    this.props.updateMyBooks(myBooks);
    console.log(myBooks);
  }
  sortByRating() {
    let myBooks = this.props.myBooks.sort((bookA, bookB) => {
      return bookA.rating - bookB.rating;
    });
    this.props.updateMyBooks(myBooks);
    console.log(myBooks);
  }
  sortByPrice() {
    let myBooks = this.props.myBooks.sort((bookA, bookB) => {
      return bookA.price - bookB.price;
    });
    this.props.updateMyBooks(myBooks);
    console.log(myBooks);
  }

  render() {
    return (
      <div className="sortItems">
        <h2 className="sortTitle" onClick={this.sortByTitle}>
          title
        </h2>
        <h2 className="sortPrice" onClick={this.sortByPrice}>
          price
        </h2>
        <h2 className="sortRating" onClick={this.sortByRating}>
          rating
        </h2>
      </div>
    );
  }
}

export default SortBooks;
