import React, { Component } from 'react';
import { Col, Row } from 'antd';
import Utils from '../../utils/utils'
import './index.less'
import axios from '../../axios/index'

class Header extends Component {
  componentWillMount() {
    this.setState({
      userName: 'Mickey wong'
    })

    setInterval(() => {
     let sysTime = Utils.formateDate(new Date().getTime())
      this.setState({
        sysTime
      })
    }, 1000);
    this.getWeatherAPIData()
  }

  getWeatherAPIData(){
    let city = 'wuhan';
    let ak = '3p49MVra6urFRGOT9s8UBWr2';
    let url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=${ak}`
    axios.jsonp({
      url:url
    }).then((res)=>{
      console.log(res);
      let data = res.results[0].weather_data[0];
      this.setState({
        dayPictureUrl:data.dayPictureUrl,
        weather:data.weather
      })
    })
  }

  render() {
    return (
      <div className='header'>
        <Row className='header-top'>
          <Col span={24}>
            <span>欢迎，{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className='breadcrumb'>
          <Col span={4} className='breadcrumb-title'>首页</Col>
          <Col span={20} className='weather'>
          <span className='date'>{this.state.sysTime}</span>
          <span className='weather-deatile'>
            <img src={this.state.dayPictureUrl} alt=""/>
           {this.state.weather}
          </span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
