import React, { Component } from "react";
import "./bookPreview.css";

class bookPreview extends Component {
  constructor(props) {
    super(props);
    this.removeBookItem = this.removeBookItem.bind(this);
  }
  removeBookItem(){
    let { book } = this.props;   
    this.props.removeBook(book) 
  }
  render() {
    let { book } = this.props;
    return (
      <div>
        <div className="bookPreview">
          <div className="Bookmark" />
          <h2 className="bookTitlePreview">{book.title}</h2>
          <span className="bookX" onClick={this.removeBookItem}>
            X
          </span>
        </div>
      </div>
    );
  }
}

export default bookPreview;
