import React, { Component } from 'react';
import { Modal } from 'antd';

class MyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newRecordModal) {
      this.showModal();
      this.props.updateNewRecordModal(false);
    }
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true
    });
    this.setState({
      visible: false,
      confirmLoading: false
    });
  };
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false
    });
  };
  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div>
        <Modal
          title="Title"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
        </Modal>
      </div>
    );
  }
}

export default MyModal;
