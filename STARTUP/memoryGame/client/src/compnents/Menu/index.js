import 'antd/lib/select/style/css';
import { Button, Select } from 'antd';
import React, { Component } from 'react';
import { Menu, GameTitle } from './Menu.styled';
const { Option } = Select;

export default props => {
  const gameTitle = 'Memory Game';
  let {showMenu }= props;

  
  return (
    <Menu showMenu ={showMenu }>
      <GameTitle>{gameTitle}</GameTitle>
      
      <Select
        showSearch
        style={{ width: 200 }}
        onChange={value => {
          props.updateCategory(value);
        }}
        placeholder="Select Category"
        optionFilterProp="children"
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        <Option value="animalls">Animalls</Option>
        <Option value="Socker">Socker</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
      </Select>


      <Select
        showSearch
        style={{ width: 200 }}
        onChange={value => {
          props.updateLevel(parseInt(value));
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
      <Button type="primary">primary</Button>
i
    </Menu>
  );
};
