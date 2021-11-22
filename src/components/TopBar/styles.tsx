import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #181616;
`;

export const ContainerH = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
  flex-direction: row;
`;

export const Display = styled.View`
  width: 300px;
  height: 10%;
  background: #616060;
  align-items: center;
  justify-content: center;
  border: solid 3px #ddd;
  border-radius: 10px;
  margin-right: 20px;
`;

export const DisplayText = styled.Text`
  font-size: 33px;
  color: white;
  font-family: 'Dotdot';
`;
