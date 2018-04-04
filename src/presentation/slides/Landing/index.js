import React from 'react';
import anime from 'animejs';
import { styler, value, pointer, spring, listen } from 'popmotion';
import {
  StyledMobile,
  StyledPieChart,
  StyledTransaction1,
  StyledTransaction2,
  StyledMobileShadow,
  VerticalBTC,
  Dash,
  Eth,
  Eos,
  HorizationalBTC,
  LandingContainer,
  StyledCard,
  Heading,
  HeadingText,
  StyledMobileContainer,
  Content,
} from './style';
import './index.css';

class Landing extends React.PureComponent {
  componentDidMount() {
    setTimeout(this.animate, 1000);
    this.initPopmotion();
  }

  initPopmotion = () => {
    const balls = document.querySelectorAll('.drag');

    for (let i = 0; i < balls.length; i++) {
      const ballStyler = styler(balls[i]);
      this[`ballXY_${i}`] = value({ x: 0, y: 0 }, ballStyler.set);

      listen(balls[i], 'mousedown touchstart').start(() =>
        this.startTracking(`ballXY_${i}`)
      );
      listen(document, 'mouseup touchend').start(() =>
        this.stopTracking(`ballXY_${i}`)
      );
    }
  };

  startTracking = key => {
    pointer(this[key].get()).start(this[key]);
  };

  stopTracking = key => {
    spring({
      from: this[key].get(),
      velocity: this[key].getVelocity(),
      stiffness: 100,
      damping: 10,
    }).start(this[key]);
  };

  animate = () => {
    let translateX1 = -30;
    let translateX2 = -50;
    if (window.innerWidth <= 700) {
      translateX1 = -20;
      translateX2 = -45;
    }
    this.phoneContentAnimation = anime({
      targets: '.phoneContent',
      translateX: translateX1,
      opacity: 1,
      easing: 'easeInOutSine',
      duration: 800,
      delay: (el, i) => i * 150,
    });
    this.shadowAnimation = anime({
      targets: '.shadow',
      opacity: 1,
      translateX: translateX2,
      easing: 'easeInOutSine',
      duration: 800,
    });
  };

  render() {
    return (
      <LandingContainer>
        <Content>
          <StyledMobileContainer>
            <StyledMobile blur />
            <StyledMobile />
            <StyledMobileShadow className="shadow" />
            <StyledPieChart className="phoneContent" />
            <StyledTransaction1 className="phoneContent" />
            <StyledTransaction2 className="phoneContent" />
          </StyledMobileContainer>
          <StyledCard />
          <Heading className="text-bold">
            {this.props.title}
            <HeadingText className="text-regular">
              {this.props.subTitle}
            </HeadingText>
          </Heading>
          <Eos className="drag" />
          <Dash className="drag" />
          <Eth className="drag" />
          <VerticalBTC className="drag" />
          <HorizationalBTC className="drag" />
        </Content>
      </LandingContainer>
    );
  }
}

export default Landing;
