import React, { Component } from 'react';
import { Image, Carousel } from 'react-bootstrap';
import ControlledCarousel from './ControlledCarousel'


export default class Home extends Component {

  render() {
    return (
      <div>
        <ControlledCarousel />
        <div width="auto">
           <p> Dunian Coutinho Sampa </p>
        </div>
      </div>
    )
  }
}