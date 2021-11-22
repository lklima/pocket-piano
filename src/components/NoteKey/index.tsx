import React, { useEffect, useState } from 'react';
import { Audio } from 'expo-av';

// styles
import * as S from './styles';

// types
import { KeyProps } from './types';
import { Sound } from 'expo-av/build/Audio';

// utils
import { getMargin, getNote } from './utils';

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
  const [sounds, setSounds] = useState<Sound>();
  const [isPressed, setIsPressed] = useState(false);
  const [keyMargin, setKeyMargin] = useState(0);

  useEffect(() => {
    (async () => {
      const { sound } = await Audio.Sound.createAsync(getNote(note));

      setSounds(sound);
    })();
  }, []);

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
    await sounds?.playAsync();
  };

  const stopNote = async () => {
    resetLcdText();
    setIsPressed(false);
    await sounds?.stopAsync();
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
