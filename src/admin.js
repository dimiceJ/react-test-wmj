import React, { Component } from 'react';
import { Row, Col } from 'antd';


import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import './style/reset.css'
import './style/common.less'
import Home from './pages/home/home'


class Admin extends Component {


  render() {
    return (
      <div>
        <Row className='container' >
          <Col span={4} className='nav-left'>
            <NavLeft></NavLeft>
          </Col>
          <Col span={20} className='main' >
            <Header></Header>
            <Row className='content'>
              {/* content */}
              <Home></Home>
              </Row>
            <Footer></Footer>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Admin;
