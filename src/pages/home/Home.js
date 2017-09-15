import React, { Component } from 'react';
import { Image, Carousel } from 'react-bootstrap';
import carousel from '../../images/1900x1080.png';

class ControlledCarousel extends Component {
  constructor(props){
    super(props)
    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect = (selectedIndex, e) =>{
    alert('selected=' + selectedIndex + ', direction=' + e.direction);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    return (
      <Carousel 
        activeIndex={this.state.index} 
        direction={this.state.direction} 
        onSelect={this.handleSelect}
        wrap
      >
        <Carousel.Item className="carousel-item" style={{backgroundImage: 'url(' + carousel +')',  }}  >
          <Carousel.Caption >
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item" style={{backgroundImage: 'url(' + carousel +')' }} >
          <Carousel.Caption >
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item" style={{backgroundImage: 'url(' + carousel +')' }} >
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

class Home extends Component {

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

export default Home