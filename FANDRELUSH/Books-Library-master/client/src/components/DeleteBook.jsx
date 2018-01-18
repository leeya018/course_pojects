import React from 'react';
import { connect } from 'react-redux';
import { Wrapper, Button, Title } from '../styled/DeleteBook.styled';

import { deleteBook } from '../redux/actions/book';

const DeleteBook = ({ toggleDeletePopup, onDelete, id }) => (
  <Wrapper>
    <Title>Are you Sure?</Title>
    <Button
      onClick={() => {
        onDelete(id);
        toggleDeletePopup();
      }}
    >
      Delete Book
    </Button>
    <Button onClick={toggleDeletePopup}>Cancel</Button>
  </Wrapper>
);

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteBook(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(DeleteBook);
