import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

class MyDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = (title, author, date) => {
    this.setState({ open: false });
    let { clName } = this.props;
    let book;
    if (clName === 'Book') {
      let { id } = this.props.book;
      book = { id, title, author, date };
      this.props.updateBook(book);
    }
    if (clName === 'App') {
      book = { title, author, date };
      this.props.addBook(book);
    }

    this.props.updateDialog(false);
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.dialog === true) {
      this.handleOpen();
    }
  }

  render() {
    debugger;
    let { title, author, date, titleDialog, buttonTxt } = this.props;
    const actions = [
      <FlatButton
        label={buttonTxt}
        primary={true}
        keyboardFocused={true}
        onClick={() => this.handleClose(title, author, date)}
      />
    ];
    return (
      <div>
        <Dialog
          title={titleDialog}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <br />
          <TextField
            hintText="title"
            onChange={(e, value) => {
              title = value;
            }}
          />
          <br />
          <TextField
            hintText="author"
            onChange={(e, value) => {
              author = value;
            }}
          />
          <DatePicker
            hintText="Date Picker"
            onChange={(e, value) => {
              date = JSON.stringify(value);
            }}
          />
        </Dialog>
      </div>
    );
  }
}

export default MyDialog;
