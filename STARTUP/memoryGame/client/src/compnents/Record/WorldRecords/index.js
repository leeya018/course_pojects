import 'antd/lib/table/style/css';
import ReactCountryFlag from 'react-country-flag';

import React, { Component } from 'react';
import { Table } from 'antd';
import { TableContainer, MyRecordsTitle, ColTab } from '../Records.style';
import axios from 'axios';
import api from '../../App/api';

const { Column } = Table;

const worldRecTitle = 'World Records';
const tableStyle = { fontSize: '100px', fontWeight: 'bold' };

class WorldRecords extends Component {
  constructor(props) {
    super(props);
    this.state = { worldRecs: [] };
  }
  componentDidMount() {
    api.getWorldRecords().then(worldRecs => {
      worldRecs = worldRecs.map(rec => {
        let { time } = rec;
        time = `${time.minutes}:${time.seconds}`;
        rec.time = time;
        return rec;
      }, this);
      this.setState({ worldRecs });
    });
  }

  render() {
    let { worldRecs } = this.state;
    debugger;
    return (
      <TableContainer>
        <ColTab>
          {<MyRecordsTitle>{worldRecTitle}</MyRecordsTitle>}
          <Table dataSource={worldRecs} rowKey={rec => rec['_id']} style={tableStyle}>
            <Column title="Name" dataIndex="name" key="Name" render={name => name} />
            <Column title="Level" dataIndex="level" key="Level" render={level => level} />
            <Column title="Category" dataIndex="category" key="Category" render={category => category} />
            <Column title="Score" dataIndex="score" key="Score" render={score => score} />

            <Column title="Time" dataIndex="time" key="Time" render={time => time} />
            <Column
              title="CountryCode"
              dataIndex="countryCode"
              key="CountryCode"
              render={(countryCode, row, index) => {
                return <ReactCountryFlag code={countryCode} svg style={{width:"200px",height:"200px"}}/>;
              }}
            />
          </Table>
        </ColTab>
      </TableContainer>
    );
  }
}

export default WorldRecords;
