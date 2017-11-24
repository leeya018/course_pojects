import 'antd/lib/tabs/style/css';
import 'antd/lib/modal/style/css';
import React, { Component } from 'react';
import { Modal, Tabs, Button } from 'antd';
import { Link } from 'react-router-dom';

import MyRecords from './MyRecords';
import WorldRecords from './WorldRecords';
import axios from 'axios';
import api from '../App/api';
import { ItemsRow } from './Records.style';
const TabPane = Tabs.TabPane;

class Records extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalText: '',
      visible: false,
      confirmLoading: false,
      name: '',
      showTabs: false
    };
    this.handleOk = this.handleOk.bind(this);
    this.showModal = this.showModal.bind(this);
  }
  componentWillMount() {
    // let { name } = this.props;
    let name = 'lee';
    this.setState({ name });
    if (name === '') {
      // this.showModal();
    } else {
      this.setState({ showTabs: true });
    }
  }
  showModal() {
    this.setState({
      visible: true
    });
  }
  handleOk() {
    this.setState({
      ModalText: 'Thnx Man',
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
        showTabs: true
      });
    }, 500);
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false
    });
  };

  render() {
    let { visible, confirmLoading, ModalText, name, showTabs } = this.state;

    return (
      <div>
        <Modal
          title="Title"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          enter name :<input autoFocus onChange={({ target }) => this.setState({ name: target.value })} />
          <p>{ModalText}</p>
        </Modal>
        {showTabs && (
          <ItemsRow>
            <Link to="/" style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button style={{ width: '10%' }} type="primary">
                Home
              </Button>
            </Link>
            <Tabs type="card">
              <TabPane tab="MyRecords" key="1">
                <MyRecords name={name} />
              </TabPane>
              <TabPane tab="WorldRecords" key="2">
                <WorldRecords name={name} />
              </TabPane>
            </Tabs>
          </ItemsRow>
        )}
        }
      </div>
    );
  }
}

export default Records;
