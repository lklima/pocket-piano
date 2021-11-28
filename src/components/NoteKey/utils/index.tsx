export const getMargin = (naturalKeySize: number, index: number) => {
  const halfNoteSize = naturalKeySize / 3.2;
  let naturalKeyMargin = 2.5;

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
