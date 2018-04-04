import styled from 'styled-components';
import PlanetSVG from './assets/planet.svg';
import EthMove from './assets/ethmove.svg';
import BtcMove from './assets/btcmove.svg';
import Stars from './stars';
const PRIMARY_COLOR = '#3C0055';
const PRIMARY_GRADIENT = 'linear-gradient(180deg, #3C0055 0%, #002585 100%)';

export const Title = styled.div`
  font-size: 64px;
  color: #fff;
`;

export const StyledBtcMove = styled.img`
  position: absolute;
  bottom: -110px;
  right: -80px;
  width: 321px;
`;

StyledBtcMove.defaultProps = {
  src: BtcMove,
};

export const StyledEthMove = styled.img`
  position: absolute;
  bottom: -10px;
  right: 60px;
  width: 272px;
`;

StyledEthMove.defaultProps = {
  src: EthMove,
};

export const StarsOne = styled(Stars)`
  position: absolute;
  top: 0;
  right: 100px;
`;

export const StarsTwo = styled(Stars)`
  position: absolute;
  top: 100px;
  right: 0;
`;

export const StarsThree = styled(Stars)`
  position: absolute;
  bottom: 20px;
  right: 150px;

  @media (max-width: 768px) {
    bottom: 20px;
    right: 200px;
  }
`;

export const StarsFour = styled(Stars)`
  position: absolute;
  top: 150px;
  right: 350px;
`;

export const SectionContainer = styled.div`
  background-color: ${PRIMARY_COLOR};
  background-image: ${PRIMARY_GRADIENT};
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 100px;
`;

export const StyledPlanet = styled.img`
  position: absolute;
  width: 360px;
  top: 0;
  left: 20%;

  @media (max-width: 768px) {
    left: -100px;
  }
`;

StyledPlanet.defaultProps = {
  src: PlanetSVG,
};
