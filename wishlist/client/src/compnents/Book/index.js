import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './book.css';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0};
    this.increaseInd = this.increaseInd.bind(this);
    this.decreaseInd = this.decreaseInd.bind(this);
    this.addBookItem = this.addBookItem.bind(this);
  }
  addBookItem({ target }) {
    let { index } = this.state;
    if (target.checked) {
      let bookToAdd = this.props.books[index];
      this.props.addToMyBooks(bookToAdd);
    } else {
      let bookToRem = this.props.books[index];
      this.props.removeBook(bookToRem);
    }
  }

  checkIfBookInMyBooks(indexCheck) {
    let bookToFound = this.props.books[indexCheck];
    return this.props.myBooks.find(book => book === bookToFound);
  }
  increaseInd() {
    let { index } = this.state;
    if (index < this.props.books.length - 1) {
      let found = this.checkIfBookInMyBooks(index + 1);
      index++;
      this.$checkBox.checked = found;
      this.setState({ index });
      this.updateArrows(index);
    }
  }
  decreaseInd() {
    let { index } = this.state;
    if (index > 0) {
      let found = this.checkIfBookInMyBooks(index - 1);
      index--;
      this.$checkBox.checked = found;
      this.setState({ index });
      this.updateArrows(index);
    }
  }
  updateArrows(ind) {
    let { books } = this.props;
    this.$leftArrow.style.color = ind === 0 ? 'white' : 'black';
    this.$rightArrow.style.color = ind === books.length - 1 ? 'white' : 'black';
  }
  componentDidMount() {
    this.$leftArrow.style.color = 'black';
  }

  render() {
    console.log('render');
    let { index } = this.state;
    let book = this.props.books[index];

    return (
      <div className="bookContainer">
        <img
          ref={la => {
            this.$leftArrow = la;
          }}
          onClick={this.decreaseInd}
          src={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Angle_left_font_awesome.svg/768px-Angle_left_font_awesome.svg.png'
          }
        />
        <div className="book">
          <div className="header">
            <h1 className="bookTitle">{book.title}</h1>
            <input
              type="checkbox"
              ref={checkBox => {
                this.$checkBox = checkBox;
              }}
              onChange={this.addBookItem}
            />
          </div>
          <hr />
          <h2 className="bookAuthor">{book.author}</h2>
          <p className="description">{book.description}</p>
          rating: <StarRatingComponent name="rate1" starCount={5} value={parseInt(book.rating)} />
          <p className="bookPrice">price: ${book.price}</p>
        </div>
        <img
          ref={la => {
            this.$rightArrow = la;
          }}
          onClick={this.increaseInd}
          src={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Angle_right_font_awesome.svg/768px-Angle_right_font_awesome.svg.png'
          }
        />
      </div>
    );
  }
}

export default Book;
