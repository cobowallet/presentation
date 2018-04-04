import React from 'react';
import styled from 'styled-components';
import SpeedSection from './SpeedSection';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 80px;
  display: flex;
  flex-direction: column;
`;

export default class TemplateTwo extends React.PureComponent {
  render() {
    return (
      <Container>
        <SpeedSection title={this.props.title} />
        <ContentContainer>{this.props.children}</ContentContainer>
      </Container>
    );
  }
}
