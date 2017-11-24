import 'antd/lib/table/style/css';
import React, { Component } from 'react';
import { Table } from 'antd';
import { TableContainer, MyRecordsTitle, ColTab } from '../Records.style';
import axios from 'axios';
import api from '../../App/api';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    level: 1,
    category: 'Animalls',
    time: '11;22'
  },
  {
    key: '2',
    name: 'John',
    age: 2,
    category: 'Socker',
    time: '11;22'
  }
];

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
const worldRecTitle = 'World Records';
const tableStyle = { fontSize: '100px', fontWeight: 'bold' };

class WorldRecords extends Component {
  constructor(props) {
    super(props);
    this.state = { worldRecs: [] };
  }
  componentDidMount() {
    let {name}=this.props
     api.getMyRecords(name).then(worldRecs => {
      console.log(worldRecs);
      this.setState({ worldRecs });
    });
  }

  render() {
    let { worldRecs } = this.state;
    return (
      <TableContainer>
        <ColTab>
          {<MyRecordsTitle>{worldRecTitle}</MyRecordsTitle>}
          <Table dataSource={worldRecs} columns={columns} style={tableStyle} />;
        </ColTab>
      </TableContainer>
    );
  }
}

export default WorldRecords;
