import 'antd/lib/menu/style/css';
import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';
import Main from '../Main';
import About from '../About';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const about = "about"
const whywe = "whywe"
const forwho = "forwho"
const practiceProgram = "practiceProgram"
const tips = "tips"
const contact = "contact"

class MenuNav extends React.Component {
  constructor() {
    super()
    this.updateUrl = this
      .updateUrl
      .bind(this)
    this.state = {
      url: ""
    }
  }
  handleClick = (e) => {
    console.log('click ', e);
  }
  updateUrl(path) {
    let url = window.location.href
    url = url.slice(21, url.length)
    if ((url.split('/').length - 1) > 1) {
      url = `../${path}`
    } else {
      url = path
    }
    return url
  }
  render() {
    let {url} = this.state
    return (
      <Menu
        onClick={this.handleClick}
        style={{
        width: 256
      }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline">

        <SubMenu
          key="sub1"
          title={< span > <Icon type="setting"/> < span > Navigation Three </span></span >}>
          <Menu.Item key="1">
            ddsadsa
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={""}>
              <div>ראשי</div>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to={this.updateUrl(about)}>
              <div>אודות</div>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to={this.updateUrl(whywe)}>
              <div>למה אנחנו</div>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to={this.updateUrl(forwho)}>
              <div>למי זה מתאים</div>
            </Link>
          </Menu.Item>

          <Menu.Item key="6">

            <Link to={this.updateUrl(practiceProgram)}>
              <div>תוכנית אימונים</div>
            </Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link to={this.updateUrl(tips)}>
              <div>טיפים</div>
            </Link>
          </Menu.Item>

          <Menu.Item key="8">

            <Link to={this.updateUrl(contact)}>
              <div>צור קשר</div>
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>

    );
  }
}

export default MenuNav;