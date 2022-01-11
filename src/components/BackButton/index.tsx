import React from 'react';

import { BorderlessButtonProps } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'styled-components';


import * as S from './styles';

interface Props extends BorderlessButtonProps {
  color?: string;
}

const BackButton = ({ color, ...rest }: Props) => {
  const theme = useTheme();
  return (
    <S.Container {...rest}>
      <MaterialIcons name="chevron-left" size={24} color={color || theme.colors.text} />

    </S.Container>
  )
}

export default BackButton;
