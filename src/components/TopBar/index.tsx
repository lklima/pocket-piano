import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, ContainerH, Display, DisplayText } from './styles';

const TopBar = ({ lcdText }: { lcdText: string }) => {
  return (
    <Container>
      <ContainerH>
        <Display>
          <DisplayText>{lcdText}</DisplayText>
        </Display>
        <MaterialCommunityIcons name="metronome" size={44} color="white" />
      </ContainerH>
    </Container>
  );
};

export default TopBar;
