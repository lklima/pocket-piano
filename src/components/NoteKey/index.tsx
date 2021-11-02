import React from 'react';

// styles
import { NaturalKey, AccidentalKey } from './styles';

// types
import { Props } from './types';

const NoteKey = ({ isAcidental }: Props) => {
  return isAcidental ? <AccidentalKey /> : <NaturalKey />;
};

export default NoteKey;
