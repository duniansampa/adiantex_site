
import React, { Component } from 'react';
import {Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import ImgCarousel from '../../images/1900x1080.png';

export default class ControlledCarousel extends Component {
  constructor(props){
    super(props)
    this.state = {
      controls: false
    };
  }

  handleMouseEnter = () => {
    this.setState({controls: true})
  }

  handleMouseLeave = () => {
    this.setState({controls: false})
  }

  render() {

    const IntCarouselItem =  styled(Carousel.Item)`
        height: 65vh;
        min-height: 300px;
        background: no-repeat center center scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    `;

    IntCarouselItem.propTypes =  {
        ...Carousel.propTypes
    };

    return (
      <Carousel 
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        controls={this.state.controls}
        interval={5000}
      >
        <IntCarouselItem className="carousel-item" style={{backgroundImage: 'url(' + ImgCarousel +')',  }}  >
          <Carousel.Caption >
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </IntCarouselItem>
        <IntCarouselItem className="carousel-item" style={{backgroundImage: 'url(' + ImgCarousel +')' }} >
          <Carousel.Caption >
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </IntCarouselItem>
      </Carousel>
    );
  }
}