import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';

import * as S from './styles';

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

const Input = ({ iconName, value, ...rest }: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  const theme = useTheme();

  return (
    <S.Container>
      <S.InputContainer isFocused={isFocused}>
        <Feather
          name={iconName}
          size={24}
          color={
            isFocused || isFilled ? theme.colors.main : theme.colors.text_detail
          }
        />
      </S.InputContainer>

      <S.InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        {...rest}
      />
    </S.Container>
  );
};

export default Input;
