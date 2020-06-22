import React, { Component } from 'react';
import { Menu, Button } from 'antd';
import MenuConfig from '../../config/menuConfig'
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

import './index.less'

const { SubMenu } = Menu;

class NavList extends Component {
  componentWillMount(){
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({
      menuTreeNode
    })
  }

  renderMenu = (data) => {
    return data.map((item) => {
      if(item.children){
        return (
          <SubMenu key={item.key}  title={item.title}>
           {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item key={item.key}  title={item.title}>{item.title}</Menu.Item>
    })
  }


  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render() {
    return (
      <div>
        {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button> */}
        <div className='logo'>
          <img src="/assets/logo-ant.svg" alt=""/>
          <h1>react Test</h1>
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}

export default NavList;
