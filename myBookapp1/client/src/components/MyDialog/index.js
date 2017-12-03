import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';

class MyDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: '',
      author: '',
      date: new Date()
    };
    this.updateDate = this.updateDate.bind(this);
  }
  updateDate(e, value) {
    this.setState({ date: new Date(value) });
  }
  handleOpen = () => {
    this.setState({ open: true });
    let { clName } = this.props;
    if (clName === 'Book') {
      let { title, author, date } = this.props.book;
      date = new Date(date);
      this.setState({ title, author, date });
    }
    if (clName === 'App') {
      this.setState({ title:'', author:'', date:new Date() });
      
    }      
  }

  handleClose = () => {
    let { title, author, date } = this.state;
    this.setState({ open: false });
    let { clName } = this.props;
    let book;
    date = date.toString();
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
  justClose = () => {
    this.setState({ open: false });
    this.props.updateDialog(false);
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.dialog === true) {
      this.handleOpen();
    }
  }

  render() {
    let {  titleDialog, buttonTxt } = this.props;
    var { title, author, date } = this.state;

    const actions = [
      <FlatButton label={buttonTxt} primary={true} keyboardFocused={true} onClick={() => this.handleClose()} />
    ];
    return (
      <div>
        <Dialog
          title={titleDialog}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.justClose}
        >
          <br />
          <TextField hintText="title" value={title} onChange={(e, title) => this.setState({ title })} />
          <br />
          <TextField hintText="author" value={author} onChange={(e, author) => this.setState({ author })} />
          <DatePicker hintText="Date Picker" value={date} onChange={this.updateDate} />
        </Dialog>
      </div>
    );
  }
}

export default MyDialog;
