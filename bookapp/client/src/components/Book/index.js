import { ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import { grey400 } from 'material-ui/styles/colors';
import { Content } from './Book.style';
import IconMenu from 'material-ui/IconMenu';
import React, { Component } from 'react';
import MyDialog from '../MyDialog';
import api from '../App/api';
import dateFormat from 'dateformat';

class Book extends Component {
  constructor(props) {
    super(props);
    let { title, author, date } = this.props.book;
    // debugger
    // date =dateFormat(date, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    // debugger;
    this.state = { title, author, date, dialog: false };
    this.updateDialog = this.updateDialog.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.updateBook = this.updateBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  deleteBook() {
    let { id } = this.props.book;
    api.deleteBook(id);
    this.props.removeBook(id)
  }

  updateDialog(dialog) {
    this.setState({ dialog });
  }

  updateBook(book) {
    let { title, author, date } = book;
    this.setState({ title, author, date });
    api.updateBook(book);
  }

  openDialog() {
    this.setState({ dialog: true });
  }

  render() {
    let self = this;
    let { dialog } = this.state;
    let { title, author, date } = this.state;
    return (
      <ListItem rightIconButton={rightIconMenu(self)} style={{ width: '50%' }}>
        <MyDialog
          dialog={dialog}
          updateBook={this.updateBook}
          book={this.props.book}
          updateDialog={this.updateDialog}
          clName={"Book"}
          titleDialog={"Update Book"}
          buttonTxt={"Update"}
        />
        <Content>
          <p>{title}</p>
          <p>author:{author}</p>
          <p>{date}</p>
        </Content>
      </ListItem>
    );
  }
}

export default Book;
//================================
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
