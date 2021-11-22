import { TextProps, ViewProps } from 'react-native';
import styled from 'styled-components/native';

interface View extends ViewProps {
  isPressed?: boolean;
  keyMargin: number;
  naturalKeySize: number;
}

interface Text extends TextProps {
  isPressed?: boolean;
}

export const NaturalKey = styled.View<View>`
  background: ${(p) => (p.isPressed ? '#ddd' : 'white')};
  border-left-width: 4px;
  border-left-color: ${(p) => (p.isPressed ? 'black' : 'white')};
  border-radius: 8px;
  flex: 1;
  margin: 4px 4px;
`;

export const AccidentalKey = styled.View<View>`
  background: ${(p) => (p.isPressed ? '#201e1e' : 'black')};
  border-radius: 8px;
  height: ${(p) => p.naturalKeySize / 1.6}px;
  width: ${(p) => (p.isPressed ? 49 : 50)}%;
  position: absolute;
  right: 0;
  top: ${(p) => p.keyMargin}px;
  z-index: 999;
`;

export const NaturalNoteName = styled.Text<Text>`
  color: gray;
  font-size: 25px;
  font-weight: bold;
  transform: rotate(90deg);
  position: absolute;
  left: ${(p) => (p.isPressed ? 8 : 4)}px;
  top: 10px;
`;

export const AccidentalNoteName = styled.Text`
  color: #b8b7b7;
  font-size: 22px;
  font-weight: bold;
  transform: rotate(90deg);
  position: absolute;
  left: 2px;
  top: 10px;
`;
