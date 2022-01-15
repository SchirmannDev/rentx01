import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

const ConfirmButton = ({ title, ...rest }: Props) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default ConfirmButton;
