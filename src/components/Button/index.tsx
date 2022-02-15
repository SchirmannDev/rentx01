import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';

import { useTheme } from 'styled-components';

import * as S from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  color: string;
  onPress: () => void;
  enabled?: boolean;
  loading?: boolean;


}

const Button = ({ title, color, onPress, enabled = true, loading = false }: Props) => {
  const theme = useTheme();
  return (
    <S.Container
      color={color || theme.colors.main}
      onPress={onPress}
      enabled={enabled}
      loading={loading}
      style={{ opacity: (enabled === false || loading === true) ? .5 : 1 }}

    >
      {loading

        ? <ActivityIndicator color={theme.colors.shape} />
        : <S.Title>{title}</S.Title>
      }
    </S.Container>
  );
};

export default Button;
