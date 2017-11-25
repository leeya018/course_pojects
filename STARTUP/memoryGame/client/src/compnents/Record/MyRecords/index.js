import 'antd/lib/table/style/css';
import React, { Component } from 'react';

import { Table } from 'antd';
import { TableContainer, MyRecordsTitle, ColTab } from '../Records.style';
import axios from 'axios';
import api from '../../App/api';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Level',
    dataIndex: 'level',
    key: 'level'
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category'
  },
  {
    title: 'Score',
    dataIndex: 'score',
    key: 'Score'
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time'
  }
];
const myRecTitle = 'My Records';
const tableStyle = { fontSize: '100px', fontWeight: 'bold' };

class MyRecords extends Component {
  constructor(props) {
    super(props);
    this.state = { myRecs: [] };
  }
  componentDidMount() {
    let { name } = this.props;
    api.getMyRecords(name).then(myRecs => {
      debugger;
      myRecs = myRecs.map(rec => {
        let { time } = rec;
        time = `${time.minutes}:${time.seconds}`;
        rec.time = time;
        return rec;
      }, this);
      console.log(myRecs);
      this.setState({ myRecs });
    });
  }
  // getMyRecords() {
  //   // let name ="lee"
  // }

  render() {
    let { myRecs } = this.state;
    let code = 'GIB';
    return (
      <TableContainer>
        <ColTab>
          {<MyRecordsTitle>{myRecTitle}</MyRecordsTitle>}
          <Table dataSource={myRecs} columns={columns} style={tableStyle} />;
        </ColTab>
      </TableContainer>
    );
  }
}

export default MyRecords;
