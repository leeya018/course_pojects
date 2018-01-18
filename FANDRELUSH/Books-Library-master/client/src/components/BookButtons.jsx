import React, { Component } from 'react';
import Modal from 'react-modal';
import EditForm from './EditForm';
import DeleteBook from './DeleteBook';
import { customStyles } from '../customStyle/modalStyle';

import { Wrapper, EditButton, DeleteButton } from '../styled/Buttons.styled';

class BooksButtons extends Component {
  constructor(props) {
    super(props);
    this.state = { deletePopup: false, editModalState: false };
  }

  toggleEditModal = () => this.setState({ editModalState: !this.state.editModalState });

  toggleDeletePopup = () => this.setState({ deletePopup: !this.state.deletePopup });

  render() {
    const { book } = this.props;
    return (
      <Wrapper>
        <EditButton onClick={() => this.toggleEditModal()}>Edit</EditButton>
        <DeleteButton onClick={() => this.toggleDeletePopup()}>Delete</DeleteButton>
        <Modal style={customStyles} isOpen={this.state.editModalState}>
          <EditForm toggleModal={this.toggleEditModal} book={book} />
        </Modal>
        <Modal style={customStyles} isOpen={this.state.deletePopup}>
          <DeleteBook id={book.id} toggleDeletePopup={this.toggleDeletePopup} />
        </Modal>
      </Wrapper>
    );
  }
}

export default BooksButtons;
