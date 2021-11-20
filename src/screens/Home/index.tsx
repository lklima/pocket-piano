import React, { useState } from 'react';

// components
import NoteKey from '../../components/NoteKey';
import TopBar from '../../components/TopBar';

// utils
import { notes } from '../../utils';

// styles
import { Container, KeysContent } from './styles';

const Home = () => {
  const [naturlKeySize, setNaturalKeySize] = useState(0);

  return (
    <Container>
      <TopBar />
      <KeysContent>
        {notes.map(({ note, isNatural }, index) => (
          <NoteKey
            key={note}
            index={index}
            note={note}
            isNatural={isNatural}
            getNaturalKeySize={setNaturalKeySize}
            naturalKeySize={naturlKeySize}
          />
        ))}
      </KeysContent>
    </Container>
  );
};

export default Home;
