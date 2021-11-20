import React, { useEffect, useState } from 'react';
import { Audio } from 'expo-av';

// styles
import { NaturalKey, AccidentalKey } from './styles';

// types
import { KeyProps } from './types';
import { Sound } from 'expo-av/build/Audio';
import { getMargin, getNote } from './utils';

const NoteKey = ({
  index,
  isNatural,
  note,
  naturalKeySize,
  getNaturalKeySize,
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
    setIsPressed(true);
    await sounds?.playAsync();
  };

  const stopNote = async () => {
    setIsPressed(false);
    await sounds?.stopAsync();
  };

  const onLayout = ({ nativeEvent }: { nativeEvent: any }) => {
    if (isNatural && index === 0) {
      getNaturalKeySize(nativeEvent?.layout?.height);
    }
  };

  return isNatural ? (
    <NaturalKey
      isPressed={isPressed}
      onTouchStart={playNote}
      onTouchEnd={stopNote}
      onLayout={onLayout}
      keyMargin={keyMargin}
      naturalKeySize={naturalKeySize}
    />
  ) : (
    <AccidentalKey
      isPressed={isPressed}
      onTouchStart={playNote}
      onTouchEnd={stopNote}
      keyMargin={keyMargin}
      naturalKeySize={naturalKeySize}
    />
  );
};

export default NoteKey;
