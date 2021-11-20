export const getNote = (note: string) => {
  const paths = {
    c4: require('../../../assets/audio/c4.mp3'),
    'c#4': require('../../../assets/audio/c4.mp3'),
    d4: require('../../../assets/audio/d4.mp3'),
    'd#4': require('../../../assets/audio/d4.mp3'),
    e4: require('../../../assets/audio/e4.mp3'),
    f4: require('../../../assets/audio/f4.mp3'),
    'f#4': require('../../../assets/audio/f4.mp3'),
    g4: require('../../../assets/audio/g4.mp3'),
    'g#4': require('../../../assets/audio/g4.mp3'),
    a4: require('../../../assets/audio/a5.mp3'),
    'a#4': require('../../../assets/audio/a5.mp3'),
    b4: require('../../../assets/audio/b5.mp3'),
  };

  return paths[note];
};

export const getMargin = (naturalKeySize: number, index: number) => {
  const halfNoteSize = naturalKeySize / 3.2;
  let naturalKeyMargin = 4;

  switch (index) {
    case 1:
      naturalKeyMargin *= 2;
      return naturalKeySize + naturalKeyMargin - halfNoteSize;
    case 3:
      naturalKeyMargin *= 4;
      return naturalKeySize * 2 + naturalKeyMargin - halfNoteSize;
    case 6:
      naturalKeyMargin *= 8;
      return naturalKeySize * 4 + naturalKeyMargin - halfNoteSize;
    case 8:
      naturalKeyMargin *= 10;
      return naturalKeySize * 5 + naturalKeyMargin - halfNoteSize;
    default:
      naturalKeyMargin *= 12;
      return naturalKeySize * 6 + naturalKeyMargin - halfNoteSize;
  }
};
