import { List } from 'material-ui/List';
import MyDialog from '../MyDialog';
import FlatButton from 'material-ui/FlatButton';
import React, { Component } from 'react';
import Book from '../Book';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = { dialog: false };
    this.openDialog = this.openDialog.bind(this);
    this.updateDialog = this.updateDialog.bind(this);
  }

  updateDialog(dialog) {
    this.setState({ dialog });
  }

  openDialog() {
    this.setState({ dialog: true });
  }

  createBooks() {
    return this.props.books.map((book, index) => (
      <Book updateBook={this.props.updateBook} removeBook={this.props.removeBook} book={book} key={index} />
    ));
  }
  render() {
    let books = this.createBooks();
    let { dialog } = this.state;
    return (
      <div>
        <FlatButton label="Add" primary={true} keyboardFocused={true} onClick={this.openDialog} />
        <MyDialog
          clName={'App'}
          titleDialog={'Add Book'}
          buttonTxt={'Add'}
          dialog={dialog}
          addBook={this.props.addBook}
          updateDialog={this.updateDialog}
        />
        <List>{books}</List>
      </div>
    );
  }
}

export default Books;
