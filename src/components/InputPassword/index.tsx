import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { BorderlessButton } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';

import * as S from './styles';

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

const InputPassword = ({ iconName, value, ...rest }: Props) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const [isVisible, setIsVisible] = useState(true);

  function handlePassVisibility() {
    setIsVisible(isVisible => !isVisible);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <S.Container isFocused={isFocused}>
      <S.IconContainer isFocused={isFocused}>
        <Feather
          name={iconName}
          size={24}
          color={
            isFocused || isFilled ? theme.colors.main : theme.colors.text_detail
          }
        />
      </S.IconContainer>

      <S.InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        secureTextEntry={isVisible}
        isFocused={isFocused}
        {...rest}
      />
      <BorderlessButton onPress={() => handlePassVisibility()}>
        <S.IconContainer>
          <Feather
            name={isVisible ? 'eye' : 'eye-off'}
            size={24}
            color={theme.colors.text_detail}
          />
        </S.IconContainer>
      </BorderlessButton>
    </S.Container>
  );
};

export default InputPassword;
