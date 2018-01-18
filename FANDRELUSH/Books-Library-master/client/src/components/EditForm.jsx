import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editBook } from '../redux/actions/book';
import { Form, Header, InputBox, InputLabel, Save, Cancel, Validator } from '../styled/EditForm.styled';
import { showError } from '../redux/actions/modal';

class EditForm extends Component {
  constructor(props) {
    super(props);
    let { title, authors, publishedDate } = this.props.book.volumeInfo;
    this.state = {
      title: title,
      author: authors[0],
      publishedDate: publishedDate
    };
  }

  handleChange = event => this.setState({ [event.target.name]: event.target.value });

  checkForString = data => typeof data !== 'string';

  checkData = (title, author, publishedDate) => {
    if (this.checkForString(title)) {
      alert('title Must Be a string');
      return false;
    }

    if (this.checkForString(author)) {
      alert('author Must Be a string');
      return false;
    }
    return true;
  };

  correctString(string) {
    return string
      .split(' ')
      .map(word => this.capitalize(word))
      .join(' ');
  }

  capitalize(string) {
    let simpleString = string.replace(/[^A-Za-z0-9]/g, '');
    return simpleString.charAt(0).toUpperCase() + simpleString.slice(1).toLowerCase();
  }

  handleSubmit = event => {
    event.preventDefault();
    let { title, author, publishedDate } = this.state;
    if (!this.checkData(title, author, publishedDate)) {
      return;
    }

    if (this.checkTitle(title)) {
      return;
    }
    title = this.correctString(title);

    author = this.correctString(author);

    this.props.onEdit(this.props.book.id, title, author, publishedDate);
    this.props.toggleModal();
  };

  checkTitle(title) {
    const TitleExists = this.props.books.filter(
      book => book.volumeInfo.title === title && this.props.book.id !== book.id
    );
    if (TitleExists.length) {
      this.props.errorMessage(`This Title name: "${title}" already exists`);
      return true;
    }
    return false;
  }
  render() {
    const { title, authors, publishedDate } = this.props.book.volumeInfo;

    const InputArray = [
      { title: 'Title:', state: 'title', default: title, type: 'text' },
      { title: 'Author:', state: 'author', default: authors[0], type: 'text' },
      { title: 'Date:', state: 'publishedDate', default: publishedDate, type: 'date' }
    ];

    return (
      <Form onSubmit={this.handleSubmit}>
        <Header>Edit Book</Header>
        {InputArray.map(item => (
          <InputLabel grid-area={item.title}>
            {item.title}
            <InputBox
              placeholder={`please enter ${item.title}`}
              name={item.title}
              type={item.type}
              defaultValue={item.default}
              title={this.state[item.state]}
              onChange={this.handleChange}
              required
            />
            {!this.state[item.state] && <Validator>{item.title} can`t be empty</Validator>}
          </InputLabel>
        ))}
        <Save type="submit" title="Save" />
        <Cancel onClick={this.props.toggleModal}>Cancel</Cancel>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return state.books;
};

const mapDispatchToProps = dispatch => {
  return {
    onEdit: (id, title, author, publishedDate) => {
      dispatch(editBook(id, title, author, publishedDate));
    },
    errorMessage: message => {
      dispatch(showError(message));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
