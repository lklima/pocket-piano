import React, { useState } from 'react';
import { useFonts } from 'expo-font';

// components
import NoteKey from '../../components/NoteKey';
import TopBar from '../../components/TopBar';

// utils
import { notes } from '../../utils';

// styles
import { Container, KeysContent } from './styles';

const Home = () => {
  const [naturalKeySize, setNaturalKeySize] = useState(0);
  const [lcdText, setLcdText] = useState('POCKET PIANO');
  const [fontLoaded] = useFonts({
    Dotdot: require('../../assets/fonts/Dotdot.ttf'),
  });

  let timeOutId: any;

  const resetLcdText = () => {
    timeOutId = setTimeout(() => setLcdText('POCKET PIANO'), 800);
  };

  const cancelReset = () => clearInterval(timeOutId);

  if (!fontLoaded) {
    return null;
  }

  return (
    <Container>
      <TopBar lcdText={lcdText} />
      <KeysContent>
        {notes.map(({ note, isNatural }, index) => (
          <NoteKey
            key={note}
            index={index}
            note={note}
            isNatural={isNatural}
            getNaturalKeySize={setNaturalKeySize}
            naturalKeySize={naturalKeySize}
            setLcdText={setLcdText}
            resetLcdText={resetLcdText}
            cancelReset={cancelReset}
          />
        ))}
      </KeysContent>
    </Container>
  );
};

export default Home;
