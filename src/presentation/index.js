import React from 'react';
import { Deck, Heading, Slide, Text, List, ListItem } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import Landing from './slides/Landing';
import Ending from './slides/Ending';
import TemplateOne from './slides/TemplateOne';
import TemplateTwo from './slides/TemplateTwo';

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#000',
    quarternary: '#fff',
  },
  {
    primary: 'Din',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
        contentHeight={'100%'}
        contentWidth={'100%'}
      >
        <Slide>
          <Landing
            title={'What Is Cryptocurrency Wallet'}
            subTitle={'Cobo FE'}
          />
        </Slide>
        <Slide>
          <TemplateOne>
            <Heading size={1} caps lineHeight={1} textColor="secondary">
              Cobo Wallet Is A Cryptocurrency Wallet
            </Heading>
            <Text margin="10px 0 0" textColor="secondary" size={1} bold>
              The Feature Is Awesome
            </Text>
          </TemplateOne>
        </Slide>
        <Slide>
          <TemplateTwo title={'Cobo Wallet Is Awesome'}>
            <List>
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
            </List>
          </TemplateTwo>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Ending />
        </Slide>
      </Deck>
    );
  }
}
