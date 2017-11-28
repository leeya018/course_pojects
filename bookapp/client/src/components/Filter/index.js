import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Filter extends Component {  
  constructor(props) {
    super(props);
    this.state = { title: '' ,originBooks:props.books};
    this.updateFilter = this.updateFilter.bind(this);
  }
  updateFilter(e, value) {
    let { originBooks } = this.state;
    debugger
    this.setState({title:value})
    let filteredBooks = originBooks.filter(book => book.title.includes(value));
    this.props.updateBooks(filteredBooks);
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
