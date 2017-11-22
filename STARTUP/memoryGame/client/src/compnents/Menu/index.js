import 'antd/lib/select/style/css';
import 'antd/lib/button/style/css';
import { Link } from 'react-router-dom';

import { Button, Select } from 'antd';
import React, { Component } from 'react';
import { MenuContainer, Menu, GameTitle } from './Menu.styled';
const { Option } = Select;

export default props => {
  const gameTitle = 'Memory Game';

  let { updateGame, level, category } = props;

  return (
    <MenuContainer>
      <Menu>
        <GameTitle>{gameTitle}</GameTitle>
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
        <Link to="/game">
          <Button
            style={{ width: '100%' }}
            type="primary"
            onClick={() => {
              updateGame(level, category);
            }}
          >
            Start Game
          </Button>
        </Link>
      </Menu>
    </MenuContainer>
  );
};
