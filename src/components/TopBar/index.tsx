import React from 'react';

import { Container, ContainerH, Display, DisplayText } from './styles';

const TopBar = ({ lcdText }: { lcdText: string }) => {
  return (
    <Container>
      <ContainerH>
        <Display>
          <DisplayText>{lcdText}</DisplayText>
        </Display>
      </ContainerH>
    </Container>
  );
};

export default TopBar;
