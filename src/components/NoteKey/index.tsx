import React, { useEffect, useRef, useState } from 'react';
import Sound from 'react-native-sound';

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

  const sound = useRef(new Sound(note + '.mp3', Sound.MAIN_BUNDLE, () => {}));

  const noteName = note.replace('1', '#').replace('4', '').toLocaleUpperCase();

  useEffect(() => {
    if (!isNatural) {
      const margin = getMargin(naturalKeySize, index);

      setKeyMargin(margin);
    }
  }, [isNatural, naturalKeySize, index]);

  const playNote = () => {
    cancelReset();
    setLcdText(`NOTE ${noteName}`);
    setIsPressed(true);

    sound.current.play((suc) => console.log(suc));
  };

  const stopNote = () => {
    resetLcdText();
    setIsPressed(false);
    setTimeout(() => sound.current.stop(), 200);
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
      testID={`${noteName}-note-key`}
    >
      <S.NaturalNoteName isPressed={isPressed}>{noteName}</S.NaturalNoteName>
    </S.NaturalKey>
  ) : (
    <S.AccidentalKey
      isPressed={isPressed}
      onTouchStart={playNote}
      onTouchEnd={stopNote}
      keyMargin={keyMargin}
      naturalKeySize={naturalKeySize}
      testID={`${noteName}-note-key`}
    >
      <S.AccidentalNoteName>{noteName}</S.AccidentalNoteName>
    </S.AccidentalKey>
  );
};

export default NoteKey;
