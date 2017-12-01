import { ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import { grey400 } from 'material-ui/styles/colors';
import { Content } from './Book.style';
import IconMenu from 'material-ui/IconMenu';
import React, { Component } from 'react';
import MyDialog from '../MyDialog';
import dateFormat from 'dateformat';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = { dialog: false };
    this.updateDialog = this.updateDialog.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.updateBook = this.updateBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  deleteBook() {
    let { id } = this.props.book;
    this.props.removeBook(id);
  }

  updateDialog(dialog) {
    this.setState({ dialog });
  }

  updateBook(book) {
    this.props.updateBook(book);
  }

  openDialog() {
    this.setState({ dialog: true });
  }

  render() {
    let self = this;
    let { dialog } = this.state;
    let { book } = this.props;
    let { date } = book;
    date = dateFormat(new Date(date), 'dddd, mmmm dS, yyyy');

    return (
      <ListItem rightIconButton={rightIconMenu(self)} style={{ width: '100%' }}>
        {this.props.book && (
          <MyDialog
            dialog={dialog}
            updateBook={this.updateBook}
            book={this.props.book}
            updateDialog={this.updateDialog}
            clName={'Book'}
            titleDialog={'Update Book'}
            buttonTxt={'Update'}
          />
        )}
        <Content>
          <p>
            <strong>Title:</strong>
            {book.title}
          </p>
          <p>
            <strong>author:</strong>
            {book.author}
          </p>
          <p>
            <strong>Date:</strong>
            {date}
          </p>
        </Content>
      </ListItem>
    );
  }
}

export default Book;

const iconButtonElement = (
  <IconButton touch={true} tooltip="more" tooltipPosition="bottom-left">
    <MoreVertIcon color={grey400} />
  </IconButton>
);
const rightIconMenu = self => (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem onClick={self.openDialog}> Edit</MenuItem>
    <MenuItem onClick={self.deleteBook}>Delete</MenuItem>
  </IconMenu>
);
