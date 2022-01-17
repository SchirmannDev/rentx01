import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ButtonProps extends TouchableOpacityProps {
  color: string;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  width: 100%;
  align-items: center;
  justify-content: center;

  background-color: ${({ color }) => color};
  border-radius: 15px;
  padding: 19px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.shape};
`;
