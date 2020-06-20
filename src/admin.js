import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';


import Header from './components/Header'
import Footer from './components/Footer'

class Admin extends Component {


  render() {
    return (
      <div>
        <Row >
          <Col span={3} ></Col>
          <Col span={21} >
            <Header></Header>
            <Footer></Footer>
          </Col>
        </Row>

      </div>





    );
  }
}

export default Admin;
