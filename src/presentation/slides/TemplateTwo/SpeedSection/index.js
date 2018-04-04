import React from 'react';
import anime from 'animejs';
import {
  SectionContainer,
  StarsOne,
  StarsTwo,
  StarsThree,
  StarsFour,
  StyledBtcMove,
  StyledEthMove,
  Title,
} from './style';

class SpeedSection extends React.PureComponent {
  componentDidMount() {
    // twinkle twinkle lucky star
    this.initTwinkle();
  }

  initTwinkle = () => {
    this.twinkle = anime({
      targets: '.stars',
      opacity: 1,
      easing: 'easeInOutSine',
      duration: 1000,
      delay: (el, i) => {
        return Math.random() * 100 * i;
      },
      direction: 'alternate',
      loop: true,
    });
    this.twinkleInverse = anime({
      targets: '.stars-reverse',
      opacity: 0.3,
      easing: 'easeInOutSine',
      duration: 1000,
      delay: (el, i) => {
        return Math.random() * 100 * i;
      },
      direction: 'alternate',
      loop: true,
    });
  };

  render() {
    return (
      <SectionContainer>
        {/* <StyledPlanet /> */}
        <StarsOne />
        <StarsTwo />
        <StarsThree />
        <StarsFour />
        <StyledBtcMove />
        <StyledEthMove />
        <Title>{this.props.title}</Title>
      </SectionContainer>
    );
  }
}

export default SpeedSection;
