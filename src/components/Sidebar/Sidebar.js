import React, { Component } from 'react'
import './sidebar.css'
import {Menu, Icon, Switch} from 'antd'
import {Link} from 'react-router-dom'

const { SubMenu } = Menu

class Sidebar extends Component {
  state = {
    mode: 'inline',
    theme: 'light'
  }
  render(){

    return(
      <div className="sidebar">
        <div className="sidebar-title">
          吮指后台
        </div>
        <div className="sidebar-content">
          <Menu className='menu'
          style={{ width: 200 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={this.state.mode}
          theme={this.state.theme}
        >
          <SubMenu key="sub1" title={<span><Icon type="file" /><span>订单管理</span></span>}>
            <Menu.Item key="3"><Link to='/dashboard'>待发货</Link></Menu.Item>
            <Menu.Item key="4"><Link to='/dashboard/complete'>已完成</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="file" /><span>甜点管理</span></span>}>
            <Menu.Item key="7"><Link to='/mousse'>所有甜点</Link></Menu.Item>
            <Menu.Item key="8"><Link to='/new'>新建甜点</Link></Menu.Item>
          </SubMenu>
        </Menu>
        </div>
        <div className="sidebar-logout">
          <div className="logout">登出</div>
          <div className="username">admin</div>
        </div>
      </div>
    )
  }
}

export default Sidebar
