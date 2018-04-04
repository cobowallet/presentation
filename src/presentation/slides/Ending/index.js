/**
 * The animation of a beautiful Cobo text
 * The text itself is white so use a dark background behind it.
 */
import React from 'react';
import anime from 'animejs';
import styled from 'styled-components';
import Icon from './icon.js';
import './index.css';

// const PRIMARY_COLOR = '#21D4FD';
// const PRIMARY_GRADIENT = 'linear-gradient(20deg, #75B8FF 0%, #7500FF 100%)';

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100px;
  background: #000;
`;

class IconAnimation extends React.PureComponent {
  componentDidMount() {
    this.startDraw();
  }

  startDraw = () => {
    this.lineDrawing = anime({
      targets: '#svg-icon .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: (el, i) => i * 250,
      direction: 'alternate',
      loop: false,
    });
    setTimeout(this.startMove, 2000);
  };

  startMove = () => {
    this.ANIME_C = anime({
      targets: '.lines #path-c',
      translateX: -33,
      translateY: 13,
      fillOpacity: '0.85',
      opacity: '0.85',
      duration: 1000,
    });

    this.ANIME_O1 = anime({
      targets: '.lines #path-o1',
      translateX: -3,
      translateY: -13,
      fillOpacity: '0.45',
      opacity: '0.45',
      duration: 1000,
      delay: 200,
    });

    this.ANIME_B = anime({
      targets: '.lines #path-b',
      translateX: 3,
      translateY: -13,
      fillOpacity: '0.85',
      opacity: '0.85',
      duration: 1000,
      delay: 400,
    });

    this.ANIME_O2 = anime({
      targets: '.lines #path-o2',
      translateX: 33,
      translateY: 13,
      fillOpacity: '0.45',
      opacity: '0.45',
      duration: 1000,
      delay: 600,
    });

    setTimeout(this.deleteStroke, 500);
  };

  deleteStroke = () => {
    this.lineDrawing = anime({
      targets: '#svg-icon .lines path',
      strokeDashoffset: [0, anime.setDashoffset],
      easing: 'easeInOutSine',
      duration: 2000,
      delay: (el, i) => i * 250,
      direction: 'alternate',
      loop: false,
    });

    setTimeout(this.disappear, 1500);
  };

  disappear = () => {
    this.lineDrawing = anime({
      targets: '#svg-icon .lines path',
      fillOpacity: 0,
      easing: 'easeInOutSine',
      duration: 500,
      delay: (el, i) => i * 150,
      direction: 'alternate',
      loop: false,
    });

    setTimeout(this.startDraw, 1000);
  };

  render() {
    return (
      <Container style={this.props.style}>
        <Icon />
      </Container>
    );
  }
}

export default IconAnimation;
