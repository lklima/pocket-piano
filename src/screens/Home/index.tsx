import React from 'react';

// components
import NoteKey from '../../components/NoteKey';
import TopBar from '../../components/TopBar';

// styles
import { Container, KeysContent } from './styles';

const Home = () => {
  return (
    <Container>
      <TopBar />
      <KeysContent>
        <NoteKey />
        <NoteKey />
        <NoteKey />
        <NoteKey />
        <NoteKey isAcidental />
      </KeysContent>
    </Container>
  );
};

export default Home;
