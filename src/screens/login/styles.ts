import styled from 'styled-components/native';
import {colors} from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 0 30px;
  background-color: ${colors.background};
`;
export const Background = styled.Image`
  width: 80%;
  position: absolute;
  margin: 150px 0 0 40px;
`;
export const Logo = styled.Image`
  margin-top: 30px;
  margin-bottom: 170px;
`;

export const Form = styled.View`
  margin-top: 30px;
`;

export const Input = styled.TextInput`
  height: 56px;
  border-radius: 8px;
  background-color: ${colors.blocks};
  margin: 8px 0;
  padding: 0 0 0 16px;
  font-size: 16px;
`;
export const Button = styled.TouchableOpacity`
  height: 56px;
  background-color: ${colors.primary};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
`;
export const ButtonDarkPart = styled.View`
  height: 56px;
  width: 55px;
  background-color: ${colors.primaryDarken};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  align-items: center;
  justify-content: center;
`;
