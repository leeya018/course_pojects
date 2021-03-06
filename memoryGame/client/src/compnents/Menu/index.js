import 'antd/lib/select/style/css';
import 'antd/lib/button/style/css';
import { Link } from 'react-router-dom';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import 'react-flags-select/scss/react-flags-select.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Input, AutoComplete, Button, Select } from 'antd';
import React, { Component } from 'react';
import { Signature, MenuContainer, MenuS, GameTitle } from './Menu.styled';
const { Option } = Select;

const gameTitle = 'Memory Game';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { level, category,countryCode, name } = this.props;

    return (
        <MenuContainer>
          <MenuS>
            <GameTitle>{gameTitle}</GameTitle>
            <AutoComplete
              style={{ width: 200 }}
              onChange={value => {
                name = value;
              }}
              placeholder="JOHN DOE"
            />
            <Select
              style={{ width: 200 }}
              onChange={value => {
                category = value;
              }}
              placeholder="Select Category"
              optionFilterProp="children"
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="Animalls">Animalls</Option>
              <Option value="Socker">Socker</Option>
              <Option value="Candies">Candies</Option>
              <Option value="Famous">Famous</Option>
            </Select>
            <Select
              style={{ width: 200 }}
              onChange={value => {
                level = parseInt(value);
              }}
              placeholder="Select your level"
              optionFilterProp="children"
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
            </Select>
            <Link to={`game/${level}`}>
              <Button
                style={{ width: '100%' }}
                type="primary"
                onClick={()=>this.props.updateGame(level, category, name, countryCode)}
              >
                Start Game
              </Button>
            </Link>
            <Link to="/records">
              <Button style={{ width: '100%' }} type="primary" onClick={this.showModal}>
                Records
              </Button>
            </Link>
            <ReactFlagsSelect defaultCountry="US" onSelect={value => (countryCode = value)} />
          </MenuS>
          {/* <Signature>kfskjafjkdsahkjhsakj </Signature> */}
        </MenuContainer>
    );
  }
}

export default Menu;
