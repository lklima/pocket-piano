import React, { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import SoundPlayer from 'react-native-sound-player';

// styles
import * as S from './styles';

// types
import { KeyProps } from './types';

// utils
import { getMargin } from './utils';

const NoteKey = ({
  index,
  isNatural,
  note,
  naturalKeySize,
  getNaturalKeySize,
  setLcdText,
  resetLcdText,
  cancelReset,
}: KeyProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const [keyMargin, setKeyMargin] = useState(0);

  useEffect(() => {
    if (!isNatural) {
      const margin = getMargin(naturalKeySize, index);

      setKeyMargin(margin);
    }
  }, [isNatural, naturalKeySize, index]);

  const playNote = async () => {
    cancelReset();
    setLcdText(`NOTE ${note.replace('4', '')}`);
    setIsPressed(true);
    SoundPlayer.onFinishedLoading(() => {});
    SoundPlayer.playSoundFile(note, 'mp3');
  };

  const stopNote = async () => {
    resetLcdText();
    setIsPressed(false);
    SoundPlayer.stop();
  };

  const onLayout = ({ nativeEvent }: { nativeEvent: any }) => {
    if (isNatural && index === 0) {
      getNaturalKeySize(nativeEvent?.layout?.height);
    }
  };

  return isNatural ? (
    <S.NaturalKey
      isPressed={isPressed}
      onTouchStart={playNote}
      onTouchEnd={stopNote}
      onLayout={onLayout}
      keyMargin={keyMargin}
      naturalKeySize={naturalKeySize}
    >
      <S.NaturalNoteName isPressed={isPressed}>
        {note.replace('4', '')}
      </S.NaturalNoteName>
    </S.NaturalKey>
  ) : (
    <S.AccidentalKey
      isPressed={isPressed}
      onTouchStart={playNote}
      onTouchEnd={stopNote}
      keyMargin={keyMargin}
      naturalKeySize={naturalKeySize}
    >
      <S.AccidentalNoteName>{note.replace('4', '')}</S.AccidentalNoteName>
    </S.AccidentalKey>
  );
};

export default NoteKey;
