import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

const fixVal = value => {
  value = value.replace(/[^a-zA-Z ]/g, '');
  value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  return value;
};
class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
    this.updateFilter = this.updateFilter.bind(this);
  }
  updateFilter(e, value) {
    let { books } = this.props;
    this.setState({ title: value });
    let filteredBooks = books.filter(book => book.title.includes(fixVal(value)));
    this.props.updateFilteredBooks(filteredBooks);
  }

  render() {
    let { title } = this.state;
    return (
      <div>
        <TextField hintText="filter title" value={title} onChange={this.updateFilter} />
      </div>
    );
  }
}

export default Filter;
