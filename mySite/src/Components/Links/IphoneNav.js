import 'antd/lib/menu/style/css';
import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';
import Main from '../Main';
import About from '../About';
import './IphoneNav.css'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const about = 'about';
const experience = 'experience';
const education = 'education';
const myProjects = 'myProjects';
const tips = 'tips';
const contact = 'contact';

class IphoneNav extends React.Component {
  constructor() {
    super()

    this.state = {
      url: "",
      display: 'none'
    
    }
  }
  handleClick = (e) => {
    console.log('click ', e);
  }
  updateUrl =(path)=> {
    
    let url = window.location.href
    url = url.slice(21, url.length)
    if ((url.split('/').length - 1) > 1) {
      url = `../${path}`
    } else {
      url = path
    }
    return url
  }



  toggleDisplay = () => {
    let {display} = this.state
    this.setState({
      display:(display==="block")?"none":"block"
    });
  }
  render() {
    let {display} = this.state
    
    return (
      <div className="iphoneNav" style={{ width: 256 }}>
        <div className="burger" onClick={this.toggleDisplay}></div>
        <Menu className="menuNav"
        onClick={this.handleClick}
        style={{
        width: 256,
        display:display
      }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline">
          <Menu.Item key="2" >
            <Link to={""} onClick={this.toggleDisplay}>
              <div>About me</div>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to={this.updateUrl(experience)} onClick={this.toggleDisplay}>
              <div>My Experience</div>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to={this.updateUrl(education)} onClick={this.toggleDisplay}>
              <div>My Education</div>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to={this.updateUrl(myProjects)} onClick={this.toggleDisplay}>
              <div>My Projects</div>
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to={this.updateUrl(contact)} onClick={this.toggleDisplay}>
              <div>Contact</div>
            </Link>
          </Menu.Item>
          {/* <Menu.Item key="7">
            <Link to={this.updateUrl(tips)} onClick={this.toggleDisplay}>
              <div>טיפים</div>
            </Link>
          </Menu.Item>
          <Menu.Item key="8">
            <Link to={this.updateUrl(contact)} onClick={this.toggleDisplay}>
              <div>צור קשר</div>
            </Link> */}
          {/* </Menu.Item> */}
      </Menu>

      </div>
    );
  }
}


export default IphoneNav;