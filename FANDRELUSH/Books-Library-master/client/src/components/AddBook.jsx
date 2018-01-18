import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addBook } from '../redux/actions/book';
import { showError } from '../redux/actions/modal';
import { Form, Header, InputBox, InputLabel, Save, Cancel } from '../styled/AddBook.styled';

const idCounter = 0;

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', author: '', publishedDate: '', imageURL: '' };
  }

  handleChange = event => this.setState({ [event.target.name]: event.target.value });

  checkForString = data => typeof data !== 'string';

  checkData = (title, author, publishedDate, imageURL) => {
    return (
      [title, author, imageURL].filter(item => {
        if (this.checkForString(item)) {
          this.props.errorMessage(`${item} - Must Be a string`);
          return false;
        }
        return true;
      }).length === 3
    );
  };

  correctString(string) {
    return string
      .split(' ')
      .map(word => this.capitalize(word))
      .join(' ');
  }

  checkTitle(title) {
    const TitleExists = this.props.books.filter(book => book.volumeInfo.title === title);
    if (TitleExists.length) {
      this.props.errorMessage(`This Title name: "${title}" already exists`);
      return true;
    }
    return false;
  }

  capitalize(string) {
    let simpleString = string.replace(/[^A-Za-z0-9]/g, '');
    return simpleString.charAt(0).toUpperCase() + simpleString.slice(1).toLowerCase();
  }

  handleSubmit = event => {
    event.preventDefault();
    let { title, author, publishedDate, imageURL } = this.state;
    if (!this.checkData(title, author, publishedDate, imageURL)) {
      return;
    }

    if (this.checkTitle(title)) {
      return;
    }

    title = this.correctString(title);
    author = this.correctString(author);

    this.props.onAdd({
      id: `mATF${idCounter}eVI${idCounter}IUC`,
      volumeInfo: {
        imageLinks: {
          thumbnail: imageURL
        },
        title: title,
        publishedDate: publishedDate,
        authors: author
      }
    });

    this.props.toggleModal();
  };

  render() {
    const InputArray = [
      { title: 'Title:', state: 'title', type: 'text' },
      { title: 'Author:', state: 'author', type: 'text' },
      { title: 'Date:', state: 'publishedDate', type: 'date' },
      { title: 'ImageURL:', state: 'imageURL', type: 'text' }
    ];

    return (
      <Form onSubmit={this.handleSubmit}>
        <Header>Add Book</Header>
        {InputArray.map(item => (
          <InputLabel grid-area={item.title}>
            {item.title}
            <InputBox
              placeholder={`please enter ${item.title}`}
              name={item.title}
              type={item.type}
              title={this.state[item.state]}
              onChange={this.handleChange}
              required
            />
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
    onAdd: book => {
      dispatch(addBook(book));
    },
    errorMessage: message => {
      dispatch(showError(message));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
