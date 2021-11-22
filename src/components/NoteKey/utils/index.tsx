export const getNote = (note: string) => {
  const paths = {
    C4: require('../../../assets/audio/C4.mp3'),
    'C#4': require('../../../assets/audio/Db4.mp3'),
    D4: require('../../../assets/audio/D4.mp3'),
    'D#4': require('../../../assets/audio/Eb4.mp3'),
    E4: require('../../../assets/audio/E4.mp3'),
    F4: require('../../../assets/audio/F4.mp3'),
    'F#4': require('../../../assets/audio/Gb4.mp3'),
    G4: require('../../../assets/audio/G4.mp3'),
    'G#4': require('../../../assets/audio/Ab4.mp3'),
    A4: require('../../../assets/audio/A4.mp3'),
    'A#4': require('../../../assets/audio/Bb4.mp3'),
    B4: require('../../../assets/audio/B4.mp3'),
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
