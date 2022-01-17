import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { useTheme } from 'styled-components';

import * as S from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  color: string;
  onPress: () => void;
}

const Button = ({ title, color, onPress }: Props) => {
  const theme = useTheme();
  return (
    <S.Container color={color || theme.colors.main} onPress={onPress}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Button;
