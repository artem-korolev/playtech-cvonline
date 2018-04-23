import React, { Component } from 'react';


import Slideshow from 'react-slidez';

import slide1 from '../assets/slide1_2.jpg'
import slide2 from '../assets/slide2_2.jpg'

class Slider extends Component {
  render() {
      var settings = {
        showIndex: 0,
        showArrows: 0,
        autoplay: true,
        enableKeyboard: true,
        slideInterval: 10000,
        defaultIndex: 0,
        slides: [slide1, slide2],
        effect: 'fade',
        height: '100%',
        width: '100%'
      }
    return (
        <Slideshow {...settings}>
        </Slideshow>
    );
  }
}

export default Slider;
