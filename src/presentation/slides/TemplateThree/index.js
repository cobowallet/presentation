import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 64px;
  color: #000;
  text-align: left;
`;

const Container = styled.div`
  background: #fff;
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100%;
  padding: 80px;
  flex-direction: column;
`;

const Divider1 = styled.div`
  width: 90%;
  height: 20px;
  background-color: #a700ff;
  opacity: 0.5;
  position: absolute;
  left: 0;
`;

const Divider2 = styled.div`
  width: 90%;
  height: 20px;
  background-color: #0003ff;
  opacity: 0.5;
  position: absolute;
  top: 8px;
  left: 10px;
`;

const DividerContainer = styled.div`
  margin: 20px 0;
  position: relative;
  width: 100%;
  height: 20px;
`;

export default class TemplateThree extends React.PureComponent {
  render() {
    return (
      <Container>
        <Title>{this.props.title}</Title>
        <DividerContainer>
          <Divider1 />
          <Divider2 />
        </DividerContainer>
        {this.props.children}
      </Container>
    );
  }
}
