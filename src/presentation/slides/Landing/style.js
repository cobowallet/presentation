import styled, { keyframes } from 'styled-components';
import Mobile from './assets/mobile';
import PieChart from './assets/piechart';
import Transaction1 from './assets/transaction1';
import Transaction2 from './assets/transaction2';
import MobileShadow from './assets/mobileShadow';
import Card from './assets/card';
import BTC1 from './assets/btc1.svg';
import BTC2 from './assets/btc.svg';
import DASH from './assets/dash.svg';
import ETH from './assets/eth.svg';
import EOS from './assets/eos.svg';

export const LandingContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom right, #a700ff, #0003ff);
  @media (max-width: 768px) {
    height: 600px;
  }
`;

export const Content = styled.div`
  max-width: 1440px;
  height: 100%;
  padding-top: 80px;
  margin: auto;
`;
//  background-image: linear-gradient(20deg, #75b8ff 0%, #7500ff 100%);

export const VerticalBTC = styled.img`
  position: absolute;
  width: 140px;
  bottom: 12%;
  right: 32%;

  @media (max-width: 768px) {
    width: 75px;
    bottom: 4%;
    right: 58%;
  }
`;

export const HorizationalBTC = styled.img`
  width: 130px;
  position: absolute;
  bottom: 56%;
  right: 5%;

  @media (max-width: 768px) {
    display: none;
  }
`;

HorizationalBTC.defaultProps = {
  src: BTC2,
};

VerticalBTC.defaultProps = {
  src: BTC1,
};

export const Dash = styled.img`
  position: absolute;
  width: 130px;
  bottom: 45%;
  right: 48%;

  @media (max-width: 1280px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: block;
    width: 75px;
    bottom: 35%;
    right: 72%;
  }
`;

Dash.defaultProps = {
  src: DASH,
};

export const Eth = styled.img`
  width: 140px;
  position: absolute;
  bottom: 8%;
  right: 22%;

  @media (max-width: 768px) {
    width: 75px;
    bottom: 10%;
    right: 40%;
  }
`;

Eth.defaultProps = {
  src: ETH,
};

export const Eos = styled.img`
  position: absolute;
  width: 140px;
  bottom: 10%;
  right: 39%;

  @media (max-width: 768px) {
    width: 72px;
    bottom: 13%;
    right: 36%;
  }
`;

Eos.defaultProps = {
  src: EOS,
};

export const StyledCard = styled(Card)`
  position: absolute;
  width: 320px;
  height: 348px;
  top: 50%;
  right: 39%;

  @media (max-width: 768px) {
    width: 160px;
    top: 47%;
    right: 50%;
  }
`;

export const StyledMobileContainer = styled.div`
  position: absolute;
  bottom: 190px;
  right: 19%;
  width: 262px;
  height: 647px;

  @media (max-width: 768px) {
    width: 130px;
    height: 320px;
    bottom: 7%;
    right: 40px;
  }
`;

const BlurAnimation = keyframes`
  0% {
    filter: blur(5px);
  }
  20% {
    filter: blur(5px);
  }
  50% {
    filter: blur(25px);
  }
  80% {
    filter: blur(5px);
  }
  100% {
    filter: blur(5px);
  }
`;

export const StyledMobile = styled(Mobile)`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  animation: ${props =>
    props.blur ? `${BlurAnimation} 2s ease infinite` : 'none'};
`;

export const StyledMobileShadow = styled(MobileShadow)`
  position: absolute;
  top: 10%;
  right: -15%;
  width: 96%;

  @media (max-width: 768px) {
    width: 88%;
    right: -40px;
  }
`;

export const StyledPieChart = styled(PieChart)`
  position: absolute;
  top: 9%;
  right: 6%;
  width: 100%;

  @media (max-width: 768px) {
    right: 2%;
  }
`;

export const StyledTransaction1 = styled(Transaction1)`
  position: absolute;
  top: 42%;
  right: -5px;
  width: 100%;
`;

export const StyledTransaction2 = styled(Transaction2)`
  position: absolute;
  top: 58%;
  right: -5px;
  width: 100%;

  @media (max-width: 768px) {
    top: 54%;
  }
`;

export const Heading = styled.div`
  font-family: 'DinBold';
  font-size: 64px;
  font-weight: ${props => (props.locale === 'en' ? 'normal' : 'bold')};
  color: #fff;
  max-width: 840px;
  position: absolute;
  top: 210px;
  left: 200px;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 26px;
    top: 76px;
    left: 0;
    padding: 0 32px;
  }
`;

export const HeadingText = styled.p`
  font-size: 44px;
  font-weight: normal;
  line-height: 34px;
  margin: 32px 0 66px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    line-height: ${props => (props.locale === 'en' ? '22px' : '26px')};
    margin: 12px 0 24px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-flow: row;

  > div {
    margin-right: 36px;
  }
`;
